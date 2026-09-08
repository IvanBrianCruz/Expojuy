import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


import "../../assets/css/inicio/Entradas.css";

export default function Entradas() {
  // Vuelve arriba al cargar la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="entradas-info-page">
      <Navbar />

      <main className="entradas-info-main">
        
        {/* ── CABECERA PRINCIPAL ── */}
        <header className="entradas-info-hero">
          <div className="entradas-info-container text-center">
            <span className="entradas-info-subtitle">Acreditaciones 2026</span>
            <h1 className="entradas-info-title">Tu Acceso al <span className="entradas-info-text-cyan">Polo Productivo</span></h1>
            <p className="entradas-info-desc">
              Elige el pase que mejor se adapte a tus necesidades. Disfruta de conferencias, rondas de negocios, tecnología y gastronomía regional en la muestra más grande del norte argentino.
            </p>
          </div>
        </header>

        {/* ── SECCIÓN DE PRECIOS (TARJETAS) ── */}
        <section className="entradas-info-pricing-section">
          <div className="entradas-info-container">
            <div className="entradas-info-pricing-grid">
              
              {/* Pase Diario */}
              <div className="entradas-info-card">
                <div className="entradas-info-card-header">
                  <h3>Pase Diario</h3>
                  <p>Acceso general por 1 día</p>
                  <div className="entradas-info-price">
                    <span className="currency">$</span>5.000 <span className="period">ARS</span>
                  </div>
                </div>
                <ul className="entradas-info-features">
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00C8C8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acceso al predio (Sectores A al F)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00C8C8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Conferencias abiertas al público
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00C8C8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Participación básica en ExpoPuntos
                  </li>
                  <li className="disabled">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#475569" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Rondas de Negocios B2B
                  </li>
                </ul>
              </div>

              {/* Pase Dual (Destacado) */}
              <div className="entradas-info-card popular">
                <div className="entradas-info-badge-popular">MÁS ELEGIDO</div>
                <div className="entradas-info-card-header">
                  <h3>Pase Dual</h3>
                  <p>Validez para 2 días a elección</p>
                  <div className="entradas-info-price">
                    <span className="currency">$</span>8.500 <span className="period">ARS</span>
                  </div>
                </div>
                <ul className="entradas-info-features">
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Todo lo incluido en el Pase Diario
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Ahorro del 15% sobre el valor diario
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Doble chance en sorteos de ExpoPuntos
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acceso a gradas en shows principales
                  </li>
                </ul>
              </div>

              {/* Pase Completo VIP */}
              <div className="entradas-info-card premium">
                <div className="entradas-info-card-header">
                  <h3>Pase Completo (VIP)</h3>
                  <p>Acceso total los 4 días del evento</p>
                  <div className="entradas-info-price">
                    <span className="currency">$</span>15.000 <span className="period">ARS</span>
                  </div>
                </div>
                <ul className="entradas-info-features">
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#8B1FD4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acceso irrestricto los 4 días
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#8B1FD4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acreditación para Rondas de Negocios B2B
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#8B1FD4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acceso al VIP Lounge (Networking)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#8B1FD4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Kit de bienvenida exclusivo (Tote bag + Merch)
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECCIÓN PUNTOS DE VENTA ── */}
        <section className="entradas-info-sales-section">
          <div className="entradas-info-container">
            <h2 className="entradas-info-section-title text-center">¿Dónde Comprar?</h2>
            <p className="text-center entradas-info-mb">Las entradas físicas se adquieren directamente en nuestros puntos oficiales habilitados mediante efectivo, tarjeta de débito o crédito, o billeteras virtuales.</p>
            
            <div className="entradas-info-points-grid">
              <div className="entradas-info-point-card">
                <div className="entradas-info-point-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h4>Boletería Ciudad Cultural</h4>
                <p>Durante los días del evento (9 al 12 de Octubre) de 09:00 a 20:00 hs en los accesos principales.</p>
              </div>
              <div className="entradas-info-point-card">
                <div className="entradas-info-point-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <h4>Cámara de Comercio (Venta Anticipada)</h4>
                <p>Belgrano 860, 2do Piso. Lunes a Viernes de 09:00 a 13:00 hs. (Descuento del 10% preventa).</p>
              </div>
              <div className="entradas-info-point-card">
                <div className="entradas-info-point-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </div>
                <h4>Annuar Shopping</h4>
                <p>Stand informativo Planta Baja. Horario comercial. Solo pago electrónico disponible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN SISTEMA DE PUNTOS (GAMIFICACIÓN) ── */}
        <section className="entradas-info-gamification-section">
          <div className="entradas-info-container">
            <div className="entradas-info-gamification-wrapper">
              
              <div className="entradas-info-gamification-text">
                <span className="entradas-info-subtitle">Fidelización Interactiva</span>
                <h2>Descubre el sistema <span className="entradas-info-text-cyan">ExpoPuntos</span></h2>
                <p>
                  Tu entrada no es solo un papel, ¡es tu llave para ganar increíbles premios! Cada ticket impreso cuenta con un <strong>Código QR único e intransferible</strong>.
                </p>
                <p>
                  Queremos que conozcas toda la oferta productiva de Jujuy. Por eso, hemos creado un sistema interactivo para premiar tu recorrido por los diferentes stands del predio.
                </p>
                
                <ul className="entradas-info-steps">
                  <li>
                    <span className="step-num">1</span>
                    <div>
                      <strong>Visita los Stands</strong>
                      <span>Acércate a los diferentes expositores en los pabellones.</span>
                    </div>
                  </li>
                  <li>
                    <span className="step-num">2</span>
                    <div>
                      <strong>Escanea tu QR</strong>
                      <span>El expositor escaneará el código de tu entrada. Obtendrás 1 punto por stand (solo una vez por día en cada stand).</span>
                    </div>
                  </li>
                  <li>
                    <span className="step-num">3</span>
                    <div>
                      <strong>¡Canjea y Gana!</strong>
                      <span>Acércate al centro de información para canjear tus puntos acumulados por beneficios exclusivos.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="entradas-info-rewards-panel">
                <h3>Catálogo de Premios</h3>
                <div className="entradas-info-reward-item">
                  <div className="reward-pts">10 Pts</div>
                  <div className="reward-text">Merchandising oficial (Llaveros, Stickers)</div>
                </div>
                <div className="entradas-info-reward-item">
                  <div className="reward-pts">30 Pts</div>
                  <div className="reward-text">Voucher de descuento en el Patio de Comidas</div>
                </div>
                <div className="entradas-info-reward-item">
                  <div className="reward-pts">50 Pts</div>
                  <div className="reward-text">Gorra o Tote Bag oficial ExpoJuy 2026</div>
                </div>
                <div className="entradas-info-reward-item premium-reward">
                  <div className="reward-pts">100+ Pts</div>
                  <div className="reward-text">Pase directo al sorteo final: <strong>Moto 0KM y Viajes turísticos</strong></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}