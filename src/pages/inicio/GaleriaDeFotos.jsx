import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/inicio/GaleriaDeFotos.css";



// ── Construcción de las URLs de las imágenes ────────────────────────────────
const BASE_URL = "https://expojuy.camcomexjujuy.com.ar";
const FOTOS_EXTRACTED = [
  "/build/assets/1-BGVsbHVM.jpg", "/build/assets/2-ClaA1KXV.jpg", "/build/assets/3-CBThIh5p.jpg",
  "/build/assets/4-Bbx0X9Ik.jpg", "/build/assets/5-Be2Bh_wv.jpg", "/build/assets/6-Co0Y9xOQ.jpg",
  "/build/assets/7-D0VRQpah.jpg", "/build/assets/8-DAFe6fmu.jpg", "/build/assets/9-BP_i1J7E.jpg",
  "/build/assets/10-BKPNa9j5.jpg", "/build/assets/11-Bv-B7Fmn.jpg", "/build/assets/12-eua9-wcT.jpg",
  "/build/assets/13-B4UBbuGB.jpg", "/build/assets/14-DunV7qbx.jpg", "/build/assets/15-CSxMQzm6.jpg",
  "/build/assets/16-UW2QBSPf.jpg", "/build/assets/17-BAHWKV-v.jpg", "/build/assets/18-BV-Gjl-z.jpg",
  "/build/assets/19-RzpC8SYK.jpg", "/build/assets/20-DTNH9xDl.jpg", "/build/assets/21-CTP-ibwi.jpg",
  "/build/assets/22-Dybui4yb.jpg", "/build/assets/23-Dxht16EF.jpg", "/build/assets/24-Dcyugnup.jpg",
  "/build/assets/25-BvFc7JLQ.jpg", "/build/assets/26-D0Fl68fi.jpg", "/build/assets/27-Cfl79XbT.jpg",
  "/build/assets/28-CwhgGBgx.jpg", "/build/assets/29-D0PHlbUb.jpg", "/build/assets/30-Bn-dXcV9.jpg"
];

// Mapeamos el array para que tengan el link completo y un ID
const GALLERY_DATA = FOTOS_EXTRACTED.map((path, index) => ({
  id: index,
  src: `${BASE_URL}${path}`,
  alt: `Momento ExpoJuy - Imagen ${index + 1}`
}));

export default function Galeria() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Volver arriba al entrar a la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ── Lógica del Lightbox (Visualizador) ──
  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden"; // Evita que la página haga scroll de fondo
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToNext = (e) => {
    e.stopPropagation(); // Evita cerrar el modal al hacer clic en el botón
    setSelectedIndex((prev) => (prev === GALLERY_DATA.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? GALLERY_DATA.length - 1 : prev - 1));
  };

  // Soporte para flechas del teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goToNext(e);
      if (e.key === "ArrowLeft") goToPrev(e);
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="galeria-page">
      <Navbar />

      <main className="galeria-main-content">
        
        {/* ── CABECERA Y CALL TO ACTION SOCIAL ── */}
        <section className="galeria-header-section">
          <div className="galeria-container">
            <span className="galeria-subtitle">Colección Visual</span>
            <h1 className="galeria-title">Galería de <span className="galeria-text-cyan">Imágenes</span></h1>
            
            <div className="galeria-social-banner">
              <div className="galeria-social-icon">📸</div>
              <div className="galeria-social-text">
                <h3>¿Quieres formar parte de nuestra historia?</h3>
                <p>
                  Sube tus fotos a Instagram o Twitter usando el hashtag <strong className="galeria-hashtag">#ExpoJuyGaleria</strong> y tu foto podría aparecer en esta colección oficial de momentos únicos. ¡Participa y deja tu huella en el evento más grande del norte!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── GRILLA DE FOTOS (Estilo Masonry/Grid) ── */}
        <section className="galeria-grid-section">
          <div className="galeria-container">
            <div className="galeria-grid">
              {GALLERY_DATA.map((item, index) => (
                <div 
                  key={item.id} 
                  className="galeria-grid-item"
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" className="galeria-img" />
                  <div className="galeria-img-overlay">
                    <span className="galeria-overlay-icon">⤢ Ampliar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── VISUALIZADOR LIGHTBOX (Pantalla Completa) ── */}
      {selectedIndex !== null && (
        <div className="galeria-lightbox-overlay" onClick={closeLightbox}>
          
          <button className="galeria-lightbox-close" onClick={closeLightbox}>✕</button>
          
          <div className="galeria-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_DATA[selectedIndex].src} 
              alt={GALLERY_DATA[selectedIndex].alt} 
              className="galeria-lightbox-img" 
            />
            
            <div className="galeria-lightbox-controls">
              <button className="galeria-lightbox-prev" onClick={goToPrev}>❮</button>
              <span className="galeria-lightbox-counter">
                {selectedIndex + 1} / {GALLERY_DATA.length}
              </span>
              <button className="galeria-lightbox-next" onClick={goToNext}>❯</button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}