import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/components/AdminNavbar.css"; // Asegúrate de crear este CSS



export default function AdminNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para menú móvil
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Función para cerrar el menú de perfil si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Función para simular el cierre de sesión
  const handleLogout = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="admin-navbar-container">
      
      {/* ── LOGO Y BOTÓN HAMBURGUESA (MÓVIL) ── */}
      <div className="admin-navbar-brand-group">
        {/* Botón Hamburguesa visible solo en móvil */}
        <button 
          className="admin-navbar-burger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <Link to="/panelAdministrativo" className="admin-navbar-brand">
          <img 
            src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp" 
            alt="ExpoJuy Admin Logo" 
            className="admin-navbar-logo"
          />
        </Link>
      </div>

      {/* ── ENLACES CENTRALES (DESKTOP) ── */}
      <ul className="admin-navbar-links">
        <li><Link to="/panelAdministrativo/entradas" className="admin-navbar-link">Entradas</Link></li>
        <li><Link to="/panelAdministrativo/noticias" className="admin-navbar-link">Noticias</Link></li>
        <li><Link to="/panelAdministrativo/expositores" className="admin-navbar-link">Expositor</Link></li>
        <li><Link to="/panelAdministrativo/extras" className="admin-navbar-link">Extras</Link></li>
      </ul>

      {/* ── PERFIL Y MENÚ DESPLEGABLE ── */}
      <div className="admin-navbar-profile" ref={dropdownRef}>
        
        <button 
          className="admin-navbar-profile-btn" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
        >
          <img 
            src="https://i.pravatar.cc/150?u=admin-expojuy" 
            alt="Avatar del Administrador" 
            className="admin-navbar-avatar"
          />
          <span className="admin-navbar-username">Admin</span>
          
          <svg className={`admin-navbar-chevron ${isDropdownOpen ? 'open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown / Acordeón de Ajustes */}
        {isDropdownOpen && (
          <div className="admin-navbar-dropdown">
            <div className="admin-navbar-dropdown-header">
              <p className="admin-navbar-dropdown-name">Administrador</p>
              <p className="admin-navbar-dropdown-email">admin@expojuy.com.ar</p>
            </div>
            
            <ul className="admin-navbar-dropdown-menu">
              <li>
                <Link 
                  to="/panelAdministrativo/ajustes" 
                  className="admin-navbar-dropdown-item" 
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {/* Icono SVG Ajustes */}
                  <svg className="admin-navbar-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Ajustes
                </Link>
              </li>
              <li>
                <button 
                  className="admin-navbar-dropdown-item logout" 
                  onClick={handleLogout}
                >
                  {/* Icono SVG Salir */}
                  <svg className="admin-navbar-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ── MENÚ MÓVIL DESPLEGABLE ── */}
      <div className={`admin-navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="admin-navbar-mobile-links">
          <li><Link to="/panelAdministrativo/entradas" className="admin-navbar-mobile-link" onClick={closeMobileMenu}>Entradas</Link></li>
          <li><Link to="/panelAdministrativo/noticias" className="admin-navbar-mobile-link" onClick={closeMobileMenu}>Noticias</Link></li>
          <li><Link to="/panelAdministrativo/expositores" className="admin-navbar-mobile-link" onClick={closeMobileMenu}>Expositor</Link></li>
          <li><Link to="/panelAdministrativo/extras" className="admin-navbar-mobile-link" onClick={closeMobileMenu}>Extras</Link></li>
        </ul>
      </div>

    </nav>
  );
}