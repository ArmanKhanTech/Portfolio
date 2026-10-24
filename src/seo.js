// Page metadata shared by the app (client-side navigation) and the build
// (vite.config.js writes a pre-filled HTML file for every route).
// Keep this file free of asset imports so Node can load it at build time.

export const SITE_URL = "https://portfolioarman.netlify.app";
export const SITE_NAME = "Arman Khan";
export const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const pages = {
  "/": {
    label: "Home",
    title: "Arman Khan | Backend Software Engineer",
    heading: "Arman Khan, Backend Software Engineer",
    description:
      "Arman Khan is a backend-focused Software Engineer from India who builds, architects and scales high-performance server applications, APIs and enterprise infrastructure.",
  },
  "/about": {
    label: "About",
    title: "About Arman Khan | Skills, Achievements & Education",
    heading: "About Arman Khan",
    description:
      "Skills across C#, .NET, SQL, Python and cloud tooling, a national hackathon win at NextNiche 2.0, and a B.E. in Computer Engineering with a 9.06 CGPA.",
  },
  "/experience": {
    label: "Experience",
    title: "Experience | Arman Khan, Backend Software Engineer",
    heading: "Experience",
    description:
      "Software Engineer building AI document platforms, ATM and kiosk payment systems, event-driven telemetry and a deployment system that cut releases from hours to under 60 seconds.",
  },
  "/projects": {
    label: "Projects",
    title: "Projects | Arman Khan",
    heading: "Projects",
    description:
      "Ironwall, a next-generation firewall; FundusCam, AI-powered retinal imaging; plus open-source Flutter, Android and Node.js projects by Arman Khan.",
  },
  "/services": {
    label: "Services",
    title: "Services | Backend, DevOps & AI Engineering by Arman Khan",
    heading: "Services",
    description:
      "Backend and API engineering, system architecture and DevOps, AI and LLM integration, quality engineering, and full-stack web and cross-platform apps.",
  },
  "/contact": {
    label: "Contact",
    title: "Contact Arman Khan | Hire a Backend Engineer",
    heading: "Contact",
    description:
      "Get in touch with Arman Khan about backend, infrastructure or AI projects. Based in India and open to new opportunities.",
  },
};

// schema.org data for search engines: who the site is about and where else
// they can be found.
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      jobTitle: "Software Engineer",
      description: pages["/"].description,
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Anjuman-I-Islam's Kalsekar Technical Campus",
        },
        {
          "@type": "EducationalOrganization",
          name: "Abdul Razzak Kalsekar Polytechnic",
        },
      ],
      knowsAbout: [
        "Backend Development",
        "System Architecture",
        "API Design",
        "Database Design",
        "DevOps",
        "LLM Integration",
        "C#",
        ".NET",
        "SQL Server",
        "Python",
        "Flutter",
      ],
      sameAs: [
        "https://github.com/ArmanKhanTech",
        "https://www.linkedin.com/in/arman-khan-25b624205/",
      ],
    },
  ],
};

export const getPageMeta = (pathname) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  const meta = pages[path] ?? pages["/"];
  return { ...meta, url: path === "/" ? `${SITE_URL}/` : SITE_URL + path };
};
