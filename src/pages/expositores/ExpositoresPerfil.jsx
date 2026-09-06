
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // useParams por si luego quieres usar el ID
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/expositores/ExpositoresPerfil.css";


// ── Datos Ficticios del Expositor ─────────────────────────────────────────────
const EXPOSITOR_MOCK = {
  id: 1,
  name: "TechJuy Solutions",
  logo: "https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp", 
  category: "Tecnología",
  stand: "A-12",
  shortDesc: "Software de gestión integral para PyMEs y corporaciones del NOA.",
  heroImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=400&fit=crop&auto=format",
  longDesc: `TechJuy Solutions es una empresa jujeña líder en el desarrollo de software a medida, especializada en la transformación digital de pequeñas y medianas empresas. Nuestro enfoque se centra en optimizar procesos, reducir costos operativos y escalar ventas mediante la implementación de inteligencia artificial y ecosistemas en la nube.
  
  Durante la ExpoJuy 2026, estaremos presentando nuestra nueva suite "JuyCloud ERP", una herramienta diseñada específicamente para las normativas fiscales y operativas del Norte Argentino. Invitamos a todos los asistentes a nuestro stand para recibir una demostración en vivo y consultar por nuestros planes de financiamiento tecnológico.`,
  
  // Nuevo campo: Mensaje corto de contacto
  contactMessage: "¡Hola! Para consultas comerciales, reuniones o agendar una demo, escríbenos a ventas@techjuy.com.ar o envíanos un WhatsApp al +54 9 388 123-4567.",
  
  // Iframe dinámico actualizado con el Padlet
  iframeContent: '<iframe src="https://padlet.com/embed/az5hjozid91q696z" frameborder="0" allow="camera;microphone;geolocation;display-capture;clipboard-write" style="width:100%;height:608px;display:block;padding:0;margin:0"></iframe>'
};

export default function ExpositoresPerfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Volver arriba al entrar a la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="expositor-perfil-page">
      <Navbar />

      <main className="expositor-perfil-main">
        <div className="expositor-perfil-container">
          
          {/* Botón de volver */}
          <Link to="/expositores" className="expositor-perfil-back-btn">
            ← Volver al Directorio
          </Link>

          {/* ── CABECERA DEL PERFIL ── */}
          <header className="expositor-perfil-header">
            <div className="expositor-perfil-brand">
              <div className="expositor-perfil-logo-box">
                <img src={EXPOSITOR_MOCK.logo} alt={`Logo de ${EXPOSITOR_MOCK.name}`} />
              </div>
              <div className="expositor-perfil-title-area">
                <h1 className="expositor-perfil-name">{EXPOSITOR_MOCK.name}</h1>
                <p className="expositor-perfil-short-desc">{EXPOSITOR_MOCK.shortDesc}</p>
                <div className="expositor-perfil-badges">
                  <span className="expositor-perfil-badge-cat">{EXPOSITOR_MOCK.category}</span>
                  <span className="expositor-perfil-badge-stand">📍 Stand {EXPOSITOR_MOCK.stand}</span>
                </div>
              </div>
            </div>
            
            <div className="expositor-perfil-header-actions">
              <button 
                className="expositor-perfil-contact-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Contactar Expositor
              </button>
            </div>
          </header>

          {/* ── IMAGEN DE PORTADA (HERO) ── */}
          <div className="expositor-perfil-hero">
            <img src={EXPOSITOR_MOCK.heroImg} alt="Portada del Expositor" />
          </div>

          {/* ── CUERPO PRINCIPAL (Ahora 100% de ancho) ── */}
          <div className="expositor-perfil-content-full">
            
            {/* Descripción Formal */}
            <article className="expositor-perfil-description">
              <h2 className="expositor-perfil-section-title">Sobre la Empresa</h2>
              <div className="expositor-perfil-text">
                {EXPOSITOR_MOCK.longDesc.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </article>

            {/* Contenido Dinámico (Iframe debajo del texto) */}
            <section className="expositor-perfil-dynamic-section">
              <div className="expositor-perfil-iframe-card">
                <div className="expositor-perfil-iframe-header">
                  <span className="expositor-perfil-iframe-dot"></span>
                  <span className="expositor-perfil-iframe-title">Contenido Interactivo</span>
                </div>
                
                {/* Contenedor del Iframe con dangerouslySetInnerHTML */}
                <div 
                  className="expositor-perfil-iframe-wrapper"
                  dangerouslySetInnerHTML={{ __html: EXPOSITOR_MOCK.iframeContent }}
                />
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />

      {/* ── MODAL DE CONTACTO ── */}
      {isModalOpen && (
        <div className="expositor-perfil-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="expositor-perfil-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="expositor-perfil-modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
            
            <div className="expositor-perfil-modal-header">
              <h3 className="expositor-perfil-modal-title">Contacto</h3>
              <p className="expositor-perfil-modal-subtitle">{EXPOSITOR_MOCK.name}</p>
            </div>
            
            <div className="expositor-perfil-modal-body">
              <p className="expositor-perfil-modal-message">
                {EXPOSITOR_MOCK.contactMessage}
              </p>
            </div>
            
            <div className="expositor-perfil-modal-footer">
              <button className="expositor-perfil-modal-action-btn" onClick={() => setIsModalOpen(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}