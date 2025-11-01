import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../panel.css";

const Configuracion = () => {
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
        {/* BARRA LATERAL */}
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <a className="nav-link" href="/index">
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Dashboard
                </a>

                {/* SERVICIOS */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseServicios">
                  <div className="sb-nav-link-icon"><i className="fas fa-tools"></i></div>
                  Servicios
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseServicios" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/servicios">Lista de Servicios</a>
                    <a className="nav-link" href="/nuevo-servicio">Agregar Servicio</a>
                  </nav>
                </div>

                {/* ORDENES */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrdenes">
                  <div className="sb-nav-link-icon"><i className="fas fa-file-invoice"></i></div>
                  Órdenes de Trabajo
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseOrdenes" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/ordenes-trabajo">Administrar Ordenes</a>
                    <a className="nav-link" href="/orden-nueva">Nueva Orden</a>
                  </nav>
                </div>

                {/* CLIENTES */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseClientes">
                  <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                  Clientes
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseClientes" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/clientes">Lista de Clientes</a>
                    <a className="nav-link" href="/nuevo-cliente">Agregar Cliente</a>
                    <a className="nav-link" href="/vehiculos">Vehículos</a>
                    <a className="nav-link" href="/nuevo-vehiculo">Agregar Vehículo</a>
                  </nav>
                </div>

                {/* EMPLEADOS */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseEmpleados">
                  <div className="sb-nav-link-icon"><i className="fas fa-user-cog"></i></div>
                  Empleados
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseEmpleados" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/empleados">Lista de Empleados</a>
                    <a className="nav-link" href="/nuevo-empleado">Agregar Empleado</a>
                  </nav>
                </div>

                <a className="nav-link" href="/reportes">
                  <div className="sb-nav-link-icon"><i className="fas fa-chart-line"></i></div>
                  Reportes
                </a>

                <a className="nav-link active" href="/admin/configuracion">
                  <div className="sb-nav-link-icon"><i className="fas fa-cog"></i></div>
                  Configuración
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Configuraciones</h1>
              <p className="mb-4 text-muted">
                Ajustes generales del sistema y preferencias del usuario.
              </p>

              {/* AJUSTES GENERALES */}
              <section className="card p-4 mb-4">
                <h2>Ajustes Generales</h2>
                <form className="ajustes-form">
                  <div className="form-group">
                    <label>Nombre del Taller:</label>
                    <input type="text" placeholder="Taller DREAM CARS" />
                  </div>
                  <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="text" placeholder="+51 999 999 999" />
                  </div>
                  <div className="form-group">
                    <label>Correo Electrónico:</label>
                    <input type="email" placeholder="contacto@dreamcars.pe" />
                  </div>
                  <div className="form-group">
                    <label>Moneda Predeterminada:</label>
                    <select>
                      <option value="PEN">Soles (S/)</option>
                      <option value="USD">Dólares ($)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Logo del Taller:</label>
                    <input type="file" />
                  </div>
                  <button type="submit" className="btn-guardar">
                    Guardar Cambios
                  </button>
                </form>
              </section>

              {/* GESTIÓN DE USUARIOS */}
              <section className="card p-4 mb-4">
                <h2>Gestión de Usuarios</h2>
                <table className="tabla-usuarios">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Juan Pérez</td>
                      <td>juan@dreamcars.pe</td>
                      <td>Administrador</td>
                      <td>Activo</td>
                      <td>
                        <button className="btn-editar">Editar</button>
                        <button className="btn-eliminar">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>María Gómez</td>
                      <td>maria@dreamcars.pe</td>
                      <td>Recepcionista</td>
                      <td>Activo</td>
                      <td>
                        <button className="btn-editar">Editar</button>
                        <button className="btn-eliminar">Eliminar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn-agregar">+ Agregar Usuario</button>
              </section>

              {/* PREFERENCIAS */}
              <section className="card p-4">
                <h2>Preferencias del Sistema</h2>
                <div className="preferencias">
                  <div>
                    <label>Tema del Sistema:</label>
                    <select>
                      <option>Claro</option>
                      <option>Oscuro</option>
                    </select>
                  </div>
                  <div>
                    <label>Idioma:</label>
                    <select>
                      <option>Español</option>
                      <option>Inglés</option>
                    </select>
                  </div>
                  <div>
                    <label>Notificaciones:</label>
                    <input type="checkbox" defaultChecked /> Activar
                  </div>
                </div>
                <button className="btn-guardar">Guardar Preferencias</button>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
