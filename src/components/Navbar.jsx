import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components/Navbar.css";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto para detectar el scroll y aplicar el fondo con blur (glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Expositores", href: "/expositores" },
    { label: "Agenda", href: "/agenda" },
    { label: "Noticias", href: "/noticias" },
    { label: "Galeria de Fotos", href: "/galeria" },
    { label: "Mapa", href: "/mapa" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp"
            alt="ExpoJuy 2026 Logo"
            className="navbar-logo-img"
          />
        </Link>

        {/* Enlaces Desktop */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="navbar-link-item">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botones de Acción Desktop */}
        <div className="navbar-actions-desktop">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="navbar-btn-login">Ingresar</button>
          </Link>
          <Link to="/entradas" style={{ textDecoration: 'none' }}>
            <button className="navbar-btn-buy">Comprar Entradas</button>
          </Link>
        </div>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button
          className="navbar-burger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="navbar-burger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable (Mobile) */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? "navbar-mobile-open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="navbar-mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        
        {/* ── BOTONES FALTANTES AGREGADOS AQUÍ ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          <Link to="/login" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            <button className="navbar-btn-login navbar-mobile-btn" style={{ width: '100%' }}>
              Ingresar
            </button>
          </Link>
          <Link to="/entradas" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            <button className="navbar-btn-buy navbar-mobile-btn" style={{ width: '100%' }}>
              Comprar Entradas
            </button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}