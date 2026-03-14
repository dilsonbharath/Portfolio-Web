import { useRef } from "react";
import Offcanvas from "bootstrap/js/dist/offcanvas";

function Navbar({ links, onNavigate }) {
  const offcanvasRef = useRef(null);

  const navigateAndClose = (sectionId) => (event) => {
    event.preventDefault();

    if (!offcanvasRef.current || window.innerWidth >= 992) {
      onNavigate(sectionId);
      return;
    }

    const offcanvasInstance = Offcanvas.getOrCreateInstance(offcanvasRef.current);
    offcanvasRef.current.addEventListener(
      "hidden.bs.offcanvas",
      () => onNavigate(sectionId),
      { once: true }
    );
    offcanvasInstance.hide();
  };

  return (
    <header className="top-nav sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button className="navbar-brand brand-button" type="button" onClick={() => onNavigate("home")}>
            Dilson Bharath
          </button>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolioOffcanvas"
            aria-controls="portfolioOffcanvas"
            aria-label="Open menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="offcanvas offcanvas-end offcanvas-nav"
            tabIndex="-1"
            id="portfolioOffcanvas"
            aria-labelledby="portfolioOffcanvasLabel"
            ref={offcanvasRef}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="portfolioOffcanvasLabel">
                Navigation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto nav-list">
                {links.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a className="nav-link" href={`#${link.id}`} onClick={navigateAndClose(link.id)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
