import { Github, Linkedin, Mail, Twitter, Phone, MapPin } from "lucide-react";
import ProfilePic from "@/app/assets/images/ProfilePic.jpg";

export const PERSONAL_INFO = {
    name: "Deeban Yathiraja R",
    role: "Software Engineer",
    title: "Software Engineer | React.js & React Native Developer",
    email: "deepanyathiraja@gmail.com",
    phone: "+91 7339003664",
    location: "Trichy, Tamil Nadu, India",
    about: "Passionate Software Engineer with expertise in designing and building scalable web and mobile applications using React.js, React Native, Node.js, and NestJS. Skilled in full-stack development, RESTful APIs, state management, and PostgreSQL optimization. Experienced in system design, responsive interfaces, and delivering production-ready solutions. Seeking a software development role to contribute to innovative applications while leading end-to-end implementation.",
    profilePic: ProfilePic,
    resume: "https://drive.google.com/file/d/1g3xfxms9j3U5Fb740r21jbxs_cBwvjOB/view?usp=drive_link", // Add your Drive link here
    social: {
        github: "https://github.com/deepan-2002",
        linkedin: "https://linkedin.com/in/deeban-yathiraja",
    },
};

export const SKILLS = [
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "React.js", category: "Frontend" },
    { name: "React Native", category: "Frontend" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Material UI", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "PostgreSQL", category: "Databases & Caching" },
    { name: "Redis", category: "Databases & Caching" },
    { name: "Prisma", category: "ORMs" },
    { name: "TypeORM", category: "ORMs" },
    { name: "Git", category: "Tools & DevOps" },
    { name: "Docker", category: "Tools & DevOps" },
    { name: "Expo", category: "Mobile" },
];

export const EXPERIENCE = [
    {
        company: "Apyrn Labs Private Limited",
        location: "Coimbatore, Tamil Nadu",
        role: "Software Engineer",
        period: "Mar 2024 -- Present",
        description: [
            "Built and maintained web and mobile apps using React.js, React Native, and Expo.",
            "Designed responsive UI components with Material UI and modern CSS for maintainability and UX.",
            "Implemented backend services, REST APIs, authentication flows, and optimized PostgreSQL databases with Redis caching.",
            "Collaborated with cross-functional teams using Git and Agile methodologies to deliver features on schedule.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "Inventory Management System – Zpiceup (B2B & B2C)",
        company: "Apyrn Labs Private Limited",
        description: "Designed and developed web and mobile applications for admin, sales, and delivery workflows using React.js, React Native, Expo, Node.js, and NestJS. Enabled real-time inventory updates and seamless B2B/B2C operations.",
        tech: ["React.js", "React Native", "Expo", "Node.js", "NestJS", "PostgreSQL", "Redis", "Material UI"],
        links: {
            admin: "https://play.google.com/store/apps/details?id=com.apyrn.zpiceup.ca",
            b2b: "https://play.google.com/store/apps/details?id=com.apyrn.ecommerce.b2b",
            b2c: "https://play.google.com/store/apps/details?id=com.apyrn.ecommerce.b2c",
        },
    },
    {
        title: "Vanygam – SaaS Inventory Management Solution",
        company: "Apyrn Labs Private Limited",
        description: "Designed and implemented SaaS web and mobile platform for inventory and sales management for small businesses. Developed dashboards, reporting modules, and role-based access.",
        tech: ["React.js", "React Native", "Node.js", "NestJS", "Tailwind CSS", "JWT"],
        links: {
            app: "https://play.google.com/store/apps/details?id=com.apyrn.mobile.vanygam",
        },
    },
];

export const EDUCATION = [
    {
        institution: "St. Joseph’s College (Autonomous)",
        location: "Trichy, Tamil Nadu",
        degree: "Bachelor of Commerce",
        period: "2019 -- 2022",
    },
];

export const CERTIFICATIONS = [
    {
        name: "Meta Front-End Developer Certification",
        issuer: "Meta (Coursera)",
        date: "Mar 2024",
        description: [
            "Learned HTML, CSS, JavaScript, React.js, component-based architecture, and Git workflows.",
            "Developed debugging, performance optimization, and maintainable code skills.",
        ],
        link: "https://www.coursera.org/account/accomplishments/specialization/DHX8QTZY2MGF",
    },
];
