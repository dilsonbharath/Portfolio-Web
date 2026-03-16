function ContactSection({ contact }) {
  return (
    <footer id="contact" className="section contact-section">
      <div className="container-fluid px-0">
        <div className="contact-scroll-wrap">
          <a className="scroll-top-btn scroll-top-btn--bow" href="#home" aria-label="Scroll to Home">
            <span className="bow-arrow" aria-hidden="true">
              <span className="bow-arrow-tip" />
            </span>
          </a>
        </div>
        <div className="contact-card reveal">
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-subtitle">{contact.subtitle}</p>
          <div className="social-grid">
            {contact.socialLinks.map((item) => (
              <a
                className="social-chip"
                href={item.href}
                key={item.name}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <img src={item.icon} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;