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
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="portfolio-shell">
      <Navbar links={navLinks} onNavigate={scrollToSection} />
      <main>
        <HomeSection hero={heroContent} onNavigate={scrollToSection} />
        <AboutSection about={aboutContent} />
        <ProjectsSection items={projects} />
        <SkillsSection items={skills} />
        <ContactSection contact={contactContent} />
      </main>
    </div>
  );
}

export default App;
