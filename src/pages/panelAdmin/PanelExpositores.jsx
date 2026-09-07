import { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../assets/css/panelAdmin/PanelExpositores.css";



const CATEGORIAS = ["Tecnología", "Minería", "Agroindustria", "Educación", "Turismo", "Salud", "Institucional"];

export default function PanelExpositores() {
  const [formData, setFormData] = useState({
    nombre: "",
    imagenUrl: "",
    descBreve: "",
    categoria: "Tecnología",
    ubicacion: "",
    contacto: "",
    descGeneral: "",
    iframeCode: ""
  });

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 4000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="panel-expositor-page">
      <AdminNavbar />

      <main className="panel-expositor-main">
        <div className="panel-expositor-container">
          
          <header className="panel-expositor-header">
            <h1 className="panel-expositor-title">Perfil del <span className="panel-expositor-text-cyan">Expositor</span></h1>
            <p className="panel-expositor-desc">
              Diseña la carta de presentación de tu empresa. Este contenido será la ventana principal para los visitantes de la ExpoJuy 2026.
            </p>
          </header>

          {isSaved && (
            <div className="panel-expositor-alert-success">
              <span className="icon">✅</span> Perfil guardado y actualizado en el directorio oficial.
            </div>
          )}

          <form className="panel-expositor-form" onSubmit={handleSubmit}>
            
            {/* ── SECCIÓN 1: INFORMACIÓN BÁSICA (Arriba) ── */}
            <div className="panel-expositor-section">
              <h3 className="panel-expositor-section-title">Información Básica</h3>
              
              <div className="panel-expositor-grid-2">
                <div className="panel-expositor-group">
                  <label htmlFor="nombre">Nombre de la Empresa / Institución</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    className="panel-expositor-input" 
                    placeholder="Ej: TechJuy Solutions"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="panel-expositor-group">
                  <label>Categoría del Rubro</label>
                  <div className="panel-expositor-accordion">
                    <div 
                      className="panel-expositor-accordion-header" 
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    >
                      <span>{formData.categoria}</span>
                      <span className={`icon-arrow ${isCategoryOpen ? 'open' : ''}`}>▼</span>
                    </div>
                    {isCategoryOpen && (
                      <div className="panel-expositor-accordion-body">
                        {CATEGORIAS.map((cat) => (
                          <div 
                            key={cat} 
                            className={`panel-expositor-cat-option ${formData.categoria === cat ? 'active' : ''}`}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, categoria: cat }));
                              setIsCategoryOpen(false);
                            }}
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="panel-expositor-group">
                  <label htmlFor="ubicacion">Ubicación / Stand</label>
                  <input 
                    type="text" 
                    id="ubicacion" 
                    name="ubicacion"
                    className="panel-expositor-input" 
                    placeholder="Ej: Stand A-12"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="panel-expositor-group">
                  <label htmlFor="contacto">Contacto Breve (Tel / Email)</label>
                  <input 
                    type="text" 
                    id="contacto" 
                    name="contacto"
                    className="panel-expositor-input" 
                    placeholder="ventas@empresa.com"
                    value={formData.contacto}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Imagen y Desc Breve ocupan todo el ancho de la sección */}
              <div className="panel-expositor-group panel-expositor-mt">
                <label htmlFor="imagenUrl">URL del Logo o Imagen de Portada</label>
                <input 
                  type="url" 
                  id="imagenUrl" 
                  name="imagenUrl"
                  className="panel-expositor-input" 
                  placeholder="https://misitio.com/logo.jpg"
                  value={formData.imagenUrl}
                  onChange={handleInputChange}
                />
                {formData.imagenUrl && (
                  <div className="panel-expositor-img-preview">
                    <img src={formData.imagenUrl} alt="Vista previa" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                )}
              </div>

              <div className="panel-expositor-group panel-expositor-mt">
                <label htmlFor="descBreve">Descripción Breve</label>
                <input 
                  type="text" 
                  id="descBreve" 
                  name="descBreve"
                  className="panel-expositor-input" 
                  placeholder="Una oración corta para la tarjeta del directorio..."
                  maxLength={100}
                  value={formData.descBreve}
                  onChange={handleInputChange}
                />
                <small className="panel-expositor-hint">Máximo 100 caracteres. Se mostrará en el directorio general.</small>
              </div>
            </div>

            <hr className="panel-expositor-divider" />

            {/* ── SECCIÓN 2: CONTENIDO EXTENSO (Abajo, ancho completo) ── */}
            <div className="panel-expositor-section">
              <h3 className="panel-expositor-section-title">Contenido Detallado y Multimedia</h3>
              <p className="panel-expositor-section-subtitle">
                Este espacio es tu vitrina principal. Explaya los servicios de tu empresa e incrusta contenido interactivo.
              </p>

              <div className="panel-expositor-group">
                <label htmlFor="descGeneral">Descripción General (Extensa)</label>
                <textarea 
                  id="descGeneral" 
                  name="descGeneral"
                  className="panel-expositor-textarea" 
                  placeholder="Escribe todo sobre la empresa, historia, productos que van a presentar en la expo..."
                  rows="8"
                  value={formData.descGeneral}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="panel-expositor-group panel-expositor-mt">
                <label htmlFor="iframeCode">Código IFrame (Personalizado)</label>
                <textarea
                  id="iframeCode"
                  name="iframeCode"
                  value={formData.iframeCode}
                  onChange={handleInputChange}
                  placeholder="<iframe src='...'></iframe>"
                  rows="4"
                  className="panel-expositor-textarea code-font"
                />
                <small className="panel-expositor-hint">Pega el código HTML completo de un iframe (Ej: Google Maps, un reproductor de video especial, recorrido 3D, etc.).</small>
                
                {formData.iframeCode && formData.iframeCode.trim() !== "" && (
                  <div className="panel-expositor-iframe-custom-preview-wrapper">
                    <div className="panel-expositor-iframe-render" dangerouslySetInnerHTML={{ __html: formData.iframeCode }} />
                    <div className="panel-expositor-preview-bar">
                      <span className="panel-expositor-preview-label">● Vista previa en vivo del IFrame</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── BOTÓN GUARDAR ── */}
            <div className="panel-expositor-actions">
              <button type="submit" className="panel-expositor-submit-btn">
                Guardar Perfil del Expositor
              </button>
            </div>

          </form>

        </div>
      </main>

      <Footer />
    </div>
  );
}