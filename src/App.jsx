import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// ── IMPORTAR PÁGINAS DE LA MAQUETA ──────────────────────────────────────────
import Inicio from './pages/inicio/Inicio';
import Noticias from './pages/noticias/Noticias';         // La crearemos pronto
import NoticiaDetalle from './pages/noticias/NoticiaDetalle'; // La crearemos pronto
import GaleriaDeFotos from './pages/inicio/GaleriaDeFotos'; // La crearemos pronto


import Expositores from './pages/expositores/Expositores'; // La crearemos pronto
import ExpositorPerfil from './pages/expositores/ExpositoresPerfil'; // La crearemos pronto
import Mapa from './pages/inicio/Mapa';               // La crearemos pronto
import Agenda from './pages/inicio/Agenda';           // La crearemos pronto
import Contacto from './pages/inicio/Contacto';       // La crearemos pronto
import NotFound from './components/NotFound404';       // Página 404 para enlaces en construcción

// (Opcional) Si luego quieres hacer la vista visual de un Login simulado
import Login from './pages/login/Login';
import Registro from './pages/login/Registro'; // La crearemos pronto

// ── IMPORTAR ESTILOS GLOBALES ───────────────────────────────────────────────
import './index.css'; // Asegúrate de que el nombre coincida con tu archivo CSS global

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* ── RUTAS PRINCIPALES DE LA MAQUETA ── */}

          {/* Redirigir /inicio a la raíz / para evitar contenido duplicado */}
          <Route path="/inicio" element={<Navigate to="/" replace />} />

          {/* Home Page (El Inicio que acabamos de hacer) */}
          <Route path="/" element={<Inicio />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/noticia/1" element={<NoticiaDetalle />} />
          <Route path="/galeria" element={<GaleriaDeFotos />} />
          {/* ── SECCIONES SEPARADAS ── */}
        
          
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/expositores" element={<Expositores />} />
          <Route path="/expositores/perfil/1" element={<ExpositorPerfil />} />


          <Route path="/agenda" element={<Agenda />} />


          {/* (Ejemplo) Si decides agregar un login visual de adorno */}
         <Route path="/login" element={<Login />} /> 
          <Route path="/registro" element={<Registro />} />

          {/* ── ERROR 404 ── */}
          {/* Captura cualquier URL que no exista o páginas que aún no armamos */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;