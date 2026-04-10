import { useEffect, useMemo, useState } from "react";

function HeroSection({ hero, onNavigate }) {
  /* ── Typewriter effect ── */
  const rolePhrases = useMemo(
    () =>
      Array.isArray(hero.roles) && hero.roles.length
        ? hero.roles
        : [hero.role],
    [hero.role, hero.roles]
  );

  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = rolePhrases[phraseIndex] ?? "";
    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reducedMotion) {
      setRoleText(currentPhrase);
      return;
    }

    const baseSpeed = isDeleting ? 40 : 75;
    let timeoutId;

    if (!isDeleting && roleText === currentPhrase) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && roleText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % rolePhrases.length);
    } else {
      timeoutId = window.setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.slice(0, Math.max(0, roleText.length - 1))
          : currentPhrase.slice(0, roleText.length + 1);
        setRoleText(nextText);
      }, baseSpeed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, phraseIndex, rolePhrases, roleText]);

  return (
    <section id="home" className="section hero">
      {/* Background effects */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-content">
        {/* Text column */}
        <div className="hero-text">
          <div className="hero-badge reveal-up" style={{ "--delay": "100ms" }}>
            <span className="hero-badge-dot" aria-hidden="true" />
            {hero.badge}
          </div>

          <p className="hero-greeting reveal-up" style={{ "--delay": "200ms" }}>
            {hero.greeting}
          </p>

          <h1 className="hero-name reveal-up" style={{ "--delay": "300ms" }}>
            {hero.name}
          </h1>

          <p className="hero-role reveal-up" style={{ "--delay": "400ms" }}>
            <span className="hero-role-text">{roleText}</span>
            <span className="type-caret" aria-hidden="true" />
          </p>

          <p className="hero-summary reveal-up" style={{ "--delay": "500ms" }}>
            {hero.summary}
          </p>

          <div className="hero-actions reveal-up" style={{ "--delay": "600ms" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate("projects")}
            >
              View Projects
              <span className="btn-icon" aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate("contact")}
            >
              Get in Touch
            </button>
          </div>

          <div className="hero-status reveal-up" style={{ "--delay": "700ms" }}>
            <span className="hero-status-dot" aria-hidden="true" />
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Visual column */}
        <div className="hero-visual reveal-scale" style={{ "--delay": "500ms" }}>
          <div className="hero-image-container">
            <div className="hero-image-frame">
              <img src={hero.image} alt="Dilson Bharath" loading="eager" />
              <div className="hero-image-gradient" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
