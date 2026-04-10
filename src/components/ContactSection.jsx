function ContactSection({ contact }) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="reveal-up" style={{ "--delay": "0ms" }}>
            <span className="section-label">
              <span className="section-label-line" aria-hidden="true" />
              Contact
            </span>
          </div>

          <h2 className="contact-heading reveal-up" style={{ "--delay": "100ms" }}>
            Let's build something{" "}
            <span className="gradient-text">amazing together</span>
          </h2>

          <p className="contact-desc reveal-up" style={{ "--delay": "200ms" }}>
            {contact.subtitle}
          </p>

          <div className="contact-actions reveal-up" style={{ "--delay": "300ms" }}>
            <a
              className="btn btn-primary"
              href="mailto:dilsonbharath76@gmail.com"
            >
              Send Email
              <span className="btn-icon" aria-hidden="true">✉</span>
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/dilsonbharath"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <span className="btn-icon" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="social-grid">
            {contact.socialLinks.map((item, index) => (
              <a
                className="social-link reveal-up"
                href={item.href}
                key={item.name}
                style={{ "--delay": `${400 + index * 80}ms` }}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <img src={item.icon} alt="" aria-hidden="true" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
