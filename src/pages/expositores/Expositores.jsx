


import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- Importamos Link para la navegación
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/expositores/Expositores.css";

// ── Datos de Prueba (Simulando la Base de Datos) ─────────────────────────────
const EXHIBITORS_DATA = [
  { id: 1, name: "TechJuy Solutions", category: "Tecnología", stand: "A-12", desc: "Software de gestión para PyMEs del NOA", icon: "🔷" },
  { id: 2, name: "Minas del Norte S.A.", category: "Minería", stand: "B-04", desc: "Exploración y extracción responsable de litio", icon: "⛏️" },
  { id: 3, name: "AgroJuy Exportaciones", category: "Agroindustria", stand: "C-08", desc: "Productores de quinoa, ají y tabaco del NOA", icon: "🌾" },
  { id: 4, name: "Universidad Nacional de Jujuy", category: "Educación", stand: "D-01", desc: "Innovación académica y transferencia tecnológica", icon: "🎓" },
  { id: 5, name: "Turismo Serrano", category: "Turismo", stand: "E-15", desc: "Circuitos de ecoturismo en la Puna jujeña", icon: "🏔️" },
  { id: 6, name: "BioSalud NOA", category: "Salud", stand: "F-03", desc: "Telemedicina y servicios de salud digital", icon: "🏥" },
  { id: 7, name: "DataCloud Jujuy", category: "Tecnología", stand: "A-22", desc: "Infraestructura cloud para el sector público", icon: "☁️" },
  { id: 8, name: "Cooperativa Cauchari", category: "Minería", stand: "B-11", desc: "Litio y energía solar en la Puna", icon: "🔋" },
  { id: 9, name: "Sabores del NOA", category: "Agroindustria", stand: "C-17", desc: "Exportación de productos regionales certificados", icon: "🫙" },
];

const CATEGORIES = ["Todos", "Tecnología", "Minería", "Agroindustria", "Educación", "Turismo", "Salud"];

export default function Expositores() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Vuelve arriba suavemente al montar el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ── Lógica de Filtrado y Búsqueda ──
  const filteredExhibitors = EXHIBITORS_DATA.filter((exhibitor) => {
    // Coincidencia de texto (nombre o descripción)
    const matchSearch = exhibitor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        exhibitor.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Coincidencia de categoría
    const matchCategory = activeCategory === "Todos" || exhibitor.category === activeCategory;
    
    return matchSearch && matchCategory;
  });

  return (
    <div className="expositores-page">
      <Navbar />

      <main className="expositores-main-content">
        <div className="expositores-container">
          
          {/* ── CABECERA Y BUSCADOR ── */}
          <header className="expositores-header">
            <span className="expositores-subtitle">DIRECTORIO</span>
            <h1 className="expositores-title">Expositores 2026</h1>
            <p className="expositores-desc">
              Descubrí las empresas e instituciones que forman parte de la expo más grande del Norte Argentino.
            </p>

            <div className="expositores-search-wrapper">
              <svg className="expositores-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                className="expositores-search-input" 
                placeholder="Buscar expositor, rubro, producto..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* ── FILTROS DE CATEGORÍA ── */}
            <div className="expositores-filters">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  className={`expositores-filter-btn ${activeCategory === cat ? "expositores-filter-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          {/* ── GRILLA DE RESULTADOS ── */}
          <section className="expositores-grid-section">
            
            {filteredExhibitors.length > 0 ? (
              <div className="expositores-grid">
                
                {filteredExhibitors.map((ex) => (
                  /* ── ENLACE AÑADIDO AQUÍ ── */
                  <Link 
                    to="/expositores/perfil/1" 
                    key={ex.id} 
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <article className="expositores-card">
                      
                      <div className="expositores-card-body">
                        <div className="expositores-card-icon">{ex.icon}</div>
                        
                        <div className="expositores-card-info">
                          <h3 className="expositores-card-title">{ex.name}</h3>
                          
                          <div className="expositores-card-badges">
                            <span className="expositores-badge-cat">{ex.category}</span>
                            <span className="expositores-badge-stand">{ex.stand}</span>
                          </div>
                          
                          <p className="expositores-card-excerpt">{ex.desc}</p>
                        </div>
                      </div>

                      <div className="expositores-card-footer">
                        <span className="expositores-footer-text">Stand {ex.stand}</span>
                        <span className="expositores-footer-link">Ver perfil →</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              /* ── ESTADO VACÍO (Sin resultados) ── */
              <div className="expositores-empty-state">
                <div className="expositores-empty-icon">🔍</div>
                <h3>No se encontraron expositores</h3>
                <p>Intenta ajustar tu búsqueda o cambiar de categoría.</p>
                <button 
                  className="expositores-reset-btn"
                  onClick={() => { setSearchQuery(""); setActiveCategory("Todos"); }}
                >
                  Limpiar filtros
                </button>
              </div>
            )}

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}