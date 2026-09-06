import { useState, useEffect, useRef } from "react";
// Importamos los componentes globales separados
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/inicio/Inicio.css";
// IMPORTANTE: Asegúrate de crear este nuevo archivo para las animaciones y nuevas secciones
import "../../assets/css/inicio/InicioExtras.css";

// ── Hook de Cuenta Regresiva ──────────────────────────────────────────────────

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

// ── Hook para Animaciones de Entrada (Fade In) ────────────────────────────────

function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: dejar de observar una vez que ya apareció
          observer.unobserve(entry.target);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return [domRef, isVisible];
}


// ── Datos Estáticos ───────────────────────────────────────────────────────────
// FECHA CORREGIDA: 9 de Octubre 2026
const EVENT_DATE = new Date("2026-10-09T10:00:00-03:00");

// FECHAS DE AGENDA CORREGIDAS
const AGENDA_DAYS = [
  {
    label: "Día 1", date: "9 Oct 2026",
    events: [
      { time: "09:00", title: "Ceremonia de Apertura", cat: "Institucional", speaker: "Gobernador de Jujuy", location: "Salón Principal" },
      { time: "10:30", title: "Panel: Economía del Conocimiento", cat: "Conferencia", speaker: "Min. Ciencia y Tecnología", location: "Auditorio A" },
      { time: "12:00", title: "Ronda de Negocios — Sector Minero", cat: "Networking", speaker: "Cámara Minera", location: "Sala B-4" },
      { time: "15:00", title: "Workshop: Transformación Digital", cat: "Taller", speaker: "TechJuy Solutions", location: "Sala Workshop" },
      { time: "17:30", title: "Cóctel de Bienvenida a Expositores", cat: "Social", speaker: "Organización ExpoJuy", location: "Terraza Principal" },
    ],
  },
  {
    label: "Día 2", date: "10 Oct 2026",
    events: [
      { time: "09:30", title: "Conferencia: Litio y Transición Energética", cat: "Conferencia", speaker: "Dr. Marcos Villafuerte", location: "Auditorio A" },
      { time: "11:00", title: "Mesa Redonda: Agroindustria", cat: "Panel", speaker: "AgroJuy + SENASA", location: "Auditorio B" },
      { time: "13:00", title: "Ronda de Negocios — Tecnología", cat: "Networking", speaker: "DataCloud + TechJuy", location: "Sala B-4" },
      { time: "15:30", title: "Taller: Financiamiento PYME", cat: "Taller", speaker: "Banco Nación", location: "Sala Workshop" },
      { time: "18:00", title: "Presentación: ExpoJuy 2027", cat: "Institucional", speaker: "Cámara de Comercio", location: "Salón Principal" },
    ],
  },
  {
    label: "Día 3", date: "11 Oct 2026",
    events: [
      { time: "10:00", title: "Foro de Jóvenes Emprendedores", cat: "Panel", speaker: "Fundación NOA Digital", location: "Auditorio B" },
      { time: "11:30", title: "Startup Pitch Competition", cat: "Concurso", speaker: "Jurado InnovaJujuy", location: "Auditorio A" },
      { time: "14:00", title: "Panel: Turismo Sostenible", cat: "Conferencia", speaker: "Ministerio de Turismo", location: "Auditorio A" },
      { time: "16:00", title: "Entrega de Premios ExpoJuy 2026", cat: "Institucional", speaker: "Organización", location: "Salón Principal" },
      { time: "17:30", title: "Ceremonia de Cierre", cat: "Institucional", speaker: "Autoridades", location: "Salón Principal" },
    ],
  },
  {
    label: "Día 4", date: "12 Oct 2026",
    events: [
      { time: "10:00", title: "Foro de Jóvenes Emprendedores", cat: "Panel", speaker: "Fundación NOA Digital", location: "Auditorio B" },
      { time: "11:30", title: "Startup Pitch Competition", cat: "Concurso", speaker: "Jurado InnovaJujuy", location: "Auditorio A" },
      { time: "14:00", title: "Panel: Turismo Sostenible", cat: "Conferencia", speaker: "Ministerio de Turismo", location: "Auditorio A" },
      { time: "16:00", title: "Entrega de Premios ExpoJuy 2026", cat: "Institucional", speaker: "Organización", location: "Salón Principal" },
      { time: "17:30", title: "Ceremonia de Cierre", cat: "Institucional", speaker: "Autoridades", location: "Salón Principal" },
    ],
  },
];

const NEWS = [
  { date: "28 Ago 2026", cat: "Expositores", title: "Más de 350 empresas confirmadas para ExpoJuy 2026", excerpt: "La edición 2026 supera todos los registros anteriores con la participación de empresas de 25 países.", img: "https://images.unsplash.com/photo-1781029711493-26385c558e91?w=600&h=400&fit=crop&auto=format" },
  { date: "15 Ago 2026", cat: "Conferencias", title: "Keynote especial: El rol del litio en la economía global", excerpt: "El Dr. Marcos Villafuerte disertará sobre el posicionamiento estratégico de Jujuy.", img: "https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?w=600&h=400&fit=crop&auto=format" },
  { date: "5 Ago 2026", cat: "Tecnología", title: "ExpoJuy 2026 estrena plataforma digital de networking", excerpt: "Una nueva app permite coordinar reuniones B2B en tiempo real durante el evento.", img: "https://images.unsplash.com/photo-1782554981060-8549664cc0a8?w=600&h=400&fit=crop&auto=format" },
];

const CAT_COLORS = { Institucional: "rgba(139,31,212,0.2)", Conferencia: "rgba(0,200,200,0.2)", Networking: "rgba(167,139,250,0.2)", Taller: "rgba(99,102,241,0.2)", Social: "rgba(236,72,153,0.2)", Panel: "rgba(20,184,166,0.2)", Concurso: "rgba(245,158,11,0.2)" };
const CAT_TEXT = { Institucional: "#C084FC", Conferencia: "#00C8C8", Networking: "#A78BFA", Taller: "#818CF8", Social: "#F472B6", Panel: "#2DD4BF", Concurso: "#FBBF24" };

// Datos del carrusel de Fotos
const photosData = [
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/1-BGVsbHVM.jpg', alt: 'Apertura de expojuy 2026', caption: 'Autoridades de la provincia y representantes de la comunidad.' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/2-ClaA1KXV.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/3-CBThIh5p.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/4-Bbx0X9Ik.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/5-Be2Bh_wv.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/6-Co0Y9xOQ.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/8-DAFe6fmu.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/17-BAHWKV-v.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
  { src: 'https://expojuy.camcomexjujuy.com.ar/build/assets/23-Dxht16EF.jpg', alt: 'Titulo de la imagen', caption: 'descripcion de la imagen o parrafo ' },
];

// ── Componentes Internos de la Página de Inicio ───────────────────────────────

function Hero() {
  const t = useCountdown(EVENT_DATE);
  const [ref, isVisible] = useIntersectionObserver();

  const CountUnit = ({ value, label }) => (
    <div className="inicio-countdown-unit">
      <div className="inicio-count-val">{String(value).padStart(2, "0")}</div>
      <div className="inicio-count-label">{label}</div>
    </div>
  );

  return (
    <section className="inicio-hero">
      <div className="inicio-hero-bg">
        <img src="https://images.unsplash.com/photo-1765567972885-9b63d0f6c7db?w=1920&h=1080&fit=crop&auto=format" alt="Montañas Jujuy" />
        <div className="inicio-hero-overlay1" />
        <div className="inicio-hero-overlay2" />
      </div>

      <div className={`inicio-container inicio-hero-content inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
        <div className="inicio-hero-inner">
          <div className="inicio-hero-badge">
            <span className="inicio-pulse-dot" />
            9 · 10 · 11 · 12 Octubre 2026 — San Salvador de Jujuy, Argentina
          </div>

          <h1 className="inicio-hero-title">
            <span>EL POLO</span><br />
            <span className="inicio-text-gradient">PRODUCTIVO</span><br />
            <span>DEL NORTE</span>
          </h1>

          <p className="inicio-hero-desc">
            ExpoJuy 2026 reúne a más de <strong style={{ color: "#00C8C8" }}>350 empresas</strong> y <strong style={{ color: "#A78BFA" }}>80.000 visitantes</strong> de 25 países en el evento económico más importante del Norte Argentino.
          </p>

          <div className="inicio-hero-actions">
            <button className="inicio-btn-primary">Comprar Entradas</button>
            <button className="inicio-btn-ghost">Ver Expositores →</button>
          </div>

          <div className="inicio-countdown-wrapper">
            <p className="inicio-countdown-title">Cuenta Regresiva al Evento</p>
            <div className="inicio-countdown-grid">
              <CountUnit value={t.days} label="Días" />
              <span className="inicio-count-sep">:</span>
              <CountUnit value={t.hours} label="Horas" />
              <span className="inicio-count-sep">:</span>
              <CountUnit value={t.minutes} label="Minutos" />
              <span className="inicio-count-sep">:</span>
              <CountUnit value={t.seconds} label="Segundos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const [ref, isVisible] = useIntersectionObserver();
  const stats = [
    { value: "+350", label: "Expositores" }, { value: "+80K", label: "Visitantes" },
    { value: "25+", label: "Países" }, { value: "45.000 m²", label: "Predio" },
    { value: "4", label: "Días" }, { value: "+60", label: "Conferencias" },
  ];

  return (
    <div className={`inicio-stats-bar inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-container">
        <div className="inicio-stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="inicio-stat-item">
              <div className="inicio-stat-val">{s.value}</div>
              <div className="inicio-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// NUEVO COMPONENTE: Video Épico
function VideoPromo() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className={`inicio-video-section inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-video-wrapper">
        <video
          className="inicio-video-bg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://expojuy.camcomexjujuy.com.ar/build/assets/video-DvvGNoCh.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
        <div className="inicio-video-overlay"></div>
        <div className="inicio-video-content">
          <h2 className="inicio-video-title">LA EVOLUCIÓN ESTÁ AQUÍ</h2>
          <p className="inicio-video-desc">Prepárate para vivir la experiencia productiva y tecnológica más grande jamás realizada en el Norte Argentino.</p>
        </div>
      </div>
    </section>
  );
}

function SobreExpoJuy() {
  const [ref, isVisible] = useIntersectionObserver();
  const features = [
    { icon: "⚡", title: "Innovación", desc: "Hub de startups y tecnología emergente del NOA.", class: "inicio-bento-cyan inicio-col-span-2" },
    { icon: "🔗", title: "Vinculación", desc: "Rondas B2B con empresas latinas.", class: "inicio-bento-lavender" },
    { icon: "🌱", title: "Producción", desc: "Minería, agro y economía verde.", class: "inicio-bento-violet" },
    { icon: "📡", title: "Conocimiento", desc: "+60 conferencias de impacto.", class: "inicio-bento-cyan" },
    { icon: "🎤", title: "Networking", desc: "Conexión con líderes de la región.", class: "inicio-bento-lavender" },
  ];

  return (
    <section id="sobre-expojuy" className="inicio-section inicio-bg-dark">
      <div className={`inicio-container inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
        <div className="inicio-about-grid">
          <div className="inicio-about-text">
            <span className="inicio-subtitle">Sobre el Evento</span>
            <h2 className="inicio-title">El encuentro que <span style={{ color: "#00C8C8" }}>mueve el Norte</span></h2>
            <p className="inicio-desc">ExpoJuy es el evento comercial más importante del Norte Argentino, organizado por la Cámara de Comercio de Jujuy. Desde 2012, conecta a empresas locales, nacionales e internacionales.</p>
            <p className="inicio-desc">En 2026 incorpora un ecosistema digital completo, zonas de innovación tecnológica y conferencias de nivel internacional.</p>
            <div className="inicio-tags">
              <span className="inicio-tag inicio-tag-cyan">Jujuy, Argentina</span>
              <span className="inicio-tag inicio-tag-lavender">14 años de historia</span>
              <span className="inicio-tag" style={{ color: "#C084FC", borderColor: "rgba(192,132,252,0.3)", background: "rgba(192,132,252,0.1)" }}>NOA Digital Hub</span>
            </div>
          </div>
          <div className="inicio-bento-grid">
            {features.map((f) => (
              <div key={f.title} className={`inicio-bento-card ${f.class}`}>
                <div className="inicio-bento-icon">{f.icon}</div>
                <div className="inicio-bento-title">{f.title}</div>
                <div className="inicio-bento-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// NUEVO COMPONENTE: Carrusel Infinito
function GaleriaInfinita() {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState(null);

  // Duplicamos el array para lograr el efecto infinito sin saltos
  const carruselItems = [...photosData, ...photosData];

  return (
    <section className={`inicio-section inicio-bg-surface inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-container">
        <div className="inicio-header-center">
          <span className="inicio-subtitle">Experiencia</span>
          <h2 className="inicio-title">Momentos ExpoJuy</h2>
        </div>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="inicio-carrusel-container">
        <div className="inicio-carrusel-track">
          {carruselItems.map((foto, index) => (
            <div
              key={index}
              className="inicio-carrusel-slide"
              onClick={() => setSelectedImage(foto)}
            >
              <img src={foto.src} alt={foto.alt} className="inicio-carrusel-img" />
              <div className="inicio-carrusel-overlay">
                <span>Ampliar</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver imagen grande */}
      {selectedImage && (
        <div className="inicio-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="inicio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="inicio-modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="inicio-modal-img" />
            <div className="inicio-modal-caption">
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#00C8C8', fontFamily: "'Outfit', sans-serif" }}>{selectedImage.alt}</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(240,240,248,0.7)' }}>{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


function Agenda() {
  const [ref, isVisible] = useIntersectionObserver();
  const [dayIdx, setDayIdx] = useState(0);
  const day = AGENDA_DAYS[dayIdx];

  return (
    <section id="agenda" className={`inicio-section inicio-bg-dark inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-container inicio-container-sm">
        <div className="inicio-header-center">
          <span className="inicio-subtitle">Programación</span>
          <h2 className="inicio-title">Agenda de Actividades</h2>
        </div>

        <div className="inicio-agenda-tabs">
          {AGENDA_DAYS.map((d, i) => (
            <button key={d.label} onClick={() => setDayIdx(i)} className={`inicio-tab-btn ${dayIdx === i ? "inicio-tab-active" : ""}`}>
              <div>{d.label}</div>
              <div className="inicio-tab-date">{d.date}</div>
            </button>
          ))}
        </div>

        <div className="inicio-timeline">
          <div className="inicio-timeline-line" />
          <div className="inicio-timeline-events">
            {day.events.map((ev, i) => (
              <div key={i} className="inicio-event-item">
                <div className="inicio-event-time">{ev.time}</div>
                <div className="inicio-event-dot-wrap"><div className="inicio-event-dot" /></div>
                <div className="inicio-event-card">
                  <div className="inicio-event-header">
                    <h3 className="inicio-event-title">{ev.title}</h3>
                    <span className="inicio-event-cat" style={{ background: CAT_COLORS[ev.cat], color: CAT_TEXT[ev.cat], borderColor: CAT_TEXT[ev.cat] + "30" }}>{ev.cat}</span>
                  </div>
                  <div className="inicio-event-details">
                    <span>🎤 {ev.speaker}</span>
                    <span>📍 {ev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="inicio-text-center" style={{ marginTop: "3rem" }}>
          <button className="inicio-btn-outline">Ver agenda completa</button>
        </div>
      </div>
    </section>
  );
}

function Noticias() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section id="noticias" className={`inicio-section inicio-bg-surface inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-container">
        <div className="inicio-news-header">
          <div>
            <span className="inicio-subtitle">Novedades</span>
            <h2 className="inicio-title">Noticias</h2>
          </div>
          <button href="/noticias" className="inicio-link-cyan">Ver todas →</button>
        </div>
        <div className="inicio-news-grid">
          {NEWS.map((n, i) => (
            <article key={i} className="inicio-news-card">
              <div className="inicio-news-img-wrap">
                <img src={n.img} alt={n.title} />
                <div className="inicio-news-grad" />
                <span className="inicio-news-cat">{n.cat}</span>
              </div>
              <div className="inicio-news-content">
                <p className="inicio-news-date">{n.date}</p>
                <h3 className="inicio-news-card-title">{n.title}</h3>
                <p className="inicio-desc" style={{ marginTop: "0.5rem", marginBottom: "0", fontSize: "0.75rem" }}>{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const [ref, isVisible] = useIntersectionObserver();
  const tiers = [{ name: "Oro", color: "#F59E0B", count: 3, h: 80 }, { name: "Plata", color: "#94A3B8", count: 5, h: 64 }, { name: "Bronce", color: "#C08B5C", count: 6, h: 52 }];

  return (
    <section id="sponsors" className={`inicio-section inicio-bg-dark inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-container">
        <div className="inicio-header-center">
          <span className="inicio-subtitle">Patrocinadores</span>
          <h2 className="inicio-title">Sponsors 2026</h2>
        </div>
        {tiers.map((tier) => (
          <div key={tier.name} className="inicio-sponsor-tier">
            <div className="inicio-tier-header">
              <div className="inicio-tier-line" style={{ background: `linear-gradient(to right, ${tier.color}40, transparent)` }} />
              <span className="inicio-tier-badge" style={{ color: tier.color, borderColor: tier.color + "30", background: tier.color + "10" }}>{tier.name}</span>
              <div className="inicio-tier-line" style={{ background: `linear-gradient(to left, ${tier.color}40, transparent)` }} />
            </div>
            <div className="inicio-sponsor-grid" style={{ gridTemplateColumns: `repeat(${tier.count}, 1fr)` }}>
              {Array.from({ length: tier.count }).map((_, i) => (
                <div key={i} className="inicio-sponsor-box" style={{ borderColor: tier.color + "1F", height: `${tier.h}px` }}>
                  <span style={{ color: tier.color + "50" }}>LOGO</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="inicio-text-center" style={{ marginTop: "3rem" }}>
          <button className="inicio-btn-primary">Quiero ser patrocinador →</button>
        </div>
      </div>
    </section>
  );
}

// NUEVO COMPONENTE: Ubicación con Mapa de Google
function UbicacionMapa() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className={`inicio-section inicio-bg-surface inicio-fade-up ${isVisible ? 'inicio-fade-in-visible' : ''}`} ref={ref}>
      <div className="inicio-container">
        <div className="inicio-header-center">
          <span className="inicio-subtitle">Ubicación</span>
          <h2 className="inicio-title">¿Cómo llegar?</h2>
          <p className="inicio-desc" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Te esperamos en Ciudad Cultural, San Salvador de Jujuy. El predio cuenta con amplio estacionamiento y accesos pavimentados.
          </p>
        </div>

        <div className="inicio-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6480283856085!2d-65.3300493!3d-24.184073699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f005aa76add%3A0xc6ab7163567227e3!2sParquesito%20Ciudad%20Cultural!5e0!3m2!1ses-419!2sar!4v1788649344291!5m2!1ses-419!2sar"
            className="inicio-google-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

// ── Componente Principal Exportado ────────────────────────────────────────────

export default function Inicio() {
  return (
    <div className="inicio-page">
      <Navbar />

      <main className="inicio-main-content">
        <Hero />
        <StatsBar />
        <VideoPromo />
        <SobreExpoJuy />
        <GaleriaInfinita />
        <Agenda />
        <Noticias />
        <Sponsors />
        <UbicacionMapa />
      </main>

      <Footer />
    </div>
  );
}