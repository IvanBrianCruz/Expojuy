import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/login/Registro.css"; // Asegúrate de crear este archivo

export default function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Función que maneja el envío del formulario
  const handleRegister = (e) => {
    e.preventDefault();
    
    // Aquí normalmente validarías que las contraseñas coincidan, etc.
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, verifica.");
      return;
    }

    // Como es una maqueta, simulamos el registro exitoso y enviamos al login
    alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
    navigate("/login");
  };

  return (
    <div className="registro-page">
      {/* ── FONDOS Y LUCES ANIMADAS ── */}
      <div className="registro-background">
        <div className="registro-glow registro-glow-cyan"></div>
        <div className="registro-glow registro-glow-violet"></div>
      </div>

      {/* ── BOTÓN VOLVER ── */}
      <Link to="/" className="registro-back-btn">
        <span className="registro-back-icon">←</span> Volver al Inicio
      </Link>

      {/* ── CONTENEDOR PRINCIPAL ── */}
      <main className="registro-main-container">
        <div className="registro-card">
          
          <div className="registro-card-header">
            <img 
              src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp" 
              alt="ExpoJuy 2026 Logo" 
              className="registro-logo"
            />
            <h1 className="registro-title">Crear Cuenta</h1>
            <p className="registro-subtitle">Únete al ecosistema digital de ExpoJuy</p>
          </div>

          <form className="registro-form" onSubmit={handleRegister}>
            
            {/* Input Nombre Completo */}
            <div className="registro-input-group">
              <label htmlFor="name" className="registro-label">Nombre completo</label>
              <div className="registro-input-wrapper">
                <svg className="registro-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  type="text" 
                  id="name"
                  className="registro-input" 
                  placeholder="Juan Pérez" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Input Correo */}
            <div className="registro-input-group">
              <label htmlFor="email" className="registro-label">Correo electrónico</label>
              <div className="registro-input-wrapper">
                <svg className="registro-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input 
                  type="email" 
                  id="email"
                  className="registro-input" 
                  placeholder="tu@correo.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Contenedor Flex para las Contraseñas (Dos columnas en PC) */}
            <div className="registro-password-row">
              {/* Input Contraseña */}
              <div className="registro-input-group">
                <label htmlFor="password" className="registro-label">Contraseña</label>
                <div className="registro-input-wrapper">
                  <svg className="registro-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <input 
                    type="password" 
                    id="password"
                    className="registro-input" 
                    placeholder="••••••••" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Input Confirmar Contraseña */}
              <div className="registro-input-group">
                <label htmlFor="confirmPassword" className="registro-label">Confirmar Contraseña</label>
                <div className="registro-input-wrapper">
                  <svg className="registro-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <input 
                    type="password" 
                    id="confirmPassword"
                    className="registro-input" 
                    placeholder="••••••••" 
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Botón de Submit */}
            <button type="submit" className="registro-submit-btn">
              REGISTRARSE
            </button>
            
          </form>

          {/* ── SECCIÓN INICIAR SESIÓN ── */}
          <div className="registro-login-section">
            <p className="registro-login-text">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="registro-login-link">
                Iniciar sesión
              </Link>
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
}