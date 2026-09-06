import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../assets/css/login/Login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Función que maneja el envío del formulario
  const handleLogin = (e) => {
    e.preventDefault();
    // Como es una maqueta, no validamos. Redirigimos directamente al panel.
    navigate("/panelAdministrativo");
  };

  return (
    <div className="login-page">
      {/* ── FONDOS Y LUCES ANIMADAS ── */}
      <div className="login-background">
        <div className="login-glow login-glow-cyan"></div>
        <div className="login-glow login-glow-violet"></div>
      </div>

      {/* ── BOTÓN VOLVER ── */}
      <Link to="/" className="login-back-btn">
        <span className="login-back-icon">←</span> Volver al Inicio
      </Link>

      {/* ── CONTENEDOR PRINCIPAL ── */}
      <main className="login-main-container">
        <div className="login-card">
          
          <div className="login-card-header">
            <img 
              src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp" 
              alt="ExpoJuy 2026 Logo" 
              className="login-logo"
            />
            <h1 className="login-title">Bienvenido</h1>
            <p className="login-subtitle">Ingresa tus credenciales para acceder al sistema</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            
            {/* Input Correo */}
            <div className="login-input-group">
              <label htmlFor="email" className="login-label">Correo electrónico</label>
              <div className="login-input-wrapper">
                <svg className="login-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input 
                  type="email" 
                  id="email"
                  className="login-input" 
                  placeholder="admin@expojuy.com.ar" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Input Contraseña */}
            <div className="login-input-group">
              <label htmlFor="password" className="login-label">Contraseña</label>
              <div className="login-input-wrapper">
                <svg className="login-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type="password" 
                  id="password"
                  className="login-input" 
                  placeholder="••••••••" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Opciones extra (Recuperar contraseña) */}
            <div className="login-options">
              <Link to="/solicitar-recuperacion" className="login-forgot-link">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Botón de Submit */}
            <button type="submit" className="login-submit-btn">
              INICIAR SESIÓN
            </button>
            
          </form>

          {/* ── SECCIÓN CREAR CUENTA ── */}
          <div className="login-register-section">
            <p className="login-register-text">
              ¿No tienes una cuenta?{" "}
              <Link to="/registro" className="login-register-link">
                Crear cuenta
              </Link>
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
}