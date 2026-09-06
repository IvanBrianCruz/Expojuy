import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/inicio/Mapa.css";



export default function Mapa() {
  
  // Volver arriba al montar el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="mapa-page">
      <Navbar />

      <main className="mapa-main-content">
        
        {/* ── SECCIÓN 1: PLANO INTERACTIVO CON GENIALLY ── */}
        <section className="mapa-section mapa-bg-dark">
          <div className="mapa-container">
            
            <div className="mapa-header">
              <span className="mapa-subtitle">Plano Digital</span>
              <h1 className="mapa-title">Mapa <span className="mapa-text-cyan">Interactivo</span></h1>
              <p className="mapa-desc">Navega por las distintas áreas de Ciudad Cultural. Haz clic en los elementos del plano para explorar la información.</p>
            </div>

            {/* Contenedor del Iframe de Genially */}
            <div className="mapa-genially-wrapper">
              <iframe 
                title="Plano ExpoJuy 2026"
                src="https://view.genially.com/6a9d841ed346398d91570450" 
                className="mapa-genially-iframe"
                allowFullScreen="allowfullscreen" 
                allow="autoplay; fullscreen; microphone; camera; display-capture" 
                frameBorder="0" 
                scrolling="no"
              ></iframe>
            </div>

          </div>
        </section>

        {/* ── SECCIÓN 2: UBICACIÓN GOOGLE MAPS ── */}
        <section className="mapa-section mapa-bg-surface">
          <div className="mapa-container">
            
            <div className="mapa-header">
              <span className="mapa-subtitle">Ubicación Física</span>
              <h2 className="mapa-title">¿Dónde es el evento?</h2>
              <p className="mapa-desc" style={{maxWidth: "600px", margin: "0 auto"}}>
                Te esperamos en <strong>Ciudad Cultural</strong>, San Salvador de Jujuy. El predio cuenta con amplio estacionamiento público, accesos pavimentados y seguridad policial permanente.
              </p>
            </div>
            
            <div className="mapa-google-wrapper">
              <div className="mapa-google-decor-border"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6480283856085!2d-65.3300493!3d-24.184073699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f005aa76add%3A0xc6ab7163567227e3!2sParquesito%20Ciudad%20Cultural!5e0!3m2!1ses-419!2sar!4v1788649344291!5m2!1ses-419!2sar" 
                className="mapa-google-iframe"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de ExpoJuy 2026 en Ciudad Cultural"
              ></iframe>
            </div>

            <div className="mapa-directions-cards">
              <div className="mapa-direction-card">
                <div className="mapa-direction-icon">🚗</div>
                <h4>En Vehículo</h4>
                <p>Acceso principal por Ruta Nacional N°9. El predio dispone de 2.500 plazas de estacionamiento gratuito.</p>
              </div>
              <div className="mapa-direction-card">
                <div className="mapa-direction-icon">🚌</div>
                <h4>Transporte Público</h4>
                <p>Durante la ExpoJuy, se habilitarán líneas especiales de colectivos urbanos directos al predio.</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}