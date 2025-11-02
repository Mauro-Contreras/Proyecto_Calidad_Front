import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Activar colapsables y el botón de menú lateral
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
            <Link className="nav-link" to="/">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
              Dashboard
            </Link>

            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseServicios">
              <div className="sb-nav-link-icon"><i className="fas fa-tools"></i></div>
              Servicios
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseServicios" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/servicios">Lista de Servicios</Link>
                <a className="nav-link" href="#">Agregar Servicio</a>
              </nav>
            </div>

            <Link className="nav-link" to="/empleados">
              <div className="sb-nav-link-icon"><i className="fas fa-user-cog"></i></div>
              Empleados
            </Link>

            <Link className="nav-link" to="/reportes">
              <div className="sb-nav-link-icon"><i className="fas fa-chart-line"></i></div>
              Reportes
            </Link>

            <Link className="nav-link" to="/configuracion">
              <div className="sb-nav-link-icon"><i className="fas fa-cog"></i></div>
              Configuración
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
