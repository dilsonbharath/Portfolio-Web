function SkillsSection({ items }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h3 className="section-kicker">Technical Stack</h3>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Tools and technologies I regularly use to build polished frontend and practical backend
            solutions.
          </p>
        </div>

        <div className="skills-grid">
          {items.map((skill) => (
            <article className="skill-tile reveal" key={skill.name}>
              <div className="skill-tile-inner">
                <div className="skill-face skill-front">
                  <img src={skill.icon} alt={skill.name} />
                  <h4>{skill.name}</h4>
                </div>
                <div className="skill-face skill-back">
                  <p className="skill-back-label">Level</p>
                  <h4>{skill.level}</h4>
                  <p className="skill-back-name">{skill.name}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
