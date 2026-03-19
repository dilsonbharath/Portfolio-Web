import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import {
  navLinks,
  heroContent,
  aboutContent,
  projects,
  skills,
  contactContent
} from "./data/portfolioData";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const getHeaderOffset = () => document.querySelector(".top-nav")?.getBoundingClientRect().height ?? 0;

  useEffect(() => {
    const updateScrollOffset = () => {
      const headerOffset = Math.round(getHeaderOffset());
      if (headerOffset > 0) {
        document.documentElement.style.setProperty("--scroll-offset", `${headerOffset}px`);
      }
    };

    updateScrollOffset();
    window.addEventListener("resize", updateScrollOffset);

    return () => window.removeEventListener("resize", updateScrollOffset);
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    setActiveSection(sectionId);

    const headerOffset = getHeaderOffset();
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const targets = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length) return undefined;

    const headerOffset = getHeaderOffset() || 96;
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (!visibleSections.size) return;
        const [currentId] = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
        setActiveSection(currentId);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: `-${headerOffset}px 0px -42% 0px`
      }
    );

    targets.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell">
      <Navbar links={navLinks} onNavigate={scrollToSection} activeId={activeSection} />
      <main>
        <HomeSection hero={heroContent} onNavigate={scrollToSection} />
        <AboutSection about={aboutContent} />
        <ProjectsSection items={projects} />
        <SkillsSection items={skills} onNavigate={scrollToSection} />
        <ContactSection contact={contactContent} />
      </main>
    </div>
  );
}

export default App;
