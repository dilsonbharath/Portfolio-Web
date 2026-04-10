import { useEffect, useMemo, useState } from "react";

function HomeSection({ hero, onNavigate }) {
  const rolePhrases = useMemo(
    () => (Array.isArray(hero.roles) && hero.roles.length ? hero.roles : [hero.role]),
    [hero.role, hero.roles]
  );
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = rolePhrases[phraseIndex] ?? "";
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reducedMotion) {
      setRoleText(currentPhrase);
      return undefined;
    }

    const baseSpeed = isDeleting ? 45 : 85;
    let timeoutId;

    if (!isDeleting && roleText === currentPhrase) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1300);
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
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          {hero.badge ? (
            <span className="hero-kicker hero-kicker-animated reveal-text" data-reveal data-reveal-delay="20">
              {hero.badge}
            </span>
          ) : null}
          <p className="hero-greeting hero-greeting-animated reveal-text" data-reveal data-reveal-delay="80">
            {hero.greeting}
          </p>
          <h1 className="hero-name hero-name-animated reveal-text" data-reveal data-reveal-delay="150">
            {hero.name}
          </h1>
          <p className="hero-role hero-role-animated reveal-text" data-reveal data-reveal-delay="230">
            <span className="hero-role-text">{roleText}</span>
            <span className="type-caret" aria-hidden="true" />
          </p>
          <p className="hero-summary hero-summary-animated reveal-text" data-reveal data-reveal-delay="300">
            {hero.summary}
          </p>

          <div className="hero-actions reveal-item" data-reveal data-reveal-delay="380">
            <button type="button" className="btn btn-brand" onClick={() => onNavigate("projects")}>
              View Portfolio
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => onNavigate("contact")}>
              The Methodology
            </button>
          </div>
        </div>

        <div className="hero-media reveal-item" data-reveal data-reveal-delay="460">
          <div className="hero-image">
            <img src={hero.image} alt="Dilson Bharath" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-frame" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
