import { Link } from "react-router-dom";
import "../assets/css/components/Footer.css";

// ── Datos de Redes Sociales con Iconos SVG Open Source ──
const SOCIAL_LINKS = [
  { 
    name: "YouTube", 
    color: "#FF0000", 
    url: "https://www.youtube.com/@EXPOJUY",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ) 
  },
  { 
    name: "Instagram", 
    color: "#E1306C", 
    url: "https://www.instagram.com/expojuy?igsh=bW1ybGo2OXUyY2lv",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ) 
  },
  { 
    name: "Facebook", 
    color: "#1877F2", 
    url: "https://www.facebook.com/share/TQ1Lf37GyPGjK1SU/?mibextid=JRoKGi",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ) 
  },
  { 
    name: "TikTok", 
    color: "#00F2FE", 
    url: "https://www.tiktok.com/@expojuy?_t=8pxnedv4e9e&_r=1",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ) 
  }
];

// ── Rutas Enlazadas con React Router ──
const footerColumns = {
  Evento: [
    { label: "Sobre ExpoJuy", path: "/" },
    { label: "Agenda", path: "/agenda" },
    { label: "Mapa del Predio", path: "/mapa" },
    { label: "Comprar Entradas", path: "/entradas" } // Asumiendo ruta
  ],
  Participar: [
    { label: "Ser Expositor", path: "/contacto" },
    { label: "Patrocinadores", path: "/contacto" },
    { label: "Prensa", path: "/noticias" },
    { label: "Acreditaciones", path: "/contacto" }
  ],
  Info: [
    { label: "Contacto", path: "/contacto" },
    { label: "Preguntas Frecuentes", path: "/contacto" },
    { label: "Políticas", path: "/" }, // Placeholder
    { label: "Accesibilidad", path: "/" } // Placeholder
  ],
};

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Grilla principal del Footer */}
        <div className="footer-grid">
          
          {/* Columna 1: Branding y Redes */}
          <div className="footer-brand-section">
            
            {/* Contenedor Flex para alinear los dos logos juntos */}
            <div className="footer-logos-wrapper">
              <img
                src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp"
                alt="ExpoJuy 2026 Logo"
                className="footer-logo-img"
              />
              <img
                src="https://i.postimg.cc/k5gWz0pc/logo-camcomext.webp"
                alt="Cámara de Comercio Exterior Logo"
                className="footer-logo-img secondary-logo"
              />
            </div>
            
            <p className="footer-desc">
              Organizado por la Cámara de Comercio de Jujuy. El polo productivo
              del Norte Argentino desde 2012.
            </p>
            
            {/* Redes Sociales con SVG */}
            <div className="footer-socials">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  title={social.name}
                  style={{ '--hover-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de Links Dinámicas (Ahora usan <Link>) */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="footer-column">
              <h4 className="footer-col-title">{title}</h4>
              <ul className="footer-list">
                {links.map((link, index) => (
                  <li key={index} className="footer-list-item">
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sección Inferior: Copyright y Estado */}
        <div className="footer-bottom-bar">
          <span className="footer-copy">
            © 2026 ExpoJuy — Desarrollado por ATLAS. Todos los derechos reservados.
          </span>
        
        </div>
        
      </div>
    </footer>
  );
}