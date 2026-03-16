function ProjectsSection({ items }) {
  const carouselId = "projectsCarousel";

  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <div className="section-head reveal">
          <h3 className="section-kicker">Selected Work</h3>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A few projects where I focused on usability, clean implementation, and responsive
            design.
          </p>
        </div>

        <div
          id={carouselId}
          className="projects-carousel carousel slide reveal"
          data-bs-interval="false"
          data-bs-touch="true"
        >
          <div className="carousel-inner">
            {items.map((project, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={`${project.title}-${index}`}
              >
                <article className={`project-card project-tone-${(index % 3) + 1}`}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-body">
                    <p className="project-eyebrow">{`Featured Project ${String(index + 1).padStart(2, "0")}`}</p>
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-text">{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={`${project.title}-${tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                        Visit Project
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {items.length > 1 && (
            <>
              <button
                className="projects-carousel-control projects-carousel-prev"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
                aria-label="Previous project"
              >
                <span aria-hidden="true">&#8249;</span>
              </button>
              <button
                className="projects-carousel-control projects-carousel-next"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="next"
                aria-label="Next project"
              >
                <span aria-hidden="true">&#8250;</span>
              </button>
              <div className="carousel-indicators projects-carousel-indicators">
                {items.map((project, index) => (
                  <button
                    key={`${project.title}-indicator`}
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
