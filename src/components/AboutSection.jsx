function AboutSection({ about }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-card reveal">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <h3 className="section-kicker">Profile</h3>
              <h2 className="section-title">{about.title}</h2>
              <p className="section-subtitle about-description">{about.description}</p>

              <div className="about-actions">
                <a className="btn btn-brand" href={about.resume} target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a className="btn btn-ghost" href={about.resume} download>
                  Download Resume
                </a>
              </div>
            </div>

            <div className="col-lg-4 order-1 order-lg-2">
              <div className="about-media">
                <div className="about-image-circle">
                  <img src={about.image} alt="Dilson Bharath" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
