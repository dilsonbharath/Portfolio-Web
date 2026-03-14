function HomeSection({ hero, onNavigate }) {
  return (
    <section id="home" className="section hero-section">
      <div className="container">
        <div className="hero-panel reveal">
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src={hero.image} alt="Dilson Bharath" />
            </div>
          </div>

          <div className="hero-copy">
            {hero.badge ? <p className="hero-badge">{hero.badge}</p> : null}
            <p className="hero-greeting">{hero.greeting}</p>
            <h1 className="hero-name">{hero.name}</h1>
            <h2 className="hero-role">{hero.role}</h2>
            <p className="hero-summary">{hero.summary}</p>

            <div className="hero-actions">
              <button type="button" className="btn btn-brand" onClick={() => onNavigate("contact")}>
                Let&apos;s Connect
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => onNavigate("projects")}>
                View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="hero-scroll-wrap">
          <button
            type="button"
            className="hero-scroll-btn"
            aria-label="Scroll to About section"
            onClick={() => onNavigate("about")}
          >
            <img src={hero.arrowIcon} alt="Scroll down" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
