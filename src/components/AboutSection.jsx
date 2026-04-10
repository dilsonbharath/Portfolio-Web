function AboutSection({ about }) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="reveal-up" style={{ "--delay": "0ms" }}>
          <span className="section-label">
            <span className="section-label-line" aria-hidden="true" />
            About
          </span>
        </div>

        <h2 className="section-heading reveal-up" style={{ "--delay": "100ms" }}>
          {about.title}
        </h2>

        <p className="section-description reveal-up" style={{ "--delay": "200ms" }}>
          {about.description}
        </p>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card reveal-up" style={{ "--delay": "300ms" }}>
            <p className="stat-value">{about.experienceYears}</p>
            <p className="stat-label">Years Learning</p>
          </div>
          <div className="stat-card reveal-up" style={{ "--delay": "400ms" }}>
            <p className="stat-value">10+</p>
            <p className="stat-label">Projects Built</p>
          </div>
          <div className="stat-card reveal-up" style={{ "--delay": "500ms" }}>
            <p className="stat-value">14+</p>
            <p className="stat-label">Technologies</p>
          </div>
        </div>

        {/* About cards */}
        <div className="about-grid">
          <div className="about-card reveal-left" style={{ "--delay": "300ms" }}>
            <div className="about-card-icon" aria-hidden="true">🧠</div>
            <h3>Technical Philosophy</h3>
            <p>{about.philosophy}</p>
          </div>
          <div className="about-card reveal-right" style={{ "--delay": "400ms" }}>
            <div className="about-card-icon" aria-hidden="true">🤝</div>
            <h3>Collaborative Mindset</h3>
            <p>{about.leadership}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
