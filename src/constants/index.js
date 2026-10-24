import {
  TbShieldLock,
  TbEye,
  TbMessages,
  TbPhotoEdit,
  TbFocus2,
  TbPill,
  TbUsersGroup,
  TbChecklist,
  TbNews,
  TbServer,
  TbCloudComputing,
  TbBrain,
  TbTestPipe,
  TbWorldCode,
  TbDevices,
  TbBriefcase,
  TbSchool,
} from "react-icons/tb";

import {
  csharp,
  dotnet,
  aspnet,
  sqlserver,
  express,
  git,
  github,
  javascript,
  linkedin,
  nodejs,
  tailwindcss,
  react,
  java,
  ml,
  cpp,
  dart,
  docker,
  electron,
  flutter,
  firebase,
  flask,
  fastapi,
  gcp,
  jetpack,
  kotlin,
  linux,
  mysql,
  nginx,
  postgresql,
  python,
  php,
  redis,
  sql,
  ts,
  sqlite,
  nextjs,
  azureDevops,
  playwright,
  postman,
  raspberryPi,
} from "../assets/icons";

export const resumeUrl =
  "https://drive.google.com/file/d/1n4DzGFrqXPvLPZC13Y42ld728x6XRirO/view?usp=sharing";

// Short intros shown under each page title (about four lines on desktop),
// written in the resume's voice.
export const intros = {
  about:
    "Backend-focused Software Engineer who builds, architects and scales high-performance server applications and enterprise infrastructure. I specialize in system architecture, database and API design, and reliability engineering, cutting latency and raising quality wherever I work.",
  experience:
    "I design and scale production backends that businesses run on. I own the full lifecycle, from system architecture to automated deployments, monitoring and testing, and I lead and mentor engineers so teams ship faster with fewer defects.",
  projects:
    "I build complete products, not just features. My work spans diverse domains and every layer of the stack, from low-level software and backend services to polished interfaces and custom hardware, built to solve real problems for real users.",
  services:
    "I build the backbone of your product: fast, reliable backends and the infrastructure that keeps them running smoothly at scale. I bring AI into real workflows, keep quality high with automated testing, and ship the web, mobile and desktop apps that sit on top.",
  contact:
    "Have a system to build, scale or rescue? Tell me what you're working on and where you're stuck, and let's get it into production.",
};

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { imageUrl: csharp, name: "C#" },
      { imageUrl: sql, name: "SQL" },
      { imageUrl: cpp, name: "C++" },
      { imageUrl: javascript, name: "JavaScript" },
      { imageUrl: ts, name: "TypeScript" },
      { imageUrl: java, name: "Java" },
      { imageUrl: kotlin, name: "Kotlin" },
      { imageUrl: dart, name: "Dart" },
      { imageUrl: python, name: "Python" },
      { imageUrl: php, name: "PHP" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { imageUrl: dotnet, name: ".NET" },
      { imageUrl: aspnet, name: "ASP.NET" },
      { imageUrl: nodejs, name: "Node.js" },
      { imageUrl: express, name: "Express" },
      { imageUrl: flask, name: "Flask" },
      { imageUrl: fastapi, name: "FastAPI" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { imageUrl: sqlserver, name: "SQL Server" },
      { imageUrl: mysql, name: "MySQL" },
      { imageUrl: postgresql, name: "PostgreSQL" },
      { imageUrl: sqlite, name: "SQLite" },
      { imageUrl: redis, name: "Redis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { imageUrl: azureDevops, name: "Azure DevOps" },
      { imageUrl: github, name: "GitHub" },
      { imageUrl: docker, name: "Docker" },
      { imageUrl: nginx, name: "Nginx" },
      { imageUrl: linux, name: "Linux" },
      { imageUrl: gcp, name: "GCP" },
      { imageUrl: firebase, name: "Firebase" },
      { imageUrl: raspberryPi, name: "Raspberry Pi" },
      { imageUrl: git, name: "Git" },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { imageUrl: react, name: "React" },
      { imageUrl: nextjs, name: "Next.js" },
      { imageUrl: tailwindcss, name: "Tailwind" },
      { imageUrl: electron, name: "Electron" },
      { imageUrl: flutter, name: "Flutter" },
      { imageUrl: jetpack, name: "Compose" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { imageUrl: ml, name: "LLM / SLM" },
      { imageUrl: playwright, name: "Playwright" },
      { imageUrl: postman, name: "Postman" },
    ],
  },
];

export const achievements = [
  "Outperformed 1,825+ competing teams nationwide to win 1st Place at NextNiche 2.0, a hackathon hosted by AIT Pune.",
  "Co-founded two deep-tech startups and led technical operations as GDGC Technical Lead (2023–2025).",
  "Contributed to a production mobile application with 10,000+ active downloads on the Google Play Store.",
  "Mentored 50+ students in cross-platform development and organized regional hackathons impacting 800+ participants.",
];

export const education = [
  {
    Icon: TbSchool,
    title: "B.E. in Computer Engineering (DSE)",
    subtitle: "Anjuman-I-Islam's Kalsekar Technical Campus",
    date: "Nov 2022 – May 2025",
    highlight: "CGPA: 9.06 / 10.0",
  },
  {
    Icon: TbSchool,
    title: "Diploma in Computer Engineering",
    subtitle: "Abdul Razzak Kalsekar Polytechnic",
    date: "Aug 2019 – July 2022",
    highlight: "Grade: 87.66%",
  },
];

export const experience = [
  {
    Icon: TbBriefcase,
    title: "Software Engineer",
    subtitle: "Dectree Infotech · Navi Mumbai, India",
    date: "Jun 2025 – Present",
    points: [
      "Engineered an AI healthcare document platform using hybrid LLM/SLM workflows for automated ingestion and async reviews, slashing document processing time and manual operational effort.",
      "Co-developed an end-to-end payment and operational management platform for ATM and kiosk networks, orchestrating multi-party workflows across billers, retailers and customers with automated settlement processing and real-time reporting.",
      "Architected an event-driven telemetry system featuring live health monitoring and automated remote remediation, vastly increasing system uptime and proactive issue resolution.",
      "Built a custom end-to-end deployment system from scratch, automating workflows from repository cloning to production hosting and cutting deployment times by over 99% (from hours to under 60 seconds).",
      "Spearheaded quality engineering by architecting scalable regression test frameworks and mentoring junior engineers, accelerating release cycles while maintaining near zero-defect deployments.",
      "Standardized core backend infrastructure by delivering reusable SSO and event messaging, alongside a centralized template engine, eliminating redundant code and boosting engineering efficiency across projects.",
    ],
  },
  {
    Icon: TbBriefcase,
    title: "Co-founder & Technology Lead",
    subtitle: "Stealth Research",
    date: "May 2024 – Present",
    points: [
      "Co-founded a deep-tech startup shipping IT and cybersecurity services to clients across the world.",
    ],
    link: { label: "stealthresear.ch", href: "https://stealthresear.ch" },
  },
  {
    Icon: TbBriefcase,
    title: "Co-founder & Product Developer",
    subtitle: "NetraX",
    date: "Jul 2024 – Present",
    points: [
      "Co-founded a deep-tech startup building an OCT device that detects glaucoma and diabetes through the eyes.",
      "Developing the device prototype.",
    ],
  },
  {
    Icon: TbBriefcase,
    title: "Back End Developer",
    subtitle: "Techcraft Electronics LLC",
    date: "Aug 2024 – Oct 2024",
    points: [
      "Led the re-development of the company website.",
      "Restructured the site's data and overhauled the user experience, strengthening the company's online presence.",
    ],
  },
  {
    Icon: TbBriefcase,
    title: "Freelance Software Developer",
    subtitle: "Self-Employed",
    date: "Aug 2023 – May 2025",
    points: [
      "Delivered four client projects across multiple domains, each tailored to the client's requirements.",
    ],
  },
  {
    Icon: TbBriefcase,
    title: "Technical Lead",
    subtitle: "GDG on Campus AIKTC",
    date: "Aug 2023 – May 2025",
    points: [
      "Led technical operations for the campus chapter of Google Developer Groups.",
      "Organized workshops on Android development with Kotlin, Jetpack Compose and Flutter for students from two colleges.",
      "Facilitated Google's Gen-AI Study Jams.",
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/arman-khan-25b624205/",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ArmanKhanTech",
  },
];

const repo = (name) => `https://github.com/ArmanKhanTech/${name}`;

export const projects = [
  {
    Icon: TbShieldLock,
    name: "Ironwall",
    subtitle: "Next-Generation Firewall (NGFW)",
    points: [
      "Architected a next-gen firewall delivering context-aware, per-application traffic orchestration and real-time network anomaly detection.",
      "Engineered a full-stack security suite integrating a low-level background daemon, browser extension, cross-platform desktop/web apps and a centralized server.",
    ],
    tags: ["Network Security", "Daemon", "Browser Extension", "Desktop & Web"],
  },
  {
    Icon: TbEye,
    name: "FundusCam",
    subtitle: "Smart Retinal Imaging for Early Disease Detection",
    points: [
      "Designed an affordable, portable retinal imaging system using infrared LEDs and a Raspberry Pi 4 to enable accessible point-of-care diagnostics.",
      "Trained and deployed a custom deep learning classifier for automated, real-time detection of ophthalmic conditions, including glaucoma.",
    ],
    tags: ["Raspberry Pi 4", "Deep Learning", "Python", "Hardware"],
  },
  {
    Icon: TbMessages,
    name: "Celestia",
    subtitle: "Real-time chat on microservices",
    points: [
      "Built a real-time chat application on a microservices architecture with 1:1 and group messaging and user profiles.",
      "Delivers messages over WebSockets and Redis Pub/Sub, persists to PostgreSQL, stores profile media in Firebase and routes traffic through an Nginx gateway.",
    ],
    tags: ["TypeScript", "Microservices", "WebSockets", "Redis", "PostgreSQL"],
    source: repo("Celestia"),
  },
  {
    Icon: TbPhotoEdit,
    name: "Lumos",
    subtitle: "Image editing package for Flutter",
    points: [
      "Published a Flutter package for image editing with crop, rotate, flip, filters and real-time adjustments.",
      "Supports single and multiple images with dark and light modes on Android and iOS.",
    ],
    tags: ["Flutter", "Dart", "pub.dev"],
    source: repo("Lumos"),
    live: "https://pub.dev/packages/lumos",
  },
  {
    Icon: TbFocus2,
    name: "MindMaster",
    subtitle: "Distraction blocker for Android",
    points: [
      "Built an Android app that reduces distractions with app and website blocking, notification control and data management.",
      "Supports custom profiles, schedules and usage insights.",
    ],
    tags: ["Java", "Kotlin", "Android"],
    source: repo("MindMaster"),
  },
  {
    Icon: TbPill,
    name: "Medicomm",
    subtitle: "E-pharmacy platform",
    points: [
      "Built an e-pharmacy website supporting medicine sales, online payments, inventory management and order tracking.",
      "Packaged and published as a Docker image.",
    ],
    tags: ["Node.js", "Express", "Firebase", "Docker"],
    source: repo("Medicomm"),
    live: "https://hub.docker.com/r/armankhan792/medicomm",
  },
  {
    Icon: TbUsersGroup,
    name: "Divine",
    subtitle: "Cross-platform social media app",
    points: [
      "Built a social media application in Flutter for a seamless, engaging experience on both Android and iOS.",
      "Designed for robust social features behind an intuitive interface.",
    ],
    tags: ["Flutter", "Dart", "Firebase"],
    source: repo("Divine"),
  },
  {
    Icon: TbChecklist,
    name: "DailyDoze",
    subtitle: "Healthy habits tracker for Android",
    points: [
      'Built an Android app for tracking healthy eating, sleep, meditation, fasting and more, inspired by Dr. Greger\'s "How Not to Diet".',
      "Features customizable checklists, notifications and data backup.",
    ],
    tags: ["Java", "Android", "Firebase"],
    source: repo("DailyDoze"),
  },
  {
    Icon: TbNews,
    name: "Nimbus",
    subtitle: "News summaries & live weather",
    points: [
      "Built an app delivering concise news summaries and real-time weather updates.",
      "Features a customizable interface with light and dark modes.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Python", "Flask"],
    source: repo("Nimbus"),
    live: "https://nimbus-armankhantechs-projects.vercel.app/",
  },
];

export const services = [
  {
    Icon: TbServer,
    name: "Backend & API Engineering",
    description:
      "High-performance server applications and APIs on .NET, Express.js, Flask and FastAPI, backed by well-designed SQL Server, PostgreSQL and Redis data layers.",
    tags: [".NET", "Express", "FastAPI", "SQL Server", "Redis"],
  },
  {
    Icon: TbCloudComputing,
    name: "System Architecture & DevOps",
    description:
      "Event-driven systems with live health monitoring and automated remediation, shipped through CI/CD pipelines that take deployments from hours to under 60 seconds.",
    tags: ["Azure DevOps", "GitHub", "Docker", "Nginx", "IIS"],
  },
  {
    Icon: TbBrain,
    name: "AI & LLM Integration",
    description:
      "Hybrid LLM/SLM workflows that automate document ingestion and review, plus custom deep learning models trained and deployed for real-time inference.",
    tags: ["LLM / SLM", "Python", "Deep Learning"],
  },
  {
    Icon: TbTestPipe,
    name: "Quality Engineering",
    description:
      "Scalable regression test frameworks and API test suites that speed up release cycles while keeping deployments near zero-defect.",
    tags: ["Playwright", "Postman", "Regression Testing"],
  },
  {
    Icon: TbWorldCode,
    name: "Full-Stack Web Development",
    description:
      "Fast, responsive web applications with React, Next.js and Tailwind CSS, wired straight into robust backends.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    Icon: TbDevices,
    name: "Cross-Platform Apps",
    description:
      "Android and iOS apps from a single Flutter codebase, native Android with Kotlin and Jetpack Compose, and desktop apps for Windows, macOS and Linux with Electron.",
    tags: ["Flutter", "Jetpack Compose", "Electron"],
  },
];
