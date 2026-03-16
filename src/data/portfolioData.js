import heroImage from "../assets/images/hero-work.jpg";
import profileImage from "../assets/images/profile.png";
import projectPortfolioImage from "../assets/images/project-portfolio.png";
import downArrowImage from "../assets/images/arrow-down.png";
import resumeFile from "../assets/documents/dilson-bharath-resume.pdf";
import portfolio from "../assets/images/port.png";
import habit from "../assets/images/web.png";

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

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const heroContent = {
  greeting: "Hello, I'm",
  name: "Dilson Bharath R",
  role: "Aspiring Software Developer",
  summary:
    "Final-year AI and Data Science student focused on building practical, user-friendly web products and data-driven solutions.",
  image: heroImage,
  arrowIcon: downArrowImage
};

export const aboutContent = {
  title: "About Me",
  image: profileImage,
  description:
    "I am a final-year Artificial Intelligence and Data Science student with a strong base in programming, data structures, and analytical problem-solving. I enjoy designing digital products that are simple to use, visually polished, and built with long-term maintainability in mind. My main interests are web development, machine learning, and data analysis.",
  resume: resumeFile
};

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built to showcase my profile, work, and contact presence with clean UX.",
    image: portfolio,
    link: "https://dilsonbharath.me",
    tags: ["HTML", "Bootstrap", "JavaScript"]
  },
  {
    title: "Daily Habit Tracker",
    description:
      "A focused productivity app concept that helps users track daily habits and stay consistent with goals.",
    image: habit,
    link: "https://your-habit.app",
    tags: ["Productivity", "Frontend", "Responsive UI"]
  },
  {
    title: "Portfolio Revamp",
    description:
      "Modern React-based rebuild of my portfolio with reusable components and improved visual hierarchy.",
    image: projectPortfolioImage,
    link: "https://dilsonbharath.github.io/New-Project/",
    tags: ["React", "Vite", "Component Design"]
  }
];

export const skills = [
  { name: "Python", icon: pythonIcon, level: "Core" },
  { name: "HTML5", icon: htmlIcon, level: "Core" },
  { name: "CSS3", icon: cssIcon, level: "Core" },
  { name: "JavaScript", icon: javascriptIcon, level: "Core" },
  { name: "Bootstrap", icon: bootstrapIcon, level: "Core" },
  { name: "Git", icon: gitIcon, level: "Workflow" },
  { name: "C++", icon: cppIcon, level: "DSA" },
  { name: "VS Code", icon: vscodeIcon, level: "Workflow" },
  { name: "SQL", icon: cppIcon, level: "Data" },
  { name: "DSA", icon: leetcodeIcon, level: "Problem Solving" },
  { name: "FastAPI", icon: pythonIcon, level: "Backend" },
  { name: "AI", icon: bootstrapIcon, level: "Learning Focus" },
  { name: "React", icon: htmlIcon, level: "Frontend" },
  { name: "Vite", icon: vscodeIcon, level: "Build Tool" }
];

export const contactContent = {
  title: "Let's Connect",
  subtitle: "Find me on these platforms, and let's connect!",
  socialLinks: [
    {
      name: "Email",
      href: "mailto:dilsonbharath76@gmail.com",
      icon: emailIcon
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
      name: "Facebook",
      href: "https://www.facebook.com/dilson.bharath.7",
      icon: facebookIcon
    }
  ]
};
