import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import {
  navLinks,
  heroContent,
  aboutContent,
  projects,
  skills,
  contactContent
} from "./data/portfolioData";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = useCallback((sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    setActiveSection(sectionId);
    const navHeight = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
        ? "auto"
        : "smooth"
    });
  }, []);

  /* ── Intersection Observer: active section tracking ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return;

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
        const [currentId] = [...visibleSections.entries()].sort(
          (a, b) => b[1] - a[1]
        )[0];
        setActiveSection(currentId);
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.5, 0.65, 0.8],
        rootMargin: "-72px 0px -40% 0px"
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Intersection Observer: scroll-reveal animations ── */
  useEffect(() => {
    const revealNodes = document.querySelectorAll(
      ".reveal-up, .reveal-scale, .reveal-left, .reveal-right"
    );
    if (!revealNodes.length) return;

    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reducedMotion) {
      revealNodes.forEach((n) => n.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealNodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Subtle film grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar
        links={navLinks}
        onNavigate={scrollToSection}
        activeId={activeSection}
        resume={aboutContent.resume}
      />

      <main>
        <HeroSection hero={heroContent} onNavigate={scrollToSection} />
        <AboutSection about={aboutContent} />
        <ProjectsSection items={projects} />
        <SkillsSection items={skills} onNavigate={scrollToSection} />
        <ContactSection contact={contactContent} />
      </main>

      <Footer />
    </>
  );
}

export default App;
