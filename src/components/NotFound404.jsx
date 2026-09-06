import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#07070F", color: "#F0F0F8" }}>
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "4rem", color: "#00C8C8", margin: 0, fontFamily: "'Outfit', sans-serif" }}>404</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Página en construcción</h2>
        <p style={{ color: "rgba(240,240,248,0.5)", marginBottom: "2rem" }}>Esta sección de la maqueta aún no está disponible.</p>
        <a href="/" style={{ background: "linear-gradient(135deg, #8B1FD4, #00C8C8)", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none", color: "white", fontWeight: "bold" }}>
          Volver al Inicio
        </a>
      </main>
      <Footer />
    </div>
  );
}