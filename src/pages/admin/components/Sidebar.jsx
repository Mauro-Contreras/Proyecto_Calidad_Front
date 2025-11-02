import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  useEffect(() => {
    const toggleButton = document.getElementById("sidebarToggle");
    const body = document.body;
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        body.classList.toggle("sb-sidenav-toggled");
      });
    }
  }, []);

  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            {/* DASHBOARD */}
            <Link className="nav-link" to="/admin">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>

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

            {/* EMPLEADOS */}
            <Link className="nav-link" to="/admin/empleados">
              <div className="sb-nav-link-icon">
                <i className="fas fa-user-cog"></i>
              </div>
              Empleados
            </Link>

            {/* FACTURACIÓN */}
            <a className="nav-link" href="/admin/facturacion">
              <div className="sb-nav-link-icon">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              Facturación
            </a>

            {/* INVENTARIO */}
            <a className="nav-link" href="/admin/inventario">
              <div className="sb-nav-link-icon">
                <i className="fas fa-boxes"></i>
              </div>
              Inventario
            </a>

            {/* REPORTES */}
            <Link className="nav-link" to="/admin/reportes">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              Reportes
            </Link>

            {/* CONFIGURACIÓN */}
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
  );
};

export default Sidebar;
