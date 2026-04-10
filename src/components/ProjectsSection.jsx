function ProjectsSection({ items }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <div className="projects-header-text">
            <div className="reveal-up" style={{ "--delay": "0ms" }}>
              <span className="section-label">
                <span className="section-label-line" aria-hidden="true" />
                Portfolio
              </span>
            </div>
            <h2 className="section-heading reveal-up" style={{ "--delay": "100ms" }}>
              Featured Projects
            </h2>
            <p className="section-description reveal-up" style={{ "--delay": "200ms" }}>
              Selected works that showcase my approach to building modern,
              user-centric digital products.
            </p>
          </div>
        </div>

        <div className="project-list">
          {items.map((project, index) => (
            <article
              className="project-card reveal-up"
              key={`${project.title}-${index}`}
              style={{ "--delay": `${300 + index * 150}ms` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-overlay" aria-hidden="true" />
              </div>

              <div className="project-info">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")} — PROJECT
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <span className="project-link-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
