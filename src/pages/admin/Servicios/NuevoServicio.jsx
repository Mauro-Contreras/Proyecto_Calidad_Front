import React, { useEffect } from "react";
import "../style.css";
import "../panel.css";

const NuevoServicio = () => {
  useEffect(() => {
    // Simulación de validación de formulario (igual que el script original)
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            alert("✅ Servicio registrado correctamente (simulación).");
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div className="sb-nav-fixed">
      {/* Navbar superior */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="/admin">
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

      {/* Layout principal */}
      <div id="layoutSidenav">
        {/* Sidebar */}
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <a className="nav-link" href="/admin">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>

                {/* SERVICIOS */}
                <a
                  className="nav-link collapsed"
                  href="#"
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
                  href="#"
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
                  href="#"
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
                    <a className="nav-link" href="/admin/clientes">
                      Lista de Clientes
                    </a>
                    <a className="nav-link" href="/admin/nuevo-cliente">
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
                  href="#"
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

                <a className="nav-link" href="/admin/reportes">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  Reportes
                </a>

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

        {/* Contenido principal */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Agregar Nuevo Servicio</h1>
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <i className="fas fa-wrench me-2"></i>Datos del Servicio
                </div>
                <div className="card-body">
                  <form id="form-nuevo-servicio" className="needs-validation" noValidate>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Nombre del Servicio</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ej. Mantenimiento general"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor ingrese el nombre del servicio.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Categoría</label>
                        <select className="form-select" required>
                          <option value="">Seleccione una categoría</option>
                          <option>Mecánica General</option>
                          <option>Eléctrico</option>
                          <option>Frenos</option>
                          <option>Suspensión</option>
                          <option>Lubricación</option>
                        </select>
                        <div className="invalid-feedback">
                          Seleccione una categoría válida.
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Descripción</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe brevemente el servicio..."
                        required
                      ></textarea>
                      <div className="invalid-feedback">
                        Por favor ingrese una descripción.
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Precio (S/)</label>
                        <input
                          type="number"
                          step="0.01"
                          className="form-control"
                          placeholder="Ej. 150.00"
                          required
                        />
                        <div className="invalid-feedback">Ingrese un precio válido.</div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Duración Estimada</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ej. 45 minutos"
                          required
                        />
                        <div className="invalid-feedback">
                          Ingrese la duración estimada.
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <a href="/admin/servicios" className="btn btn-secondary me-2">
                        <i className="fas fa-arrow-left me-1"></i>Cancelar
                      </a>
                      <button type="submit" className="btn btn-primary">
                        <i className="fas fa-save me-1"></i>Guardar Servicio
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
};

export default NuevoServicio;
