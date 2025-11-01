import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "../panel.css";

function Empleados() {
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

      {/* Layout principal */}
      <div id="layoutSidenav">
        {/* Barra lateral */}
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
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
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseClientes"
                  aria-expanded="false"
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
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEmpleados"
                  aria-expanded="true"
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
                  className="collapse show"
                  id="collapseEmpleados"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link active" to="/admin/empleados">
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

        {/* Contenido principal */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Lista de Empleados</h1>
              <p className="mb-4 text-muted">
                Gestión y control del personal del taller mecánico.
              </p>

              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <span>
                    <i className="fas fa-users me-1"></i> Empleados Registrados
                  </span>
                  <Link to="/admin/nuevo-empleado" className="btn btn-primary btn-sm">
                    <i className="fas fa-user-plus"></i> Agregar Empleado
                  </Link>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>EMP001</td>
                        <td>Juan Pérez</td>
                        <td>Mecánico</td>
                        <td>987654321</td>
                        <td>juanperez@mail.com</td>
                        <td>
                          <button className="btn btn-warning btn-sm me-2">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn btn-danger btn-sm">
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>EMP002</td>
                        <td>María López</td>
                        <td>Recepcionista</td>
                        <td>912345678</td>
                        <td>marialopez@mail.com</td>
                        <td>
                          <button className="btn btn-warning btn-sm me-2">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn btn-danger btn-sm">
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Empleados;
