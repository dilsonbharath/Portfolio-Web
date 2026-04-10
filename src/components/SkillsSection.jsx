import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

function SkillsSection({ items, onNavigate }) {
  const skills = items ?? [];
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = "";

    // Fine-tuned radius: balances density to eliminate huge gaps but prevents tight overlap
    const radius = window.innerWidth > 768 ? 230 : 150;

    const options = {
      radius: radius,
      maxSpeed: "slow",
      initSpeed: "slow",
      direction: 225,
      keep: true
    };

    const texts = skills.map((skill) => skill.name);
    TagCloud(containerRef.current, texts, options);

    // Inject custom HTML (icons and styles) into the library's generated elements
    const injectHTML = () => {
      if (!containerRef.current) return;
      const spans = containerRef.current.querySelectorAll(".tagcloud--item");
      if (spans.length > 0) {
        skills.forEach((skill, i) => {
          if (spans[i]) {
            spans[i].innerHTML = `
              <div class="skill-globe-node">
                <div class="skill-globe-content">
                  <img src="${skill.icon}" alt="${skill.name}" loading="lazy" />
                  <span>${skill.name}</span>
                </div>
              </div>
            `;
          }
        });
      } else {
        setTimeout(injectHTML, 50);
      }
    };
    
    injectHTML();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [skills]);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="reveal-up" style={{ "--delay": "0ms", display: "flex", justifyContent: "center" }}>
          <span className="section-label">
            <span className="section-label-line" aria-hidden="true" />
            3D Globe
            <span className="section-label-line" aria-hidden="true" />
          </span>
        </div>

        <h2 className="section-heading reveal-up" style={{ "--delay": "100ms", textAlign: "center" }}>
          Interactive Tech Sphere
        </h2>

        <p className="section-description reveal-up" style={{ "--delay": "200ms", textAlign: "center", margin: "0 auto 3rem auto" }}>
          Explore the technologies connected across my ecosystem. Interact with the globe to spin it!
        </p>

        <div className="skills-globe-scene reveal-scale" style={{ "--delay": "300ms" }}>
          <div className="globe-wrapper" ref={containerRef}></div>
        </div>

        <div className="skills-cta reveal-up" style={{ "--delay": "600ms", marginTop: "3rem" }}>
          <p>
            Looking for a motivated developer ready to learn, adapt, and deliver impactful solutions?
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNavigate("contact")}
          >
            Let's Talk
            <span className="btn-icon" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
