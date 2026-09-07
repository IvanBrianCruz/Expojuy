import { useState, useEffect } from "react";

import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../assets/css/panelAdmin/PanelAdministrativo.css";


// ── Datos Ficticios del Usuario ───────────────────────────────────────────────
const USER_MOCK = {
  name: "Cruz Ivan Brian",
  role: "Administrador / Programador",
  institution: "ATLAS startap - ExpoJuy 2026",
  email: "admin@expojuy.com.ar",
  phone: "+54 9 388 123-4567",
  ubicacion: "Stand A12",
  avatar: "https://i.pravatar.cc/150?u=admin-expojuy"
};

export default function PanelAdministrativo() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Formateo de fecha y hora
  const formattedTime = currentTime.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  // Saludo dinámico según la hora
  const hour = currentTime.getHours();
  let greeting = "Buenas noches";
  if (hour >= 6 && hour < 12) greeting = "Buenos días";
  else if (hour >= 12 && hour < 20) greeting = "Buenas tardes";

  return (
    <div className="panel-admin-page">
      <AdminNavbar />

      <main className="panel-admin-main">
        <div className="panel-admin-container">
          
          {/* ── CABECERA DE BIENVENIDA Y RELOJ ── */}
          <header className="panel-admin-header">
            <div className="panel-admin-welcome">
              <h1 className="panel-admin-title">{greeting}, <span className="panel-admin-text-cyan">{USER_MOCK.name.split(' ')[0]}</span></h1>
              <p className="panel-admin-subtitle">Resumen de tu cuenta y estado del sistema ExpoJuy 2026.</p>
            </div>
            
            <div className="panel-admin-clock-widget">
              <div className="panel-admin-time">{formattedTime}</div>
              <div className="panel-admin-date">{formattedDate}</div>
            </div>
          </header>

          {/* ── TARJETAS DE MÉTRICAS RÁPIDAS ── 
          <section className="panel-admin-metrics-grid">
            <div className="panel-admin-metric-card">
              <div className="panel-admin-metric-icon" style={{color: '#00C8C8', background: 'rgba(0,200,200,0.1)'}}>🎟️</div>
              <div className="panel-admin-metric-info">
                <span className="panel-admin-metric-label">Entradas Vendidas</span>
                <h3 className="panel-admin-metric-value">12,450</h3>
              </div>
            </div>
            <div className="panel-admin-metric-card">
              <div className="panel-admin-metric-icon" style={{color: '#A78BFA', background: 'rgba(167,139,250,0.1)'}}>🏢</div>
              <div className="panel-admin-metric-info">
                <span className="panel-admin-metric-label">Expositores Activos</span>
                <h3 className="panel-admin-metric-value">342</h3>
              </div>
            </div>
            <div className="panel-admin-metric-card">
              <div className="panel-admin-metric-icon" style={{color: '#F472B6', background: 'rgba(236,114,182,0.1)'}}>📰</div>
              <div className="panel-admin-metric-info">
                <span className="panel-admin-metric-label">Noticias Publicadas</span>
                <h3 className="panel-admin-metric-value">28</h3>
              </div>
            </div>
          </section>*/}

          {/* ── LAYOUT PRINCIPAL (Perfil y Soporte) ── */}
          <div className="panel-admin-content-layout">
            
            {/* Columna Izquierda: Datos del Usuario */}
            <section className="panel-admin-profile-section">
              <h2 className="panel-admin-section-title">Información de Cuenta</h2>
              <div className="panel-admin-profile-card">
                
                <div className="panel-admin-profile-header">
                  <img src={USER_MOCK.avatar} alt="Avatar" className="panel-admin-profile-avatar" />
                  <div className="panel-admin-profile-names">
                    <h3>{USER_MOCK.name}</h3>
                    <span className="panel-admin-badge-role">{USER_MOCK.role}</span>
                  </div>
                </div>

                <div className="panel-admin-profile-details">
                  <div className="panel-admin-detail-row">
                    <span className="panel-admin-detail-label">Institución que representa:</span>
                    <span className="panel-admin-detail-value">{USER_MOCK.institution}</span>
                  </div>
                  <div className="panel-admin-detail-row">
                    <span className="panel-admin-detail-label">Email:</span>
                    <span className="panel-admin-detail-value">{USER_MOCK.email}</span>
                  </div>
                  <div className="panel-admin-detail-row">
                    <span className="panel-admin-detail-label">Teléfono:</span>
                    <span className="panel-admin-detail-value">{USER_MOCK.phone}</span>
                  </div>
                  <div className="panel-admin-detail-row">
                    <span className="panel-admin-detail-label">Ubicación:</span>
                    <span className="panel-admin-detail-value">{USER_MOCK.ubicacion}</span>
                  </div>
                </div>

                <div className="panel-admin-profile-actions">
                  <button className="panel-admin-btn-outline">Editar Perfil</button>
                  <button className="panel-admin-btn-outline">Cambiar Contraseña</button>
                </div>
              </div>
            </section>

            {/* Columna Derecha: Soporte y Estado del Sistema */}
            <section className="panel-admin-support-section">
              <h2 className="panel-admin-section-title">Soporte Técnico</h2>
              
              <div className="panel-admin-support-card">
                <div className="panel-admin-support-icon">👨‍💻</div>
                <h3>¿Necesitas ayuda con el panel?</h3>
                <p>Nuestro equipo de desarrollo y soporte está disponible 24/7 para resolver incidencias técnicas del evento.</p>
                
                <div className="panel-admin-contact-methods">
                  <a href="mailto:soporte@expojuy.com.ar" className="panel-admin-contact-item">
                    <span className="icon">✉️</span>
                    <div>
                      <strong>Email Soporte</strong>
                      <span>soporte@expojuy.com.ar</span>
                    </div>
                  </a>
                  <a href="tel:+5493880000000" className="panel-admin-contact-item">
                    <span className="icon">📞</span>
                    <div>
                      <strong>Línea Directa</strong>
                      <span>+54 9 388 000-0000</span>
                    </div>
                  </a>
                </div>
                
                 {/*<button className="panel-admin-btn-primary w-full">Abrir Ticket de Soporte</button>*/}
              </div>

              {/* Pequeño widget de estado */}
              <div className="panel-admin-status-widget">
                <div className="panel-admin-status-dot active"></div>
                <div className="panel-admin-status-text">
                  <strong>Servidores ExpoJuy</strong>
                  <span>Todos los sistemas operando al 100%</span>
                </div>
              </div>

            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}