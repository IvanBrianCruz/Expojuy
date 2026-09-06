import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/inicio/Contacto.css";

const SOCIAL_LINKS = [
  { name: "YouTube", icon: "▶", url: "https://www.youtube.com/@EXPOJUY", color: "#FF0000" },
  { name: "Instagram", icon: "📸", url: "https://www.instagram.com/expojuy?igsh=bW1ybGo2OXUyY2lv", color: "#E1306C" },
  { name: "Facebook", icon: "f", url: "https://www.facebook.com/share/TQ1Lf37GyPGjK1SU/?mibextid=JRoKGi", color: "#1877F2" },
  { name: "TikTok", icon: "🎵", url: "https://www.tiktok.com/@expojuy?_t=8pxnedv4e9e&_r=1", color: "#00F2FE" }
];

const FAQ_DATA = [
  { q: "¿Cuándo y dónde se realiza ExpoJuy 2026?", a: "Del 9 al 12 de octubre de 2026 en el predio de Ciudad Cultural, San Salvador de Jujuy, Argentina." },
  { q: "¿Cómo puedo adquirir mis entradas?", a: "Las entradas se pueden adquirir en esta plataforma o en los puntos de venta físicos habilitados. Hay pases de 1 día y pases vip para los 4 días." },
  { q: "¿Cómo me registro como expositor?", a: "Completá el formulario de contacto indicando tu rubro o escribinos a expositores@expojuy.com.ar. El equipo comercial se comunicará a la brevedad." },
  { q: "¿ExpoJuy 2026 tiene actividades gratuitas?", a: "El acceso al predio general y patio de comidas tiene un costo mínimo. Sin embargo, ciertas conferencias magistrales requieren acreditación previa gratuita." },
  { q: "¿Hay estacionamiento disponible?", a: "Sí, el predio cuenta con más de 2.500 lugares de estacionamiento público. Además, habrá líneas especiales de transporte urbano." },
];

export default function Contacto() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  // Volver arriba al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    // Simulamos que después de 5 segundos el mensaje desaparece
    setTimeout(() => {
      setIsSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <div className="contacto-page">
      <Navbar />

      <main className="contacto-main-content">
        <div className="contacto-container">
          
          {/* ── CABECERA ── */}
          <header className="contacto-header">
            <span className="contacto-subtitle">Atención al Cliente</span>
            <h1 className="contacto-title">Estamos para <span className="contacto-text-cyan">Ayudarte</span></h1>
            <p className="contacto-desc">
              Conéctate con nosotros a través de nuestros canales oficiales o envíanos un mensaje directo para resolver cualquier inquietud.
            </p>
          </header>

          {/* ── REDES SOCIALES ── */}
          <section className="contacto-socials-section">
            <div className="contacto-socials-grid">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contacto-social-card"
                >
                  <div className="contacto-social-icon" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <span className="contacto-social-name">{social.name}</span>
                  <span className="contacto-social-arrow">↗</span>
                </a>
              ))}
            </div>
          </section>

          {/* ── TARJETA DE AYUDA RÁPIDA ── */}
          <div className="contacto-help-card">
            <div className="contacto-help-icon">💡</div>
            <div className="contacto-help-text">
              <h3>¿No encontrás tu respuesta?</h3>
              <p>
                Escribinos a <a href="mailto:info@expojuy.com.ar" className="contacto-link">info@expojuy.com.ar</a> o llamanos al <strong>(0388) 422-0000</strong> de lunes a viernes de 9 a 18 hs.
              </p>
            </div>
          </div>

          {/* ── FORMULARIO Y FAQ (Dos columnas en PC) ── */}
          <div className="contacto-content-layout">
            
            {/* Columna Izquierda: Formulario */}
            <section className="contacto-form-section">
              <div className="contacto-card-wrapper">
                <h2 className="contacto-section-title">Envíanos un mensaje</h2>
                <p className="contacto-section-desc">Para consultas sobre expositores, stands y acreditaciones.</p>
                
                {isSent ? (
                  <div className="contacto-success-msg">
                    <div className="contacto-success-icon">✅</div>
                    <h4>¡Mensaje enviado con éxito!</h4>
                    <p>Nuestro equipo te contactará en las próximas 48 horas hábiles.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contacto-form">
                    <div className="contacto-input-group">
                      <label htmlFor="name">Nombre completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Ingresa tu nombre" 
                        required 
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="contacto-input-group">
                      <label htmlFor="email">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="tu@correo.com" 
                        required 
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="contacto-input-group">
                      <label htmlFor="message">Mensaje</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        placeholder="¿En qué podemos ayudarte?" 
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button type="submit" className="contacto-submit-btn">
                      Enviar Mensaje
                    </button>
                  </form>
                )}
              </div>
            </section>

            {/* Columna Derecha: FAQ */}
            <section className="contacto-faq-section">
              <h2 className="contacto-section-title">Preguntas Frecuentes</h2>
              <div className="contacto-faq-list">
                {FAQ_DATA.map((item, i) => (
                  <div key={i} className={`contacto-faq-item ${openFAQ === i ? "contacto-faq-open" : ""}`}>
                    <button 
                      className="contacto-faq-question" 
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    >
                      <span>{item.q}</span>
                      <svg className="contacto-faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {/* Al estar abierto, se muestra la respuesta */}
                    <div className="contacto-faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}