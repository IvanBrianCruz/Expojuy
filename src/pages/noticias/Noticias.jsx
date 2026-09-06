import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importamos los componentes globales separados
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/noticias/Noticias.css";





// ── Datos de las 9 Noticias ───────────────────────────────────────────────────
const NEWS_DATA = [
  // Las 3 originales
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
  // 6 Nuevas Noticias
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
    img: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 7, date: "25 Sep 2026", cat: "Institucional", 
    title: "Firma de convenio histórico entre el Gobierno y la Cámara", 
    excerpt: "Se estableció un acuerdo de cooperación para subsidiar el espacio de las PyMEs jujeñas dentro del predio ferial.", 
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 8, date: "2 Oct 2026", cat: "Social", 
    title: "El Patio de Comidas se renueva con 100% gastronomía local", 
    excerpt: "Chefs reconocidos de la provincia ofrecerán menús exclusivos combinando productos andinos y alta cocina.", 
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format" 
  },
  { 
    id: 9, date: "5 Oct 2026", cat: "Logística", 
    title: "Plan de movilidad urbana gratuito para los días del evento", 
    excerpt: "Habrá transporte sin costo desde puntos estratégicos de San Salvador hacia Ciudad Cultural para facilitar el acceso de las familias.", 
    img: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&h=400&fit=crop&auto=format" 
  }
];

export default function Noticias() {
  // ── Lógica de Paginación ──
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Mostramos 6 noticias por página

  // Calculamos los índices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = NEWS_DATA.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(NEWS_DATA.length / itemsPerPage);

  // Funciones de cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  // Volver arriba al cambiar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="noticias-page">
      <Navbar />

      <main className="noticias-main-content">
        
        {/* ── HEADER DE LA PÁGINA ── */}
        <section className="noticias-header-section">
          <div className="noticias-container">
            <span className="noticias-subtitle">Centro de Prensa</span>
            <h1 className="noticias-title">Novedades y <span className="noticias-text-cyan">Noticias</span></h1>
            <p className="noticias-desc">Mantente al tanto de todos los comunicados oficiales, coberturas y anuncios previos a la ExpoJuy 2026.</p>
          </div>
        </section>

        {/* ── GRILLA DE NOTICIAS ── */}
        <section className="noticias-grid-section">
          <div className="noticias-container">
            
            <div className="noticias-grid">
              {currentNews.map((n) => (
                /* ENVOLVEMOS LA TARJETA EN UN LINK HACIA LA RUTA DINÁMICA */
                <Link to={`/noticias/noticia/${n.id}`} key={n.id} style={{ textDecoration: 'none' }}>
                  <article className="noticias-card">
                    <div className="noticias-img-wrap">
                      <img src={n.img} alt={n.title} loading="lazy" />
                      <div className="noticias-grad" />
                      <span className="noticias-cat-badge">{n.cat}</span>
                    </div>
                    <div className="noticias-card-content">
                      <p className="noticias-date">{n.date}</p>
                      <h3 className="noticias-card-title">{n.title}</h3>
                      <p className="noticias-excerpt">{n.excerpt}</p>
                      <span className="noticias-btn-leer">Leer nota completa →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* ── CONTROLES DE PAGINACIÓN ── */}
            {totalPages > 1 && (
              <div className="noticias-pagination">
                <button 
                  className="noticias-page-btn" 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                
                <div className="noticias-page-numbers">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button 
                      key={i} 
                      className={`noticias-num-btn ${currentPage === i + 1 ? 'noticias-num-active' : ''}`}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button 
                  className="noticias-page-btn" 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </button>
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}