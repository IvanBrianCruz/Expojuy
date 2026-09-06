import "../assets/css/components/Footer.css";

export default function Footer() {
  const footerColumns = {
    Evento: ["Sobre ExpoJuy", "Agenda", "Mapa del Predio", "Comprar Entradas"],
    Participar: ["Ser Expositor", "Patrocinadores", "Prensa", "Acreditaciones"],
    Info: ["Contacto", "Preguntas Frecuentes", "Políticas", "Accesibilidad"],
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Grilla principal del Footer */}
        <div className="footer-grid">
          
          {/* Columna 1: Branding y Redes */}
          <div className="footer-brand-section">
            <img
              src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp"
              alt="ExpoJuy 2026 Logo"
              className="footer-logo-img"
            />
            <p className="footer-desc">
              Organizado por la Cámara de Comercio de Jujuy. El polo productivo
              del Norte Argentino desde 2012.
            </p>
            <div className="footer-socials">
              <span className="footer-social-icon">Fb</span>
              <span className="footer-social-icon">In</span>
              <span className="footer-social-icon">Ig</span>
              <span className="footer-social-icon">Yt</span>
            </div>
          </div>

          {/* Columnas de Links Dinámicas */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="footer-column">
              <h4 className="footer-col-title">{title}</h4>
              <ul className="footer-list">
                {links.map((link, index) => (
                  <li key={index} className="footer-list-item">
                    <a href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sección Inferior: Copyright y Estado */}
        <div className="footer-bottom-bar">
          <span className="footer-copy">
            © 2026 ExpoJuy — Cámara de Comercio de Jujuy. Todos los derechos reservados.
          </span>
         
        </div>
      </div>
    </footer>
  );
}