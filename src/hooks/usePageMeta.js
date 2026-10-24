import { useEffect } from "react";

import { getPageMeta } from "../seo";

const setContent = (selector, value) => {
  document.querySelector(selector)?.setAttribute("content", value);
};

// Keeps the document title, description, canonical link and social tags in
// step with the current route during client-side navigation.
const usePageMeta = (pathname) => {
  useEffect(() => {
    const { title, description, url } = getPageMeta(pathname);

    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[property="og:url"]', url);
    setContent('meta[name="twitter:title"]', title);
    setContent('meta[name="twitter:description"]', description);
  }, [pathname]);
};

export default usePageMeta;
