import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/inicio/Agenda.css";

// ── Hook para Animaciones de Entrada (Fade In Up) ────────────────────────────
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return [domRef, isVisible];
}

// ── Componente Animado para cada Tarjeta de Evento ──
function AgendaEventCard({ ev, index }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Añadimos un pequeño retraso (delay) en cascada basado en el índice
  const animationDelay = `${index * 0.1}s`;

  return (
    <div 
      className={`agenda-event-item agenda-fade-up ${isVisible ? 'agenda-visible' : ''}`} 
      ref={ref}
      style={{ transitionDelay: animationDelay }}
    >
      {/* Tiempo */}
      <div className="agenda-event-time">
        <span className="agenda-time-text">{ev.time}</span>
      </div>

      {/* Nodo/Punto en la línea de tiempo */}
      <div className="agenda-event-node">
        <div className="agenda-event-dot"></div>
      </div>

      {/* Tarjeta del evento */}
      <div className="agenda-event-card">
        <div className="agenda-event-header">
          <h3 className="agenda-event-title">{ev.title}</h3>
          <span 
            className="agenda-event-category" 
            style={{ 
              backgroundColor: ev.catColorBg, 
              color: ev.catColorText, 
              borderColor: ev.catColorBorder 
            }}
          >
            {ev.cat}
          </span>
        </div>
        
        <div className="agenda-event-details">
          <div className="agenda-detail-item">
            <span className="agenda-detail-icon">🎤</span>
            <span className="agenda-detail-text">{ev.speaker}</span>
          </div>
          <div className="agenda-detail-item">
            <span className="agenda-detail-icon">📍</span>
            <span className="agenda-detail-text">{ev.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── Datos de la Agenda ────────────────────────────────────────────────────────
const CAT_STYLES = {
  Institucional: { bg: "rgba(139,31,212,0.1)", text: "#C084FC", border: "rgba(139,31,212,0.3)" },
  Conferencia: { bg: "rgba(0,200,200,0.1)", text: "#00C8C8", border: "rgba(0,200,200,0.3)" },
  Networking: { bg: "rgba(167,139,250,0.1)", text: "#A78BFA", border: "rgba(167,139,250,0.3)" },
  Taller: { bg: "rgba(99,102,241,0.1)", text: "#818CF8", border: "rgba(99,102,241,0.3)" },
  Social: { bg: "rgba(236,72,153,0.1)", text: "#F472B6", border: "rgba(236,72,153,0.3)" },
  Panel: { bg: "rgba(20,184,166,0.1)", text: "#2DD4BF", border: "rgba(20,184,166,0.3)" },
  Concurso: { bg: "rgba(245,158,11,0.1)", text: "#FBBF24", border: "rgba(245,158,11,0.3)" },
};

const AGENDA_DATA = [
  {
    label: "Día 1", date: "9 Oct 2026",
    events: [
      { time: "09:00", title: "Ceremonia de Apertura", cat: "Institucional", speaker: "Gobernador de Jujuy", location: "Salón Principal", ...CAT_STYLES["Institucional"] },
      { time: "10:30", title: "Panel: Economía del Conocimiento en el NOA", cat: "Conferencia", speaker: "Ministerio de Ciencia y Tecnología", location: "Auditorio A", ...CAT_STYLES["Conferencia"] },
      { time: "12:00", title: "Ronda de Negocios — Sector Minero", cat: "Networking", speaker: "Cámara Minera de Jujuy", location: "Sala B-4", ...CAT_STYLES["Networking"] },
      { time: "15:00", title: "Workshop: Transformación Digital PyME", cat: "Taller", speaker: "TechJuy Solutions", location: "Sala Workshop", ...CAT_STYLES["Taller"] },
      { time: "17:30", title: "Cóctel de Bienvenida a Expositores", cat: "Social", speaker: "Organización ExpoJuy", location: "Terraza Principal", ...CAT_STYLES["Social"] },
    ],
  },
  {
    label: "Día 2", date: "10 Oct 2026",
    events: [
      { time: "09:30", title: "Conferencia: Litio y la Transición Energética", cat: "Conferencia", speaker: "Dr. Marcos Villafuerte", location: "Auditorio A", ...CAT_STYLES["Conferencia"] },
      { time: "11:00", title: "Mesa Redonda: Agroindustria Exportadora", cat: "Panel", speaker: "AgroJuy + SENASA", location: "Auditorio B", ...CAT_STYLES["Panel"] },
      { time: "13:00", title: "Ronda de Negocios — Tecnología", cat: "Networking", speaker: "DataCloud + TechJuy", location: "Sala B-4", ...CAT_STYLES["Networking"] },
      { time: "15:30", title: "Taller: Financiamiento PYME — FONAPYME", cat: "Taller", speaker: "Banco Nación", location: "Sala Workshop", ...CAT_STYLES["Taller"] },
    ],
  },
   {
    label: "Día 3", date: "11 Oct 2026",
    events: [
      { time: "09:30", title: "Conferencia: Litio y la Transición Energética", cat: "Conferencia", speaker: "Dr. Marcos Villafuerte", location: "Auditorio A", ...CAT_STYLES["Conferencia"] },
      { time: "11:00", title: "Mesa Redonda: Agroindustria Exportadora", cat: "Panel", speaker: "AgroJuy + SENASA", location: "Auditorio B", ...CAT_STYLES["Panel"] },
      { time: "13:00", title: "Ronda de Negocios — Tecnología", cat: "Networking", speaker: "DataCloud + TechJuy", location: "Sala B-4", ...CAT_STYLES["Networking"] },
      { time: "15:30", title: "Taller: Financiamiento PYME — FONAPYME", cat: "Taller", speaker: "Banco Nación", location: "Sala Workshop", ...CAT_STYLES["Taller"] },
    ],
  },
  {
    label: "Día 4", date: "12 Oct 2026",
    events: [
      { time: "10:00", title: "Foro de Jóvenes Emprendedores NOA", cat: "Panel", speaker: "Fundación NOA Digital", location: "Auditorio B", ...CAT_STYLES["Panel"] },
      { time: "11:30", title: "Startup Pitch Competition", cat: "Concurso", speaker: "Jurado InnovaJujuy", location: "Auditorio A", ...CAT_STYLES["Concurso"] },
      { time: "16:00", title: "Entrega de Premios ExpoJuy 2026", cat: "Institucional", speaker: "Organización", location: "Salón Principal", ...CAT_STYLES["Institucional"] },
      { time: "17:30", title: "Ceremonia de Cierre", cat: "Institucional", speaker: "Autoridades", location: "Salón Principal", ...CAT_STYLES["Institucional"] },
    ],
  },
];


export default function Agenda() {
  const [dayIdx, setDayIdx] = useState(0);
  const activeDay = AGENDA_DATA[dayIdx];

  // Enlace directo de descarga generado a partir del ID de Google Drive
  const pdfDownloadUrl = "https://drive.google.com/uc?export=download&id=19saGQCgke9iOpGTdCrf8vUtk8hWNSCpN";

  // Volver arriba al entrar a la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="agenda-page">
      <Navbar />

      <main className="agenda-main-content">
        
        {/* ── CABECERA Y BOTÓN DE DESCARGA ── */}
        <section className="agenda-header-section">
          <div className="agenda-container">
            <span className="agenda-subtitle">Cronograma Oficial</span>
            <h1 className="agenda-title">Agenda de <span className="agenda-text-cyan">Actividades</span></h1>
            <p className="agenda-desc">
              Organiza tu visita. Descubre las conferencias, talleres y rondas de negocios que transformarán el futuro productivo del Norte Argentino.
            </p>
            
            <div className="agenda-header-actions">
              <a 
                href={pdfDownloadUrl} 
                className="agenda-download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="agenda-btn-icon">⬇</span>
                Descargar Agenda en PDF
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTENIDO DE LA AGENDA ── */}
        <section className="agenda-timeline-section">
          <div className="agenda-container agenda-container-sm">
            
            {/* Pestañas de Días */}
            <div className="agenda-tabs">
              {AGENDA_DATA.map((d, i) => (
                <button 
                  key={d.label} 
                  onClick={() => setDayIdx(i)} 
                  className={`agenda-tab-btn ${dayIdx === i ? "agenda-tab-active" : ""}`}
                >
                  <span className="agenda-tab-label">{d.label}</span>
                  <span className="agenda-tab-date">{d.date}</span>
                </button>
              ))}
            </div>

            {/* Línea de Tiempo (Timeline) */}
            <div className="agenda-timeline-wrapper">
              {/* Línea vertical de fondo */}
              <div className="agenda-timeline-line"></div>
              
              {/* Lista de eventos del día seleccionado */}
              <div className="agenda-events-list">
                {activeDay.events.map((ev, i) => (
                  <AgendaEventCard key={`${dayIdx}-${i}`} ev={ev} index={i} />
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}