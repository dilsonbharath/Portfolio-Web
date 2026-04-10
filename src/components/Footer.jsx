function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-text">
          © {year} Dilson Bharath — Crafted with precision
        </span>
        <span className="footer-credit">
          Built with React &amp; Vite
        </span>
      </div>
    </footer>
  );
}

export default Footer;
