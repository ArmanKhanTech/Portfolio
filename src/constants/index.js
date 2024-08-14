import {
  educationIcon,
  experianceIcon,
  divine,
  dailydoze,
  medicomm,
  achievix,
  nimbus,
  lumos,
} from "../assets/images";

import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  tailwindcss,
  threejs,
  react,
  java,
  androidDev,
  webDev,
  crossDev,
  ml,
  serverless,
  desktopDev,
} from "../assets/icons";
import { e } from "maath/dist/index-0332b2ed.esm";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programming Language",
  },
];

export const education = [
  {
    title: "Anjuman-I-Islam's Kalsekar Technical Campus",
    date: "Dec 2022 - Aug 2025   |   CGPA: 9.33",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I am currently pursuing my undergraduate degree with a focus on B.E. in Computer Engineering at Mumbai University.",
      "Through rigorous coursework and hands-on projects, I am developing a strong foundation in various domians of Computer Science, preparing myself for a successful career in Software Development.",
    ],
  },
  {
    title: "Anjuman-I-Islam's Abdul Razzak Kalsekar Polytechnic",
    date: "Aug 2019 - July 2022   |   Grade: 88 %",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I successfully completed the Maharashtra State Board of Technical Education (MSBTE) Diploma program, acquiring comprehensive knowledge and practical skills in Computer Engineering.",
      "This educational foundation equips me to excel in my professional endeavors and contribute effectively to the field.",
    ],
  },
  {
    title: "J.M Rathi English School & Junior College",
    date: "June 2013 - Mar 2019   |   Percentage: 89 %",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I successfully navigated a rigorous high school curriculum, demonstrating exceptional academic aptitude and a commitment to excellence.",
      "Engaging in diverse extracurricular activities, I honed leadership and interpersonal skills, fostering a well-rounded educational experience.",
    ],
  },
];

export const experiance = [
  {
    title: "Freelancer",
    date: "Dec 2022 - Aug 2025",
    empolyer: "Self-Employed",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Engaged in freelancing for various clients, crafting creative solutions tailored to their requirements",
      "Specializes in multi-domain software development.",
      "Completed four distinct projects to date.",
    ],
  },
  {
    title: "App Lead",
    date: "Aug 2023 - July 2024",
    empolyer: "GDSC AIKTC",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Organized multiple workshops on Android Development, covering Kotlin, Jetpack Compose, and Flutter, for students from two colleges.",
      "Acted as a facilitator for Gen-AI Study Jams.",
    ],
  },
  {
    title: "Tech Lead",
    date: "Jan 2024 - Feb 2024",
    empolyer: "Algorithm 8.0",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Managed a team of 10 individuals to create the official registration and management system for Algorithm 8.0, a yearly national hackathon hosted by our college.",
      "The system comprised an Android application for event organization and a website for registration.",
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

export const projects = [
  {
    iconUrl: divine,
    theme: "btn-back-blue",
    name: "Divine",
    description:
      "A social media app made on Flutter. It is a social media app that allows users to share their thoughts and ideas with the world.",
    link: "https://github.com/armankhantech/divine",
  },
  {
    iconUrl: dailydoze,
    theme: "btn-back-blue",
    name: "DailyDoze",
    description:
      "A checklist to help you live a healthy life & much more. It is a checklist app that helps you to keep track of your daily tasks.",
    link: "https://github.com/armankhantech/dailydoze",
  },
  {
    iconUrl: achievix,
    theme: "btn-back-blue",
    name: "MindMaster",
    description:
      "An Android productivity app. It is a productivity app that helps you to keep track of your daily tasks.",
    link: "https://github.com/armankhantech/mindmaster",
  },
  {
    iconUrl: lumos,
    theme: "btn-back-blue",
    name: "Lumos",
    description:
      "A image editor plugin for Flutter. It is a plugin that allows you to edit images in your Flutter app.",
    link: "https://pub.dev/packages/lumos",
  },
  {
    iconUrl: nimbus,
    theme: "btn-back-blue",
    name: "Nimbus",
    description:
      "A summarized news & weather app. It provides you with the latest news in summarized format.",
    link: "https://github.com/armankhantech/nimbus",
  },
  {
    iconUrl: medicomm,
    theme: "btn-back-blue",
    name: "Medicomm",
    description:
      "A pharmacy e-commerce website. It is an e-commerce website that allows users to buy medicines online.",
    link: "https://github.com/armankhantech/medicomm",
  },
];

export const services = [
  {
    iconUrl: webDev,
    theme: "btn-back-blue",
    name: "Full-Stack Web Development",
    description:
      "I develop static and dynamic websites and web applications using the latest technologies available in the market along with responsive design.",
    link: "https://www.mongodb.com/mern-stack",
  },
  {
    iconUrl: desktopDev,
    theme: "btn-back-blue",
    name: "Desktop Development",
    description:
      "I build desktop applications using Electron.js. I use Electron.js to build desktop applications compatible with Windows, macOS, and Linux.",
    link: "https://en.wikipedia.org/wiki/Electron_(software_framework)",
  },
  {
    iconUrl: androidDev,
    theme: "btn-back-blue",
    name: "Native Android App Development",
    description:
      "I build native Android apps using Java and Kotlin. I utilize the technologies such as Jetpack Compose to create modern Android apps.",
    link: "https://www.android.com/intl/en_in/",
  },
  {
    iconUrl: crossDev,
    theme: "btn-back-blue",
    name: "Cross-Platform App Development",
    description:
      "I build cross-platform mobile apps using Flutter. Flutter allows us to create responsive apps for Android & iOS using a single codebase.",
    link: "https://flutter.dev/",
  },
  {
    iconUrl: ml,
    theme: "btn-back-blue",
    name: "Machine Learning",
    description:
      "I train & fine-tune machine learning models using Python and TensorFlow & also have the ability to integrate existing ML solutions into our products.",
    link: "https://www.tensorflow.org/",
  },
  {
    iconUrl: serverless,
    theme: "btn-back-blue",
    name: "Serverless Computing",
    description:
      "I build serverless applications using Serverless Computing. I use Firebase to build serverless applications that scale automatically.",
    link: "https://firebase.google.com/",
  },
];
