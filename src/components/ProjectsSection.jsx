function ProjectsSection({ items }) {
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

        <div className="row g-4">
          {items.map((project, index) => (
            <div className="col-12 col-md-6 col-xl-4" key={`${project.title}-${index}`}>
              <article className={`project-card reveal project-tone-${(index % 3) + 1}`}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
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
      </div>
    </section>
  );
}

export default ProjectsSection;
