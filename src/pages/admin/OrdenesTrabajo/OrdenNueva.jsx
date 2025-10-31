import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style.css";
import "../panel.css";

function OrdenNueva() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cliente: "",
    vehiculo: "",
    servicio: "",
    fecha: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaOrden = {
      ...formData,
      estado: "Pendiente",
    };

    const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    ordenes.push(nuevaOrden);
    localStorage.setItem("ordenes", JSON.stringify(ordenes));

    alert("✅ Orden registrada correctamente.");
    navigate("/admin/ordenes-trabajo");
  };

  return (
    <div className="sb-nav-fixed">
      {/* Navbar superior */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to="/admin">
          DREAM CARS
        </Link>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#!"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#!">
                  Configuraciones
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Registro de Actividad
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div id="layoutSidenav">
        {/* Barra lateral */}
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
                  href="#!"
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
                <div className="collapse" id="collapseServicios">
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
                  href="#!"
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
                <div className="collapse show" id="collapseOrdenes">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/admin/ordenes-trabajo">
                      Administrar Órdenes
                    </Link>
                    <Link className="nav-link active" to="/admin/orden-nueva">
                      Nueva Orden
                    </Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  href="#!"
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
                <div className="collapse" id="collapseClientes">
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
              <h1 className="mt-4">Registrar Nueva Orden</h1>
              <div className="card mb-4">
                <div className="card-header bg-primary text-white fw-bold">
                  <i className="fas fa-plus-circle me-2"></i>Datos de la Orden
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="cliente" className="form-label">
                          Cliente
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cliente"
                          value={formData.cliente}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="vehiculo" className="form-label">
                          Vehículo
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="vehiculo"
                          value={formData.vehiculo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="servicio" className="form-label">
                          Servicio
                        </label>
                        <select
                          className="form-select"
                          id="servicio"
                          value={formData.servicio}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccione un servicio...</option>
                          <option value="Cambio de Aceite">Cambio de Aceite</option>
                          <option value="Alineamiento">Alineamiento</option>
                          <option value="Frenos">Frenos</option>
                          <option value="Revisión General">Revisión General</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="fecha" className="form-label">
                          Fecha
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="fecha"
                          value={formData.fecha}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="descripcion" className="form-label">
                        Descripción del Problema
                      </label>
                      <textarea
                        className="form-control"
                        id="descripcion"
                        rows="3"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="text-end">
                      <Link to="/admin/ordenes-trabajo" className="btn btn-secondary me-2">
                        <i className="fas fa-arrow-left me-1"></i>Cancelar
                      </Link>
                      <button type="submit" className="btn btn-success">
                        <i className="fas fa-save me-1"></i>Registrar Orden
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>

          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Dream Cars © Taller Mecánico 2025</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default OrdenNueva;
