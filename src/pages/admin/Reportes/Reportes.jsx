import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import "../style.css";
import "../panel.css";

Chart.register(...registerables);

const Reportes = () => {
  useEffect(() => {
  let chartServiciosMes = null;
  let chartTiposServicios = null;

  const ctx1 = document.getElementById("graficoServiciosMes");
  const ctx2 = document.getElementById("graficoTiposServicios");

  // 🔹 Gráfico de barras
  if (ctx1) {
    if (Chart.getChart(ctx1)) {
      Chart.getChart(ctx1).destroy();
    }

    chartServiciosMes = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
        datasets: [
          {
            label: "Servicios realizados",
            data: [20, 25, 18, 30, 22, 28],
            backgroundColor: "#007bff",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
      },
    });
  }

  // 🔹 Gráfico circular
  if (ctx2) {
    if (Chart.getChart(ctx2)) {
      Chart.getChart(ctx2).destroy();
    }

    chartTiposServicios = new Chart(ctx2, {
      type: "pie",
      data: {
        labels: ["Mecánica", "Eléctrica", "Limpieza", "Otros"],
        datasets: [
          {
            data: [40, 25, 20, 15],
            backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } },
      },
    });
  }

  // 🔹 Limpiar los gráficos al desmontar el componente
  return () => {
    if (chartServiciosMes) chartServiciosMes.destroy();
    if (chartTiposServicios) chartTiposServicios.destroy();
  };
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
        {/* Barra Lateral */}
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
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
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  Servicios
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div className="collapse" id="collapseServicios" data-bs-parent="#sidenavAccordion">
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
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  Órdenes de Trabajo
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div className="collapse" id="collapseOrdenes" data-bs-parent="#sidenavAccordion">
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
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  Clientes
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div className="collapse" id="collapseClientes" data-bs-parent="#sidenavAccordion">
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
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-user-cog"></i>
                  </div>
                  Empleados
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div className="collapse" id="collapseEmpleados" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/admin/empleados">
                      Lista de Empleados
                    </a>
                    <a className="nav-link" href="/admin/nuevo-empleado">
                      Agregar Empleado
                    </a>
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

                {/* REPORTES */}
                <a className="nav-link active" href="/admin/reportes">
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
          <main className="container-fluid px-4 mt-4">
            <h1 className="mb-3">Reportes del Taller</h1>
            <p className="text-muted">
              Visualiza los resultados y estadísticas del taller en tiempo real.
            </p>

            {/* FILTROS */}
            <div className="report-filter mb-4">
              <label>Desde:</label>
              <input type="date" id="fechaInicio" />
              <label>Hasta:</label>
              <input type="date" id="fechaFin" />
              <button className="btn btn-primary">
                <i className="fas fa-filter"></i> Filtrar
              </button>
              <button className="btn btn-success">
                <i className="fas fa-file-export"></i> Exportar
              </button>
            </div>

            {/* TARJETAS DE INDICADORES */}
            <div className="row mb-4">
              {[
                ["Órdenes Completadas", "128"],
                ["Servicios Realizados", "245"],
                ["Ingresos (S/)", "12,540"],
                ["Clientes Nuevos", "18"],
              ].map(([titulo, valor], i) => (
                <div className="col-md-3" key={i}>
                  <div className="card report-card">
                    <div className="card-body">
                      <h5>{titulo}</h5>
                      <h2>{valor}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GRÁFICOS */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <i className="fas fa-chart-bar me-1"></i> Servicios por Mes
                  </div>
                  <div className="card-body">
                    <canvas id="graficoServiciosMes"></canvas>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <i className="fas fa-chart-pie me-1"></i> Tipos de Servicios
                  </div>
                  <div className="card-body">
                    <canvas id="graficoTiposServicios"></canvas>
                  </div>
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

export default Reportes;
