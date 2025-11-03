import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "../panel.css";

const NuevoVehiculo = () => {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    placa: "",
    modelo: "",
    anio: "",
    clienteId: "",
  });

  useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem("clientes")) || [];
    setClientes(storedClientes);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { placa, modelo, anio, clienteId } = formData;

    if (!placa || !modelo || !anio || !clienteId) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const vehiculos = JSON.parse(localStorage.getItem("vehiculos")) || [];
    vehiculos.push({
      placa,
      modelo,
      anio: parseInt(anio),
      clienteId: parseInt(clienteId),
    });
    localStorage.setItem("vehiculos", JSON.stringify(vehiculos));

    alert("Vehículo registrado correctamente.");
    window.location.href = "/admin/Clientes/Clientes"; // redirige a la lista de clientes
  };

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
        {/* BARRA LATERAL */}
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
                  className="collapse show"
                  id="collapseServicios"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link active" href="/admin/servicios">
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

        
        {/* Contenido Principal */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4 mb-4">Registrar Nuevo Vehículo</h1>

              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <i className="fas fa-car-side me-1"></i>
                  Datos del Vehículo
                </div>
                <div className="card-body">
                  <form id="formVehiculo" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="placa" className="form-label">
                          Placa
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="placa"
                          placeholder="Ej: ABC-123"
                          value={formData.placa}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="modelo" className="form-label">
                          Modelo
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="modelo"
                          placeholder="Ej: Toyota Corolla"
                          value={formData.modelo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="anio" className="form-label">
                          Año
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="anio"
                          placeholder="Ej: 2020"
                          value={formData.anio}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cliente" className="form-label">
                          Cliente Asociado
                        </label>
                        <select
                          className="form-select"
                          id="clienteId"
                          value={formData.clienteId}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccione un cliente...</option>
                          {clientes.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-success me-2">
                        <i className="fas fa-save me-1"></i> Registrar Vehículo
                      </button>
                      <a
                        href="/admin/vehiculos"
                        className="btn btn-secondary"
                      >
                        <i className="fas fa-arrow-left me-1"></i> Volver
                      </a>
                    </div>
                  </form>
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

export default NuevoVehiculo;
