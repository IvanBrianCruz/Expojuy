import { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../assets/css/panelAdmin/PanelExtras.css";





export default function PanelExtras() {
  // Estados para manejar las vistas internas: 'menu', 'scanner-cargar', 'scanner-canjear'
  const [vistaActual, setVistaActual] = useState("menu");
  
  // Estados para la simulación del escáner
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null); // 'success', 'already-scanned', 'redeem-success'
  
  // Nuevo estado para la cantidad de puntos a canjear
  const [puntosACanjear, setPuntosACanjear] = useState(1);

  // Volver arriba al montar o cambiar de vista
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [vistaActual]);

  // Función para simular el escaneo con la cámara
  const simularEscaneo = () => {
    if (vistaActual === "scanner-canjear" && (!puntosACanjear || puntosACanjear < 1)) {
      alert("Por favor, ingresa una cantidad válida de puntos a descontar.");
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    // Simulamos un retraso de 1.5 segundos leyendo el QR
    setTimeout(() => {
      setIsScanning(false);
      
      if (vistaActual === "scanner-cargar") {
        // Simulamos que el 70% de las veces es exitoso, y 30% ya había pasado por el stand hoy
        const isSuccess = Math.random() > 0.3;
        setScanResult(isSuccess ? "success" : "already-scanned");
      } else {
        // Para canjear, asumimos que la operación fue exitosa
        setScanResult("redeem-success");
      }
    }, 1500);
  };

  const volverAlMenu = () => {
    setVistaActual("menu");
    setScanResult(null);
    setIsScanning(false);
    setPuntosACanjear(1); // Reseteamos el contador al volver
  };

  return (
    <div className="panel-extras-page">
      <AdminNavbar />

      <main className="panel-extras-main">
        <div className="panel-extras-container">
          
          {/* ── VISTA 1: MENÚ PRINCIPAL ── */}
          {vistaActual === "menu" && (
            <>
              <header className="panel-extras-header">
                <h1 className="panel-extras-title">Fidelización y <span className="panel-extras-text-cyan">Recompensas</span></h1>
                <p className="panel-extras-desc">
                  Utiliza esta herramienta en tu stand para escanear las entradas de los visitantes. Acumularán 1 punto diario por visitarte, fomentando el recorrido completo por toda la ExpoJuy 2026.
                </p>
              </header>

              <div className="panel-extras-menu-grid">
                
                {/* Tarjeta Cargar Puntos */}
                <button 
                  className="panel-extras-menu-card cargar"
                  onClick={() => setVistaActual("scanner-cargar")}
                >
                  <div className="panel-extras-card-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3>Carga de Puntos</h3>
                  <p>Escanea la entrada del visitante para otorgarle 1 punto por visitar tu stand hoy.</p>
                </button>

                {/* Tarjeta Canjear Puntos */}
                <button 
                  className="panel-extras-menu-card canjear"
                  onClick={() => setVistaActual("scanner-canjear")}
                >
                  <div className="panel-extras-card-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12"></polyline>
                      <rect x="2" y="7" width="20" height="5"></rect>
                      <line x1="12" y1="22" x2="12" y2="7"></line>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                    </svg>
                  </div>
                  <h3>Canjear Premio</h3>
                  <p>Escanea la entrada para descontar puntos y entregar merchandising, sorteos o beneficios.</p>
                </button>

              </div>
            </>
          )}

          {/* ── VISTA 2: CÁMARA ESCÁNER ── */}
          {vistaActual !== "menu" && (
            <div className="panel-extras-scanner-view">
              
              <div className="panel-extras-scanner-header">
                <button className="panel-extras-back-btn" onClick={volverAlMenu}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Volver al menú
                </button>
                <h2 className="panel-extras-scanner-title">
                  {vistaActual === "scanner-cargar" ? "Otorgar Puntos al Visitante" : "Canjear Puntos por Premio"}
                </h2>
              </div>

              {/* ── INPUT PARA DESCONTAR PUNTOS (Solo en vista canjear) ── */}
              {vistaActual === "scanner-canjear" && !isScanning && !scanResult && (
                <div className="panel-extras-points-input-wrapper">
                  <label htmlFor="puntos">¿Cuántos puntos cuesta este premio?</label>
                  <input 
                    type="number" 
                    id="puntos" 
                    min="1" 
                    value={puntosACanjear} 
                    onChange={(e) => setPuntosACanjear(e.target.value)}
                    className="panel-extras-points-input"
                  />
                </div>
              )}

              {/* Contenedor de la Cámara Simulada */}
              <div className="panel-extras-camera-container">
                <div className="panel-extras-camera-frame">
                  
                  {/* Visor de la cámara */}
                  <div className={`panel-extras-camera-viewport ${isScanning ? 'scanning' : ''}`}>
                    {/* Línea animada del escáner */}
                    {isScanning && <div className="panel-extras-scanline"></div>}
                    
                    {/* Esquinas del visor */}
                    <div className="panel-extras-corner top-left"></div>
                    <div className="panel-extras-corner top-right"></div>
                    <div className="panel-extras-corner bottom-left"></div>
                    <div className="panel-extras-corner bottom-right"></div>
                    
                    {!isScanning && !scanResult && (
                      <span className="panel-extras-camera-hint">Apunta al código QR de la entrada</span>
                    )}
                  </div>
                  
                </div>
              </div>

              {/* Botón para accionar la simulación */}
              {!isScanning && !scanResult && (
                <button className="panel-extras-scan-btn" onClick={simularEscaneo}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  Simular Escaneo
                </button>
              )}

              {/* ── RESULTADOS DEL ESCANEO ── */}
              {scanResult === "success" && (
                <div className="panel-extras-result success">
                  <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>¡1 Punto Cargado!</h3>
                  <p>Visitante: <strong>EJ26-849201</strong><br/> Se ha registrado la visita a tu stand exitosamente.</p>
                  <button className="panel-extras-scan-btn reset" onClick={() => setScanResult(null)}>Escanear siguiente</button>
                </div>
              )}

              {scanResult === "already-scanned" && (
                <div className="panel-extras-result warning">
                  <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h3>Ya visitó este stand hoy</h3>
                  <p>Solo se puede otorgar 1 punto por stand al día para cada visitante.</p>
                  <button className="panel-extras-scan-btn reset" onClick={() => setScanResult(null)}>Escanear siguiente</button>
                </div>
              )}

              {scanResult === "redeem-success" && (
                <div className="panel-extras-result redeem">
                  <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <h3>¡Canje Exitoso!</h3>
                  <p>Se han descontado <strong>{puntosACanjear} puntos</strong> de la entrada.<br/> Ya puedes entregar el beneficio al visitante.</p>
                  <button className="panel-extras-scan-btn reset" onClick={() => setScanResult(null)}>Realizar otro canje</button>
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}