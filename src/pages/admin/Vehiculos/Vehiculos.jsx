import React, { useEffect } from "react";
import "../style.css";
import "../panel.css";

const Vehiculos = () => {
  useEffect(() => {
    // Simula la inicialización de la tabla (como simple-datatables)
    console.log("Tabla de vehículos cargada (simulación)");
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

      <div id="layoutSidenav">
        {/* Menú lateral */}
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <a className="nav-link" href="/admin/Inicio/Index">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>

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
                    <a className="nav-link" href="/admin/Servicios/Servicios">
                      Lista de Servicios
                    </a>
                    <a
                      className="nav-link"
                      href="/admin/Servicios/NuevoServicio"
                    >
                      Agregar Servicio
                    </a>
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
                    <a
                      className="nav-link"
                      href="/admin/Ordenes/OrdenesTrabajo"
                    >
                      Administrar Órdenes
                    </a>
                    <a className="nav-link" href="/admin/Ordenes/NuevaOrden">
                      Nueva Orden
                    </a>
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
                    <a className="nav-link" href="/admin/Clientes/Clientes">
                      Lista de Clientes
                    </a>
                    <a className="nav-link" href="/admin/Clientes/NuevoCliente">
                      Agregar Cliente
                    </a>
                    <a className="nav-link" href="/admin/Vehiculos/Vehiculos">
                      Vehículos
                    </a>
                    <a
                      className="nav-link"
                      href="/admin/Vehiculos/NuevoVehiculo"
                    >
                      Agregar Vehículo
                    </a>
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
                    <a className="nav-link" href="/admin/Empleados/Empleados">
                      Lista de Empleados
                    </a>
                    <a
                      className="nav-link"
                      href="/admin/Empleados/NuevoEmpleado"
                    >
                      Agregar Empleado
                    </a>
                  </nav>
                </div>

                <a className="nav-link" href="/admin/Reportes/Reportes">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  Reportes
                </a>

                <a className="nav-link" href="/admin/Configuracion/Configuracion">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  Configuración
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Contenido Principal */}
        <div id="layoutSidenav_content">
          <main className="container-fluid px-4 mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="mt-4">Lista de Vehículos</h1>
              <a
                href="/admin/Vehiculos/NuevoVehiculo"
                className="btn btn-primary"
              >
                <i className="fas fa-plus"></i> Agregar Nuevo Vehículo
              </a>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <i className="fas fa-car me-1"></i>
                Vehículos Registrados
              </div>
              <div className="card-body">
                <table
                  id="datatablesSimple"
                  className="table table-striped align-middle"
                >
                  <thead>
                    <tr>
                      <th>Placa</th>
                      <th>Marca</th>
                      <th>Modelo</th>
                      <th>Año</th>
                      <th>Cliente Asociado</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ABC-123</td>
                      <td>Toyota</td>
                      <td>Corolla</td>
                      <td>2020</td>
                      <td>Juan Pérez</td>
                      <td>
                        <span className="badge bg-success">Activo</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-warning me-2">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-danger">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>XYZ-987</td>
                      <td>Hyundai</td>
                      <td>Accent</td>
                      <td>2018</td>
                      <td>Carlos Ramos</td>
                      <td>
                        <span className="badge bg-secondary">Inactivo</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-warning me-2">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-danger">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Vehiculos;
