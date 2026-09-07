import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/components/AdminNavbar.css"; // Asegúrate de crear este CSS

export default function AdminNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Función para cerrar el menú si se hace clic fuera de él
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
    navigate("/login");
  };

  return (
    <nav className="admin-navbar-container">
      
      {/* ── LOGO ── */}
      <div className="admin-navbar-brand">
        <Link to="/panelAdministrativo">
          <img 
            src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp" 
            alt="ExpoJuy Admin Logo" 
            className="admin-navbar-logo"
          />
        </Link>
      </div>

      {/* ── ENLACES CENTRALES ── */}
      <ul className="admin-navbar-links">
        <li>
          <Link to="/panelAdministrativo/entradas" className="admin-navbar-link">Entradas</Link>
        </li>
        <li>
          <Link to="/panelAdministrativo/noticias" className="admin-navbar-link">Noticias</Link>
        </li>
        <li>
          <Link to="/panelAdministrativo/expositores" className="admin-navbar-link">Expositor</Link>
        </li>
        <li>
          <Link to="/panelAdministrativo/extras" className="admin-navbar-link">Extras</Link>
        </li>
      </ul>

      {/* ── PERFIL Y MENÚ DESPLEGABLE ── */}
      <div className="admin-navbar-profile" ref={dropdownRef}>
        
        <button 
          className="admin-navbar-profile-btn" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
        >
          {/* Avatar ficticio usando Pravatar */}
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
                  <span className="admin-navbar-icon">⚙️</span> Ajustes
                </Link>
              </li>
              <li>
                <button 
                  className="admin-navbar-dropdown-item logout" 
                  onClick={handleLogout}
                >
                  <span className="admin-navbar-icon">🚪</span> Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}