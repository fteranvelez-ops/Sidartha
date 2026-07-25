export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">Sidartha</p>
          <p className="footer__note">
            Sitio en construcción — estructura desplegada, identidad pendiente.
          </p>
        </div>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Sidartha</span>
        </div>
      </div>
    </footer>
  );
}
