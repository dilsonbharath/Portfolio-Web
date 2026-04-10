import profileImage from "../assets/images/profile.png";
import resumeFile from "../assets/documents/DILSON BHARATH _R_Resume (3).pdf";
import portfolio from "../assets/images/project1.png";
import habit from "../assets/images/project2.png";
import ehr from "../assets/images/project3.png";  

import linkedinIcon from "../assets/skills/linkedin (1).png";

import emailIcon from "../assets/icons/email.png";
import githubIcon from "../assets/icons/github.webp";
import leetcodeIcon from "../assets/icons/leetcode.png";
import facebookIcon from "../assets/icons/facebook.png";

import pythonIcon from "../assets/skills/python.jpg";
import htmlIcon from "../assets/skills/html.jpg";
import cssIcon from "../assets/skills/css.jpg";
import javascriptIcon from "../assets/skills/javascript.jpg";
import bootstrapIcon from "../assets/skills/bootstrap.jpg";
import gitIcon from "../assets/skills/git.jpg";
import cppIcon from "../assets/skills/cpp.jpg";
import vscodeIcon from "../assets/skills/vscode.jpg";
import reactico from "../assets/skills/atom.png";
import mlicon from "../assets/skills/machine-learning.png";
import ragico from "../assets/skills/robot.png";
import sql from "../assets/skills/mysql-database.png";

import insta from "../assets/images/instagram.png";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const heroContent = {
  badge: "Open to Opportunities",
  greeting: "Hello, I'm",
  name: "Dilson Bharath R",
  role: "Software Developer",
  roles: [
    "Software Developer",
    "AI Enthusiast",
    "Full Stack Builder",
    "Problem Solver"
  ],
  summary:
    "Final-year Artificial Intelligence and Data Science student focused on building practical, user-friendly web products and data-driven solutions that make a real impact.",
  image: profileImage
};

export const aboutContent = {
  title: "About Me",
  image: profileImage,
  description:
    "I am a final-year Artificial Intelligence and Data Science student with strong programming, machine learning, web development skills and continuously learning and exploring the evolving AI technologies. Seeking opportunities to apply Python and AI/ML expertise to build data-driven systems, with a focus on impactful technology solutions.",
  resume: resumeFile,
  experienceYears: "01",
  philosophy:
    "Sustainable engineering means clarity over complexity and performance that scales without sacrificing user experience.",
  leadership:
    "I thrive in collaborative teams, translating product vision into systems that are reliable, modular, and easy to maintain.",
  highlights: [
    "Modularity over complexity",
    "Performance with reliability",
    "Human-first interface design"
  ]
};

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built to showcase my profile, work, and contact presence with clean UX and modern design principles.",
    image: portfolio,
    link: "https://dilsonbharath.me",
    tags: ["HTML", "CSS", "ReactJS"]
  },
  {
    title: "Daily Habit Tracker",
    description:
      "A focused productivity app concept that helps users track daily habits, stay consistent with goals, and build lasting routines.",
    image: habit,
    link: "https://your-habit.app",
    tags: ["FastAPI", "RAG", "AI Chatbot"]
  },
  {
    title: "Machine Learning Model for Security",
    description:
      "A machine learning model for security that can detect anomalies in network traffic and identify potential security threats.",
    image: ehr,
    link: "https://dilsonbharath.github.io/New-Project/",
    tags: ["Python", "Machine Learning", "Cybersecurity"]
  }
];

export const skills = [
  { name: "Python", icon: pythonIcon, level: "Core" },
  { name: "React", icon: reactico, level: "Frontend" },
  { name: "JavaScript", icon: javascriptIcon, level: "Core" },
  { name: "HTML5", icon: htmlIcon, level: "Core" },
  { name: "CSS3", icon: cssIcon, level: "Core" },
  
  { name: "Git", icon: gitIcon, level: "Workflow" },
  { name: "C++", icon: cppIcon, level: "DSA" },
  { name: "Bootstrap", icon: bootstrapIcon, level: "UI Framework" },
  { name: "FastAPI", icon: pythonIcon, level: "Backend" },
  { name: "VS Code", icon: vscodeIcon, level: "Workflow" },
  { name: "MySQL", icon: sql, level: "Data" },
  { name: "DSA", icon: leetcodeIcon, level: "Problem Solving" },
  { name: "AI / ML", icon: mlicon, level: "Focus Area" },
  { name: "RAG", icon: ragico, level: "Focus Area" }
];

export const contactContent = {
  title: "Let's Connect",
  subtitle:
    "I'm always excited to discuss new opportunities, collaborate on projects, or just have a conversation about tech and design.",
  socialLinks: [
    {
      name: "Email",
      href: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFqxDqDgNxKNWMGvvCwSZBQWsjSSSjKTKCCjRlLgfdxWGcjHHsXCxSXZhWVwzcbQBJlbSM",
      icon: emailIcon
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dilson-bharath-r/",
      icon: linkedinIcon
    },
    {
      name: "GitHub",
      href: "https://github.com/dilsonbharath",
      icon: githubIcon
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/dilsonbharath76/",
      icon: leetcodeIcon
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dilsonbharath/",
      icon: insta
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/dilson.bharath.7",
      icon: facebookIcon
    }
  ]
};
