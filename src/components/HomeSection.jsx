function HomeSection({ hero, onNavigate }) {
  return (
    <section id="home" className="section hero-section hero-immersive">
      <div className="hero-video-bg" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src={hero.backgroundVideo} type="video/webm" />
        </video>
        <div className="hero-video-overlay" />
      </div>
      <div className="container">
        <div className="hero-panel">
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
      </div>
    </section>
  );
}

export default HomeSection;
