import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../assets/css/noticias/PanelNoticias.css";



// ── Datos Iniciales ────────────────────────
const INITIAL_NEWS = [
  { 
    id: 1, date: "28 Ago 2026", cat: "Expositores", 
    title: "Más de 350 empresas confirmadas para ExpoJuy 2026", 
    excerpt: "La edición 2026 supera todos los registros anteriores con la participación de empresas de 25 países, consolidando a Jujuy como polo productivo.", 
    img: "https://images.unsplash.com/photo-1781029711493-26385c558e91?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 2, date: "15 Ago 2026", cat: "Conferencias", 
    title: "Keynote especial: El rol del litio en la economía global", 
    excerpt: "El Dr. Marcos Villafuerte disertará sobre el posicionamiento estratégico de Jujuy en el marco de la transición energética mundial.", 
    img: "https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 3, date: "5 Ago 2026", cat: "Tecnología", 
    title: "ExpoJuy 2026 estrena plataforma digital de networking", 
    excerpt: "Una nueva app permite coordinar reuniones B2B en tiempo real durante el evento, facilitando el cruce entre inversores y startups.", 
    img: "https://images.unsplash.com/photo-1782554981060-8549664cc0a8?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 4, date: "1 Sep 2026", cat: "Networking", 
    title: "Rueda de negocios internacional rompe récord de inscripciones", 
    excerpt: "Más de 150 rondas de negocios ya están pre-agendadas. Delegaciones de Chile, Bolivia y Brasil confirman su asistencia.", 
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 5, date: "10 Sep 2026", cat: "Concurso", 
    title: "Lanzamiento del concurso 'InnovaJujuy' para startups locales", 
    excerpt: "Buscamos premiar a los emprendedores tecnológicos del NOA con un fondo semilla de $5M y mentoría por un año.", 
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 6, date: "18 Sep 2026", cat: "Turismo", 
    title: "El turismo sostenible como eje central del Pabellón B", 
    excerpt: "La Secretaría de Turismo presenta circuitos ecológicos y experiencias inmersivas con realidad virtual de la Quebrada y Puna.", 
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format" 
  }
];

export default function PanelNoticias() {
  const [news, setNews] = useState(INITIAL_NEWS);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta noticia?");
    if (confirmDelete) {
      setNews(news.filter(n => n.id !== id));
    }
  };

  return (
    <div className="panel-noticias-page">
      <AdminNavbar />

      <main className="panel-noticias-main">
        <div className="panel-noticias-container">
          
          {/* ── CABECERA Y BOTÓN CREAR ── */}
          <header className="panel-noticias-header">
            <div className="panel-noticias-header-text">
              <h1 className="panel-noticias-title">Gestión de <span className="panel-noticias-text-cyan">Noticias</span></h1>
              <p className="panel-noticias-desc">
                Administra los comunicados de prensa y novedades que se publican en el portal oficial de la ExpoJuy.
              </p>
            </div>
            <div className="panel-noticias-header-actions">
              <Link to="/panelAdministrativo/noticias/crear" className="panel-noticias-btn-create">
                <span className="panel-noticias-btn-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span> 
                CREAR NOTICIA
              </Link>
            </div>
          </header>

          {/* ── GRILLA DE NOTICIAS (MODO ADMIN) ── */}
          <section className="panel-noticias-grid">
            {news.length > 0 ? (
              news.map((n) => (
                <article key={n.id} className="panel-noticias-card">
                  
                  {/* Imagen y Categoría */}
                  <div className="panel-noticias-img-wrap">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <div className="panel-noticias-grad" />
                    <span className="panel-noticias-cat-badge">{n.cat}</span>
                  </div>
                  
                  {/* Contenido */}
                  <div className="panel-noticias-card-content">
                    <p className="panel-noticias-date">{n.date}</p>
                    <h3 className="panel-noticias-card-title">{n.title}</h3>
                    <p className="panel-noticias-excerpt">{n.excerpt}</p>
                  </div>

                  {/* ── BARRA DE ACCIONES ADMIN (Con SVGs) ── */}
                  <div className="panel-noticias-card-actions">
                    <Link to="/noticias/noticia/1" className="panel-noticias-action-btn view" title="Ver Noticia Pública">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Ver
                    </Link>
                    
                    <Link to="/panelAdministrativo/noticias/crear" className="panel-noticias-action-btn edit" title="Editar Noticia">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                      Editar
                    </Link>
                    
                    <button 
                      className="panel-noticias-action-btn delete" 
                      onClick={() => handleDelete(n.id)}
                      title="Eliminar Noticia"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                      Eliminar
                    </button>
                  </div>

                </article>
              ))
            ) : (
              /* Estado vacío con icono SVG */
              <div className="panel-noticias-empty">
                <span className="panel-noticias-empty-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>
                </span>
                <h3>No hay noticias publicadas</h3>
                <p>Crea tu primer comunicado de prensa usando el botón de arriba.</p>
              </div>
            )}
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}