import { defineConfig } from "vite";

import { OG_IMAGE, getPageMeta, pages, structuredData } from "./src/seo.js";

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const noscriptLinks = Object.entries(pages)
  .map(
    ([path, { label }]) =>
      `<a href="${path}" style="color: #ea580c">${label}</a>`,
  )
  .join(" · ");

// Fills the __PAGE_*__ tokens in index.html with one route's metadata.
const renderHtml = (html, pathname) => {
  const meta = getPageMeta(pathname);
  return html
    .replaceAll("__PAGE_TITLE__", escapeHtml(meta.title))
    .replaceAll("__PAGE_DESCRIPTION__", escapeHtml(meta.description))
    .replaceAll("__PAGE_HEADING__", escapeHtml(meta.heading))
    .replaceAll("__PAGE_URL__", meta.url)
    .replaceAll("__OG_IMAGE__", OG_IMAGE)
    .replaceAll("__NOSCRIPT_LINKS__", noscriptLinks)
    .replace(
      "__STRUCTURED_DATA__",
      JSON.stringify(structuredData).replace(/</g, "\\u003c"),
    );
};

// Writes dist/<route>.html for every page, so crawlers and link
// previews get the right title, description and canonical URL without
// running JavaScript, plus a sitemap.xml built from the same page list.
// The SPA still takes over once the bundle loads.
const prerenderMeta = () => ({
  name: "prerender-meta",
  enforce: "post",
  transformIndexHtml: {
    order: "post",
    handler(html, ctx) {
      // In dev, fill the tokens for whichever page was requested.
      if (ctx.server)
        return renderHtml(
          html,
          new URL(ctx.originalUrl ?? "/", "http://x").pathname,
        );
      return html;
    },
  },
  generateBundle(_, bundle) {
    const index = bundle["index.html"];
    if (!index) return;
    const template = String(index.source);

    index.source = renderHtml(template, "/");

    const lastmod = new Date().toISOString().slice(0, 10);
    const urls = Object.keys(pages)
      .map(
        (path) =>
          `  <url>\n    <loc>${getPageMeta(path).url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
      )
      .join("\n");
    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    });

    for (const path of Object.keys(pages)) {
      if (path === "/") continue;
      this.emitFile({
        type: "asset",
        fileName: `${path.slice(1)}.html`,
        source: renderHtml(template, path),
      });
    }
  },
});

export default defineConfig({
  plugins: [prerenderMeta()],
  build: {
    chunkSizeWarningLimit: 1600,
    sourcemap: true,
    rollupOptions: {
      output: {
        // Keep large, rarely-changing libraries in their own long-cached chunks.
        manualChunks(id) {
          // Bundler helpers are shared by every chunk; keep them with React so
          // the entry never has to pull in the 3D libraries to get them.
          if (
            id.includes("vite/preload-helper") ||
            id.includes("commonjsHelpers")
          )
            return "react";
          if (!id.includes("node_modules")) return;
          if (id.includes("/three/")) return "three";
          if (id.includes("@react-three") || id.includes("three-stdlib"))
            return "r3f";
          if (
            /\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(
              id,
            )
          )
            return "react";
        },
      },
    },
  },
});
