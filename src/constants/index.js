import { 
    educationIcon, 
    logo,
    divine,
    dailydoze,
    medicomm,
    achievix 
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
    java
} from "../assets/icons";

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
    }

];

export const education = [
    {
        title: "Anjuman-I-Islam's Kalsekar Technical Campus",
        date: "Dec 2022 - Aug 2025",
        icon: educationIcon,
        iconBg: "#00c6ff",
        points: [
            "I am currently pursuing my undergraduate degree with a focus on B.E. in Computer Engineering at Mumbai University.",
            "Through rigorous coursework and hands-on projects, I am developing a strong foundation in various domians of Computer Science, preparing myself for a successful career in Software Development.",
        ],
    },
    {
        title: "Anjuman-I-Islam's Abdul Razzak Kalsekar Polytechnic",
        date: "Aug 2019 - July 2022",
        icon: educationIcon,
        iconBg: "#00c6ff",
        points: [
            "I successfully completed the Maharashtra State Board of Technical Education (MSBTE) Diploma program, acquiring comprehensive knowledge and practical skills in Computer Engineering.",
            "This educational foundation equips me to excel in my professional endeavors and contribute effectively to the field.",
        ],
    },
    {
        title: "J.M Rathi English School & Junior College",
        date: "June 2013 - Mar 2019",
        icon: educationIcon,
        iconBg: "#00c6ff",
        points: [
            "I successfully navigated a rigorous high school curriculum, demonstrating exceptional academic aptitude and a commitment to excellence.",
            "Engaging in diverse extracurricular activities, I honed leadership and interpersonal skills, fostering a well-rounded educational experience."
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ArmanKhanTech',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arman-khan-25b624205',
    }
];

export const projects = [
    {
        iconUrl: divine,
        theme: 'btn-back-blue',
        name: 'Divine',
        description: 'A social media app made on Flutter. It is a social media app that allows users to share their thoughts and ideas with the world.',
        link: 'https://github.com/armankhantech/divine',
    },
    {
        iconUrl: dailydoze,
        theme: 'btn-back-blue',
        name: 'DailyDoze',
        description: 'A checklist to help you live a healthy life & much more. It is a checklist app that helps you to keep track of your daily tasks.',
        link: 'https://github.com/armankhantech/dailydoze',
    },
    {
        iconUrl: achievix,
        theme: 'btn-back-blue',
        name: 'Achievix',
        description: 'An Android productivity app. It is a productivity app that helps you to keep track of your daily tasks.',
        link: 'https://github.com/armankhantech/achievix',
    },
    {
        iconUrl: logo,
        theme: 'btn-back-blue',
        name: 'Portfolio',
        description: 'My 3D personl portfolio website. It is a portfolio website that showcases my skills, education and projects.',
        link: 'https://github.com/armankhantech/portfolio',
    },
    {
        iconUrl: medicomm,
        theme: 'btn-back-blue',
        name: 'Medicomm',
        description: 'A pharmacy e-commerce website. It is an e-commerce website that allows users to buy medicines online.',
        link: 'https://github.com/armankhantech/medicomm',
    }
];

export const services = [
    {
        iconUrl: html,
        theme: 'btn-back-blue',
        name: 'Full-Stack Web Development',
        description: 'I develop static and dynamic websites and web applications using the latest technologies available in the market.',
        link: 'https://www.mongodb.com/mern-stack',
    },
    {
        iconUrl: css,
        theme: 'btn-back-blue',
        name: 'UI/UX Design',
        description: 'I design attractive, responsive, and intuitive user interfaces to maximize user experience allowing to create attractive and responsive products.',
        link: 'https://www.browserstack.com/guide/what-is-user-interface',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-blue',
        name: 'Native Android App Development',
        description: 'I build native Android apps using Java and Kotlin. I utilize the technologies such as Jetpack Compose to create modern Android apps.',
        link: 'https://www.android.com/intl/en_in/',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-blue',
        name: 'Cross-Platform App Development',
        description: 'I build cross-platform mobile apps using Flutter. Flutter allows us to create responsive apps for Android & iOS using a single codebase.',
        link: 'https://flutter.dev/',
    },
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'Machine Learning',
        description: 'I train & fine-tune machine learning models using Python and TensorFlow & also have the ability to integrate existing ML solutions into our products.',
        link: 'https://www.tensorflow.org/',
    },
    {
        iconUrl: nodejs,
        theme: 'btn-back-blue',
        name: 'Serverless Computing',
        description: 'I build serverless applications using Serverless Computing. I use Firebase to build serverless applications that scale automatically.',
        link: 'https://firebase.google.com/',
    }
];