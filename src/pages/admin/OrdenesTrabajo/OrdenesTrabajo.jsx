import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "../panel.css";

const OrdenesTrabajo = () => {
  useEffect(() => {
    // Activar el sidebar toggle
    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
      });
    }
  }, []);

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

      {/* LAYOUT PRINCIPAL */}
      <div id="layoutSidenav">
        {/* SIDEBAR */}
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <Link className="nav-link" to="/admin/index">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </Link>

                {/* SERVICIOS */}
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

                {/* ORDENES */}
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
                <div
                  className="collapse show"
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

                {/* CLIENTES */}
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

                {/* EMPLEADOS */}
                <a
                  className="nav-link collapsed"
                  href="#!"
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

        {/* CONTENIDO PRINCIPAL */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Órdenes de Trabajo</h1>
              <p className="mb-4 text-muted">
                Administra las órdenes según su estado actual.
              </p>

              <div className="d-flex justify-content-end mb-3">
                <Link to="/admin/nueva-orden" className="btn btn-success">
                  <i className="fas fa-plus-circle me-2"></i>Agregar Nueva Orden
                </Link>
              </div>

              {/* TABS */}
              <ul className="nav nav-tabs mb-4" id="ordenesTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pendientes-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pendientes"
                    type="button"
                    role="tab"
                  >
                    Pendientes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="proceso-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#proceso"
                    type="button"
                    role="tab"
                  >
                    En Proceso
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="finalizadas-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#finalizadas"
                    type="button"
                    role="tab"
                  >
                    Finalizadas
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="ordenesTabsContent">
                {/* TAB PENDIENTES */}
                <div
                  className="tab-pane fade show active"
                  id="pendientes"
                  role="tabpanel"
                >
                  <div className="card mb-4">
                    <div className="card-header bg-warning fw-bold">
                      <i className="fas fa-clock me-2"></i>Órdenes Pendientes
                    </div>
                    <div className="card-body">
                      <table className="table table-striped table-bordered align-middle">
                        <thead className="table-dark">
                          <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Vehículo</th>
                            <th>Servicio</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>001</td>
                            <td>Juan Pérez</td>
                            <td>Toyota Corolla</td>
                            <td>Cambio de Aceite</td>
                            <td>15/10/2025</td>
                            <td>
                              <button className="btn btn-sm btn-success me-2">
                                <i className="fas fa-play"></i>
                              </button>
                              <button className="btn btn-sm btn-danger">
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* TAB EN PROCESO */}
                <div className="tab-pane fade" id="proceso" role="tabpanel">
                  <div className="card mb-4">
                    <div className="card-header bg-info fw-bold">
                      <i className="fas fa-cogs me-2"></i>Órdenes en Proceso
                    </div>
                    <div className="card-body">
                      <table className="table table-striped table-bordered align-middle">
                        <thead className="table-dark">
                          <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Vehículo</th>
                            <th>Servicio</th>
                            <th>Progreso</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>002</td>
                            <td>María López</td>
                            <td>Honda Civic</td>
                            <td>Revisión de Frenos</td>
                            <td>60%</td>
                            <td>
                              <button className="btn btn-sm btn-primary me-2">
                                <i className="fas fa-check"></i>
                              </button>
                              <button className="btn btn-sm btn-danger">
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* TAB FINALIZADAS */}
                <div className="tab-pane fade" id="finalizadas" role="tabpanel">
                  <div className="card mb-4">
                    <div className="card-header bg-success text-white fw-bold">
                      <i className="fas fa-check-circle me-2"></i>Órdenes Finalizadas
                    </div>
                    <div className="card-body">
                      <table className="table table-striped table-bordered align-middle">
                        <thead className="table-dark">
                          <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Vehículo</th>
                            <th>Servicio</th>
                            <th>Fecha Finalización</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>003</td>
                            <td>Pedro Ramírez</td>
                            <td>Nissan Sentra</td>
                            <td>Alineación</td>
                            <td>14/10/2025</td>
                            <td>
                              <button className="btn btn-sm btn-secondary">
                                <i className="fas fa-eye"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Dream Cars © Taller Mecánico 2025
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OrdenesTrabajo;
