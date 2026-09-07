import { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../assets/css/panelAdmin/PanelEntradas.css";



const DIAS_EVENTO = [
  { id: "dia1", label: "Día 1 - 9 de Octubre" },
  { id: "dia2", label: "Día 2 - 10 de Octubre" },
  { id: "dia3", label: "Día 3 - 11 de Octubre" },
  { id: "dia4", label: "Día 4 - 12 de Octubre" }
];

export default function PanelEntradas() {
  const [tipoPase, setTipoPase] = useState("1_dia");
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [nombreCliente, setNombreCliente] = useState("");
  const [dniCliente, setDniCliente] = useState("");
  
  const [ticketGenerado, setTicketGenerado] = useState(null);

  // Volver arriba al entrar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Manejo de la selección de días (lógica de checkboxes)
  const handleDayToggle = (id) => {
    if (tipoPase === "pase_completo") return; // Si es completo, no se puede cambiar
    
    if (diasSeleccionados.includes(id)) {
      setDiasSeleccionados(diasSeleccionados.filter(d => d !== id));
    } else {
      // Limitar selección según el tipo de pase
      const limit = tipoPase === "1_dia" ? 1 : 2;
      if (diasSeleccionados.length < limit) {
        setDiasSeleccionados([...diasSeleccionados, id]);
      } else {
        alert(`Solo puedes seleccionar ${limit} día(s) para este tipo de pase.`);
      }
    }
  };

  // Cambio de tipo de pase
  const handleTipoPaseChange = (e) => {
    const val = e.target.value;
    setTipoPase(val);
    if (val === "pase_completo") {
      setDiasSeleccionados(DIAS_EVENTO.map(d => d.id)); // Selecciona todos
    } else {
      setDiasSeleccionados([]); // Resetea la selección
    }
  };

  // Generar Entrada
  const handleGenerarEntrada = (e) => {
    e.preventDefault();
    
    if (tipoPase !== "pase_completo" && diasSeleccionados.length === 0) {
      alert("Por favor, selecciona los días para la entrada.");
      return;
    }

    // Datos automáticos del sistema
    const idEntrada = `EJ26-${Math.floor(100000 + Math.random() * 900000)}`;
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString('es-AR', { 
      day: '2-digit', month: '2-digit', year: 'numeric', 
      hour: '2-digit', minute: '2-digit'
    });

    // Mapear IDs a etiquetas legibles
    const diasValidos = DIAS_EVENTO
      .filter(d => diasSeleccionados.includes(d.id))
      .map(d => d.label.split(" - ")[1])
      .join(" y ");

    const nuevoTicket = {
      idEntrada,
      idVendedor: "VEND-042", // Hardcodeado para el ejemplo del cajero
      fechaCompra: fechaFormateada,
      tipo: tipoPase === "1_dia" ? "Pase Diario (1 Día)" : tipoPase === "2_dias" ? "Pase Dual (2 Días)" : "Pase Completo (4 Días)",
      diasValidos: tipoPase === "pase_completo" ? "Del 9 al 12 de Octubre" : diasValidos,
      cliente: nombreCliente || "Consumidor Final",
      dni: dniCliente || "N/A",
      // API gratuita para generar QR reales a partir de texto
      qrUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${idEntrada}&color=0A0A14&bgcolor=FFFFFF`
    };

    setTicketGenerado(nuevoTicket);
  };

  // Función de impresión nativa
  const handleImprimir = () => {
    window.print();
  };

  return (
    <div className="panel-entradas-page">
      {/* Las clases "no-print" ocultan elementos al momento de imprimir */}
      <div className="no-print">
        <AdminNavbar />
      </div>

      <main className="panel-entradas-main">
        <div className="panel-entradas-container">
          
          <header className="panel-entradas-header no-print">
            <h1 className="panel-entradas-title">Boletería <span className="panel-entradas-text-cyan">Digital</span></h1>
            <p className="panel-entradas-desc">
              Genera los pases de acceso para los visitantes. Selecciona el tipo de entrada, los días correspondientes y emite el ticket con código QR.
            </p>
          </header>

          <div className="panel-entradas-layout">
            
            {/* ── COLUMNA IZQUIERDA: FORMULARIO ── */}
            <div className="panel-entradas-form-col no-print">
              <form className="panel-entradas-form" onSubmit={handleGenerarEntrada}>
                <h3 className="panel-entradas-form-title">Configuración de Entrada</h3>
                
                {/* 1. Tipo de Pase */}
                <div className="panel-entradas-group">
                  <label htmlFor="tipoPase">Tipo de Pase</label>
                  <div className="panel-entradas-select-wrapper">
                    <select 
                      id="tipoPase" 
                      value={tipoPase}
                      onChange={handleTipoPaseChange}
                      className="panel-entradas-select"
                    >
                      <option value="1_dia">Pase de 1 Día</option>
                      <option value="2_dias">Pase de 2 Días</option>
                      <option value="pase_completo">Pase Completo (4 Días)</option>
                    </select>
                  </div>
                </div>

                {/* 2. Selección de Días */}
                <div className="panel-entradas-group">
                  <label>Seleccionar Día(s) de Validez</label>
                  <div className="panel-entradas-days-grid">
                    {DIAS_EVENTO.map(dia => (
                      <button
                        key={dia.id}
                        type="button"
                        className={`panel-entradas-day-btn ${diasSeleccionados.includes(dia.id) ? 'active' : ''}`}
                        onClick={() => handleDayToggle(dia.id)}
                        disabled={tipoPase === "pase_completo"}
                      >
                        {dia.label.split(" - ")[0]} <br/> 
                        <small>{dia.label.split(" - ")[1]}</small>
                      </button>
                    ))}
                  </div>
                  <small className="panel-entradas-hint">
                    {tipoPase === "1_dia" ? "Selecciona 1 día." : tipoPase === "2_dias" ? "Selecciona 2 días." : "Todos los días incluidos."}
                  </small>
                </div>

                <hr className="panel-entradas-divider" />

                {/* 3. Datos del Comprador (Opcional) */}
                <h3 className="panel-entradas-form-title">Datos del Visitante (Opcional)</h3>
                <div className="panel-entradas-group">
                  <label htmlFor="nombreCliente">Nombre y Apellido</label>
                  <input 
                    type="text" 
                    id="nombreCliente" 
                    className="panel-entradas-input" 
                    placeholder="Ej: María Gómez"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                  />
                </div>
                <div className="panel-entradas-group">
                  <label htmlFor="dniCliente">DNI / Pasaporte</label>
                  <input 
                    type="text" 
                    id="dniCliente" 
                    className="panel-entradas-input" 
                    placeholder="Ej: 30123456"
                    value={dniCliente}
                    onChange={(e) => setDniCliente(e.target.value)}
                  />
                </div>

                {/* 4. Botón Generar */}
                <button type="submit" className="panel-entradas-submit-btn">
                  GENERAR ENTRADA
                </button>
                <p className="panel-entradas-hint" style={{textAlign: "center", marginTop: "1rem"}}>
                  El cobro se realiza por fuera del sistema (Efectivo/Posnet).
                </p>
              </form>
            </div>

            {/* ── COLUMNA DERECHA: VISTA PREVIA DEL TICKET ── */}
            <div className="panel-entradas-ticket-col">
              
              {!ticketGenerado ? (
                <div className="panel-entradas-empty-ticket no-print">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <h3>Sin entrada generada</h3>
                  <p>Completa los datos y presiona "Generar Entrada" para ver la vista previa aquí.</p>
                </div>
              ) : (
                <div className="panel-entradas-result-wrapper">
                  
                  {/* EL TICKET EN SÍ (Este es el elemento que se imprime bonito) */}
                  <div className="panel-entradas-ticket-ui print-only-area">
                    
                    {/* Parte Izquierda del Ticket (Info) */}
                    <div className="panel-entradas-ticket-left">
                      <div className="panel-entradas-ticket-brand">
                        <img src="https://i.postimg.cc/258Dq0PV/expojuy26-isologotipo.webp" alt="ExpoJuy Logo" />
                        <span>EXPOJUY 2026</span>
                      </div>
                      
                      <div className="panel-entradas-ticket-info">
                        <div className="ticket-label">Tipo de Acceso</div>
                        <div className="ticket-value highlight">{ticketGenerado.tipo}</div>
                        
                        <div className="ticket-label">Días de Validez</div>
                        <div className="ticket-value">{ticketGenerado.diasValidos}</div>

                        <div className="ticket-row-2">
                          <div>
                            <div className="ticket-label">Titular</div>
                            <div className="ticket-value">{ticketGenerado.cliente}</div>
                          </div>
                          <div>
                            <div className="ticket-label">DNI</div>
                            <div className="ticket-value">{ticketGenerado.dni}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Parte Derecha del Ticket (QR y Sistema) */}
                    <div className="panel-entradas-ticket-right">
                      <div className="ticket-qr-box">
                        <img src={ticketGenerado.qrUrl} alt="QR de acceso" />
                      </div>
                      <div className="ticket-sys-info">
                        <strong>ID:</strong> {ticketGenerado.idEntrada}<br/>
                        <strong>Vend:</strong> {ticketGenerado.idVendedor}<br/>
                        <strong>Fecha:</strong> {ticketGenerado.fechaCompra}
                      </div>
                    </div>

                    {/* Círculos decorativos para simular corte de ticket */}
                    <div className="ticket-hole top"></div>
                    <div className="ticket-hole bottom"></div>
                  </div>

                  {/* Acciones (No se imprimen) */}
                  <div className="panel-entradas-ticket-actions no-print">
                    <button className="panel-entradas-print-btn" onClick={handleImprimir}>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                      </svg>
                      IMPRIMIR TICKET
                    </button>
                    <button className="panel-entradas-reset-btn" onClick={() => setTicketGenerado(null)}>
                      Nueva Entrada
                    </button>
                  </div>
                  
                </div>
              )}
              
            </div>
          </div>

        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}