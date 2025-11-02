import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../style.css";
import "../panel.css";

const Facturacion = () => {
  const [totalServicio] = useState(350.0);
  const [descuento, setDescuento] = useState(0);
  const [metodoPago, setMetodoPago] = useState("");
  const totalFinal = (totalServicio - (totalServicio * descuento) / 100).toFixed(2);

  const generarFactura = () => {
    alert("✅ Pago registrado, factura generada y servicio marcado como FINALIZADO (simulación).");
  };

 return (
    <div className="sb-nav-fixed">
      {/* NAVBAR SUPERIOR */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="#">
          DREAM CARS
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* BUSCADOR */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        {/* USUARIO */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Configuraciones
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Registro de Actividad
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/login">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* LAYOUT GENERAL */}
      <div id="layoutSidenav">
        {/* MENU LATERAL */}
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <Link className="nav-link" to="/admin">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </Link>

                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServicios"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  Servicios
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseServicios"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/admin/servicios">
                      Lista de Servicios
                    </Link>
                    <Link className="nav-link" to="/admin/nuevo-servicio">
                      Agregar Servicio
                    </Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOrdenes"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  Órdenes de Trabajo
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseOrdenes"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/admin/ordenes-trabajo">
                      Administrar Órdenes
                    </Link>
                    <Link className="nav-link" to="/admin/orden-nueva">
                      Nueva Orden
                    </Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseClientes"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  Clientes
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseClientes"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/admin/clientes">
                      Lista de Clientes
                    </Link>
                    <Link className="nav-link" to="/admin/nuevo-cliente">
                      Agregar Cliente
                    </Link>
                    <Link className="nav-link" to="/admin/vehiculos">
                      Vehículos
                    </Link>
                    <Link className="nav-link" to="/admin/nuevo-vehiculo">
                      Agregar Vehículo
                    </Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEmpleados"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-user-cog"></i>
                  </div>
                  Empleados
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseEmpleados"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/admin/empleados">
                      Lista de Empleados
                    </Link>
                    <Link className="nav-link" to="/admin/nuevo-empleado">
                      Agregar Empleado
                    </Link>
                  </nav>
                </div>

                <Link className="nav-link" to="/admin/facturacion">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  Facturación
                </Link>

                <Link className="nav-link" to="/admin/inventario">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-boxes-stacked"></i>
                  </div>
                  Inventario
                </Link>

                <Link className="nav-link" to="/admin/reportes">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  Reportes
                </Link>

                <Link className="nav-link" to="/admin/configuracion">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  Configuración
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Contenido principal */}
        <div id="layoutSidenav_content">
          <main>
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
          </main>

          {/* Footer */}
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">© 2025 Dream Cars - Sistema de Taller Mecánico</div>
                <div>
                  <a href="#">Privacidad</a> &middot; <a href="#">Términos</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Facturacion;
