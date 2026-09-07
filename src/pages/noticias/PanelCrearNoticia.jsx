import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../assets/css/noticias/PanelCrearNoticia.css";



const CATEGORIAS_NOTICIAS = [
  "Expositores", "Conferencias", "Tecnología", "Networking", 
  "Concurso", "Turismo", "Institucional", "Social", "Logística"
];

export default function PanelCrearNoticia() {
  const [formData, setFormData] = useState({
    titulo: "",
    descBreve: "",
    categoria: "Institucional",
    imagenUrl: "",
    cuerpo: "",
    videoUrl: "",
    iframeCode: ""
  });

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
    <div className="panel-crear-noticia-page">
      <AdminNavbar />

      <main className="panel-crear-noticia-main">
        <div className="panel-crear-noticia-container">
          
          {/* Botón Volver */}
          <Link to="/panelAdministrativo/noticias" className="panel-crear-noticia-back-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Volver a Noticias
          </Link>

          <header className="panel-crear-noticia-header">
            <h1 className="panel-crear-noticia-title">Crear / Editar <span className="panel-crear-noticia-text-cyan">Noticia</span></h1>
            <p className="panel-crear-noticia-desc">
              Redacta un nuevo comunicado oficial. Completa los campos en orden para estructurar la noticia.
            </p>
          </header>

          {isSaved && (
            <div className="panel-crear-noticia-alert-success">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Noticia publicada y guardada correctamente.
            </div>
          )}

          <form className="panel-crear-noticia-form" onSubmit={handleSubmit}>
            
            {/* 1. Título */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="titulo">Título de la Noticia</label>
              <input 
                type="text" 
                id="titulo" 
                name="titulo"
                className="panel-crear-noticia-input" 
                placeholder="Ej: Más de 350 empresas confirmadas para ExpoJuy 2026"
                required
                value={formData.titulo}
                onChange={handleInputChange}
              />
            </div>

            {/* 2. Breve Descripción */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="descBreve">Breve Descripción (Extracto)</label>
              <textarea 
                id="descBreve" 
                name="descBreve"
                className="panel-crear-noticia-textarea" 
                placeholder="Un resumen de 1 o 2 líneas que aparecerá en la tarjeta principal..."
                rows="2"
                maxLength={150}
                required
                value={formData.descBreve}
                onChange={handleInputChange}
              ></textarea>
              <small className="panel-crear-noticia-hint">Máximo 150 caracteres.</small>
            </div>

            {/* 3. Categoría */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="categoria">Categoría</label>
              <div className="panel-crear-noticia-select-wrapper">
                <select 
                  id="categoria" 
                  name="categoria"
                  className="panel-crear-noticia-select"
                  value={formData.categoria}
                  onChange={handleInputChange}
                >
                  {CATEGORIAS_NOTICIAS.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <svg className="panel-crear-noticia-select-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* 4. Imagen URL */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="imagenUrl">Imagen de Portada (URL)</label>
              <input 
                type="url" 
                id="imagenUrl" 
                name="imagenUrl"
                className="panel-crear-noticia-input" 
                placeholder="https://..."
                required
                value={formData.imagenUrl}
                onChange={handleInputChange}
              />
              {formData.imagenUrl && (
                <div className="panel-crear-noticia-img-preview">
                  <img src={formData.imagenUrl} alt="Vista previa de portada" onError={(e) => e.target.style.display = 'none'} />
                </div>
              )}
            </div>

            {/* 5. Cuerpo de la Noticia */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="cuerpo">Cuerpo de la Noticia</label>
              <textarea 
                id="cuerpo" 
                name="cuerpo"
                className="panel-crear-noticia-textarea" 
                placeholder="Desarrolla el contenido completo del comunicado aquí..."
                rows="10"
                required
                value={formData.cuerpo}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* 6. Video URL (Opcional) */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="videoUrl">Video Destacado (URL de YouTube / Opcional)</label>
              <input 
                type="url" 
                id="videoUrl" 
                name="videoUrl"
                className="panel-crear-noticia-input" 
                placeholder="https://www.youtube.com/embed/..."
                value={formData.videoUrl}
                onChange={handleInputChange}
              />
              <small className="panel-crear-noticia-hint">Pega el enlace "embed" del video para incrustarlo en la noticia.</small>
            </div>

            {/* 7. Iframe (Opcional) */}
            <div className="panel-crear-noticia-group">
              <label htmlFor="iframeCode">Código IFrame (Opcional)</label>
              <textarea
                id="iframeCode"
                name="iframeCode"
                value={formData.iframeCode}
                onChange={handleInputChange}
                placeholder="<iframe src='...'></iframe>"
                rows="4"
                className="panel-expositor-textarea code-font"
              />
              <small className="panel-crear-noticia-hint">Incrusta encuestas, mapas, o contenido interactivo adicional.</small>
              
              {formData.iframeCode && formData.iframeCode.trim() !== "" && (
                <div className="panel-crear-noticia-iframe-preview-wrapper">
                  <div className="panel-crear-noticia-iframe-render" dangerouslySetInnerHTML={{ __html: formData.iframeCode }} />
                  <div className="panel-crear-noticia-preview-bar">
                    <span className="panel-crear-noticia-preview-label">Vista previa de IFrame</span>
                  </div>
                </div>
              )}
            </div>

            {/* ── BOTÓN GUARDAR ── */}
            <div className="panel-crear-noticia-actions">
              <button type="submit" className="panel-crear-noticia-submit-btn">
                Publicar Noticia
              </button>
            </div>

          </form>

        </div>
      </main>

      <Footer />
    </div>
  );
}