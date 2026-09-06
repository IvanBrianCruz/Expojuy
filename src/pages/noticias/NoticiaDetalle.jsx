import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/noticias/NoticiasDetalle.css";

// ── Datos de la Noticia (Expandidos de la ID 1) ───────────────────────────────
const NOTICIA = {
  id: 1,
  date: "28 Ago 2026",
  cat: "Expositores",
  title: "Más de 350 empresas confirmadas para ExpoJuy 2026",
  excerpt: "La edición 2026 supera todos los registros anteriores con la participación de empresas de 25 países, consolidando a Jujuy como polo productivo.",
  author: "Equipo de Prensa ExpoJuy",
  // Cambiamos los parámetros de la URL de Unsplash a w=1200 para que se vea nítida en grande
  img: "https://images.unsplash.com/photo-1781029711493-26385c558e91?w=1200&h=600&fit=crop&auto=format",
  videoUrl: "https://www.youtube.com/embed/S1U7pPkH0x8" // Video de relleno para el ejemplo
};

export default function NoticiaDetalle() {
  const [copiado, setCopiado] = useState(false);

  // Funciones para compartir
  const urlActual = typeof window !== 'undefined' ? window.location.href : 'https://expojuy2026.com/noticia/1';
  const textoCompartir = `${NOTICIA.title} - ExpoJuy 2026`;

  const compartirWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(textoCompartir + " " + urlActual)}`, '_blank');
  };

  const compartirFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlActual)}`, '_blank');
  };

  const copiarEnlace = () => {
    navigator.clipboard.writeText(urlActual);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="noticia-detalle-page">
      <Navbar />

      <main className="noticia-detalle-main">
        
        {/* ── CABECERA DE LA NOTICIA ── */}
        <header className="noticia-detalle-header">
          <div className="noticia-detalle-container">
            <span className="noticia-detalle-cat">{NOTICIA.cat}</span>
            <h1 className="noticia-detalle-title">{NOTICIA.title}</h1>
            <p className="noticia-detalle-excerpt">{NOTICIA.excerpt}</p>
            
            <div className="noticia-detalle-meta">
              <div className="noticia-detalle-author">
                <div className="noticia-detalle-avatar">EP</div>
                <div className="noticia-detalle-author-info">
                  <span className="noticia-detalle-author-name">{NOTICIA.author}</span>
                  <span className="noticia-detalle-date">{NOTICIA.date}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── IMAGEN PRINCIPAL ── */}
        <section className="noticia-detalle-hero-image">
          <div className="noticia-detalle-container">
            <img src={NOTICIA.img} alt={NOTICIA.title} className="noticia-detalle-img" />
            <span className="noticia-detalle-img-caption">Vista aérea de las instalaciones preparadas para el evento. Foto: Archivo ExpoJuy.</span>
          </div>
        </section>

        {/* ── CUERPO DE LA NOTICIA Y COMPARTIR ── */}
        <section className="noticia-detalle-content-section">
          <div className="noticia-detalle-container noticia-detalle-content-layout">
            
            {/* Botones Flotantes (Compartir) */}
            <aside className="noticia-detalle-share-sidebar">
              <div className="noticia-detalle-share-sticky">
                <span className="noticia-detalle-share-title">Compartir</span>
                <button className="noticia-detalle-share-btn fb" onClick={compartirFacebook} title="Compartir en Facebook">
                  Fb
                </button>
                <button className="noticia-detalle-share-btn wa" onClick={compartirWhatsApp} title="Compartir en WhatsApp">
                  Wa
                </button>
                <button className="noticia-detalle-share-btn link" onClick={copiarEnlace} title="Copiar Enlace">
                  {copiado ? '✓' : '🔗'}
                </button>
              </div>
            </aside>

            {/* Texto de la noticia */}
            <article className="noticia-detalle-body">
              <p>
                La organización de la <strong>ExpoJuy 2026</strong> ha confirmado hoy que la próxima edición del evento romperá todos los récords históricos de asistencia y participación corporativa. A menos de dos meses para la gran inauguración, el comité organizador liderado por la Cámara de Comercio de Jujuy anunció que más de 350 empresas e instituciones ya han asegurado su lugar en el predio de Ciudad Cultural.
              </p>
              
              <h2>Un polo productivo de alcance internacional</h2>
              <p>
                Este año, el evento no solo se limitará a empresas del Norte Argentino. La novedad más destacada es la confirmación de delegaciones provenientes de 25 países distintos, abarcando sectores que van desde la minería del litio hasta el desarrollo de software y la agrotecnología.
              </p>
              
              <blockquote>
                "Estamos presenciando una transformación sin precedentes. Jujuy ya no es solo un espectador en la economía global, es un actor principal. La cantidad de empresas internacionales que buscan invertir en nuestra provincia es el reflejo de años de trabajo continuo."
                <cite>— Comité Organizador ExpoJuy</cite>
              </blockquote>

              <p>
                Los pabellones centrales (A y B) albergarán a las grandes industrias, mientras que el sector tecnológico tendrá un espacio exclusivo donde las startups del NOA podrán conectar con inversores ángeles y fondos de capital de riesgo.
              </p>

              {/* Video Incrustado */}
              <div className="noticia-detalle-video-wrapper">
                <iframe 
                  src={NOTICIA.videoUrl} 
                  title="Video ExpoJuy Preparativos" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <h2>Expectativas de negocios</h2>
              <p>
                Se espera que durante los cuatro días del evento se generen rondas de negocios por más de 50 millones de dólares en intenciones de inversión. Además, se habilitará una nueva plataforma digital de networking (anunciada recientemente) para que los expositores puedan pre-agendar reuniones B2B de manera mucho más eficiente.
              </p>
              <p>
                Las entradas para el público general estarán disponibles a partir de la próxima semana a través de los canales oficiales.
              </p>
            </article>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}