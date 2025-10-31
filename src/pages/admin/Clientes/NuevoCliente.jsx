import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/styles.css";
import "../css/panel.css";

const NuevoCliente = () => {
  return (
    <div className="sb-nav-fixed">
      {/* NAVBAR SUPERIOR */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="/admin/index">
          DREAM CARS
        </a>
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
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="/admin/configuracion">
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
                <a className="dropdown-item" href="/login">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* CONTENEDOR PRINCIPAL */}
      <div id="layoutSidenav">
        {/* SIDEBAR */}
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <a className="nav-link" href="/admin/index">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>

                {/* SERVICIOS */}
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServicios"
                  aria-expanded="false"
                  aria-controls="collapseServicios"
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
                    <a className="nav-link" href="/admin/servicios">
                      Lista de Servicios
                    </a>
                    <a className="nav-link" href="/admin/nuevo-servicio">
                      Agregar Servicio
                    </a>
                  </nav>
                </div>

                {/* ORDENES */}
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOrdenes"
                  aria-expanded="false"
                  aria-controls="collapseOrdenes"
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
                    <a className="nav-link" href="/admin/ordenes-trabajo">
                      Administrar Órdenes
                    </a>
                    <a className="nav-link" href="/admin/orden-nueva">
                      Nueva Orden
                    </a>
                  </nav>
                </div>

                {/* CLIENTES */}
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseClientes"
                  aria-expanded="true"
                  aria-controls="collapseClientes"
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
                  className="collapse show"
                  id="collapseClientes"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/admin/clientes">
                      Lista de Clientes
                    </a>
                    <a className="nav-link active" href="/admin/nuevo-cliente">
                      Agregar Cliente
                    </a>
                    <a className="nav-link" href="/admin/vehiculos">
                      Vehículos
                    </a>
                    <a className="nav-link" href="/admin/nuevo-vehiculo">
                      Agregar Vehículo
                    </a>
                  </nav>
                </div>

                {/* EMPLEADOS */}
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEmpleados"
                  aria-expanded="false"
                  aria-controls="collapseEmpleados"
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
                    <a className="nav-link" href="/admin/empleados">
                      Lista de Empleados
                    </a>
                    <a className="nav-link" href="/admin/nuevo-empleado">
                      Agregar Empleado
                    </a>
                  </nav>
                </div>

                {/* REPORTES */}
                <a className="nav-link" href="/admin/reportes">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  Reportes
                </a>

                {/* CONFIGURACIÓN */}
                <a className="nav-link" href="/admin/configuracion">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  Configuración
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div id="layoutSidenav_content">
          <main className="container-fluid px-4">
            <h1 className="mt-4">Registrar Nuevo Cliente</h1>
            <div className="card mt-3 mb-4">
              <div className="card-header bg-success text-white">
                <i className="fas fa-user-plus me-1"></i> Datos del Cliente
              </div>
              <div className="card-body">
                <form id="formNuevoCliente">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label">
                        Nombre Completo
                      </label>
                      <input type="text" id="nombre" className="form-control" required />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="dni" className="form-label">
                        DNI
                      </label>
                      <input type="text" id="dni" className="form-control" required />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="telefono" className="form-label">
                        Teléfono
                      </label>
                      <input type="text" id="telefono" className="form-control" required />
                    </div>
                  </div>

                  <h5 className="text-primary mt-4">Datos del Vehículo</h5>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="marca" className="form-label">
                        Marca
                      </label>
                      <input type="text" id="marca" className="form-control" required />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="modelo" className="form-label">
                        Modelo
                      </label>
                      <input type="text" id="modelo" className="form-control" required />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="placa" className="form-label">
                        Placa
                      </label>
                      <input type="text" id="placa" className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="btn btn-success me-2">
                      <i className="fas fa-save"></i> Registrar
                    </button>
                    <a href="/admin/clientes" className="btn btn-secondary">
                      <i className="fas fa-arrow-left"></i> Volver
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NuevoCliente;
