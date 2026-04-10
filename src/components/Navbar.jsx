import { useState, useEffect, useCallback } from "react";

function Navbar({ links, onNavigate, activeId, resume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = useCallback(
    (id) => (e) => {
      e.preventDefault();
      setMobileOpen(false);
      /* Small delay to allow menu close animation */
      setTimeout(() => onNavigate(id), mobileOpen ? 300 : 0);
    },
    [onNavigate, mobileOpen]
  );

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <button
            className="nav-logo"
            type="button"
            onClick={() => onNavigate("home")}
            aria-label="Go to home"
          >
            <span className="nav-logo-dot" aria-hidden="true" />
            dilson.dev
          </button>

          <div className="nav-links">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link${activeId === link.id ? " active" : ""}`}
                onClick={handleNav(link.id)}
                aria-current={activeId === link.id ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="nav-cta-btn"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>

          <button
            className={`nav-toggle${mobileOpen ? " open" : ""}`}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link${activeId === link.id ? " active" : ""}`}
            onClick={handleNav(link.id)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="nav-cta-btn"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}

export default Navbar;
