import React, { useState } from "react";

const Facturacion = () => {
  const [totalServicio] = useState(350.0);
  const [descuento, setDescuento] = useState(0);
  const [metodoPago, setMetodoPago] = useState("");
  const totalFinal = (totalServicio - (totalServicio * descuento) / 100).toFixed(2);

  const generarFactura = () => {
    alert("✅ Pago registrado, factura generada y servicio marcado como FINALIZADO (simulación).");
  };

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Pago y Facturación</h1>
      <p className="text-muted">Aquí se realiza el cierre final del servicio.</p>

      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white fw-bold">
          <i className="fas fa-cash-register me-2"></i>Datos del Pago
        </div>
        <div className="card-body">
          {/* Total calculado del servicio */}
          <div className="mb-3">
            <label className="form-label fw-bold">Total del Servicio (S/):</label>
            <input type="text" className="form-control" value={totalServicio} disabled />
          </div>

          {/* Promociones / descuentos */}
          <div className="mb-3">
            <label className="form-label fw-bold">Aplicar Promoción / Descuento</label>
            <select
              className="form-select"
              value={descuento}
              onChange={(e) => setDescuento(parseFloat(e.target.value))}
            >
              <option value="0">Sin promoción</option>
              <option value="10">Descuento 10%</option>
              <option value="20">Descuento 20%</option>
              <option value="30">Descuento 30%</option>
            </select>
          </div>

          {/* Total final */}
          <div className="mb-3">
            <label className="form-label fw-bold">Total Final (S/):</label>
            <input type="text" className="form-control" value={totalFinal} disabled />
            <small className="text-muted">Se actualiza automáticamente por promoción.</small>
          </div>

          {/* Método de pago */}
          <div className="mb-3">
            <label className="form-label fw-bold">Método de Pago</label>
            <select
              className="form-select"
              required
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
            >
              <option value="">Seleccione un método</option>
              <option>Efectivo</option>
              <option>Tarjeta</option>
              <option>Yape</option>
              <option>Plin</option>
            </select>
          </div>

          {/* Botón generar factura */}
          <div className="d-flex justify-content-end">
            <button className="btn btn-success" onClick={generarFactura}>
              <i className="fas fa-file-invoice-dollar me-1"></i>Generar Factura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facturacion;
