import React, { useEffect, useState } from "react";
import "../style.css";
import "../panel.css";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

  // Inicializar datos simulados en localStorage
  useEffect(() => {
    const storedClientes = localStorage.getItem("clientes");
    const storedVehiculos = localStorage.getItem("vehiculos");

    if (!storedClientes || !storedVehiculos) {
      const clientesDemo = [
        { id: 1, nombre: "Juan Pérez", telefono: "987654321", correo: "juan.perez@example.com" },
        { id: 2, nombre: "María Gómez", telefono: "954123678", correo: "maria.gomez@example.com" },
      ];
      const vehiculosDemo = [
        { placa: "ABC-123", modelo: "Toyota Corolla", anio: 2019, clienteId: 1 },
        { placa: "XYZ-987", modelo: "Hyundai Tucson", anio: 2022, clienteId: 2 },
      ];
      localStorage.setItem("clientes", JSON.stringify(clientesDemo));
      localStorage.setItem("vehiculos", JSON.stringify(vehiculosDemo));
    }

    setClientes(JSON.parse(localStorage.getItem("clientes") || "[]"));
    setVehiculos(JSON.parse(localStorage.getItem("vehiculos") || "[]"));
  }, []);

  // Eliminar cliente y sus vehículos
  const eliminarCliente = (id) => {
    if (confirm("¿Eliminar cliente?")) {
      const nuevosClientes = clientes.filter((c) => c.id !== id);
      const nuevosVehiculos = vehiculos.filter((v) => v.clienteId !== id);
      setClientes(nuevosClientes);
      setVehiculos(nuevosVehiculos);
      localStorage.setItem("clientes", JSON.stringify(nuevosClientes));
      localStorage.setItem("vehiculos", JSON.stringify(nuevosVehiculos));
    }
  };

  // Eliminar vehículo
  const eliminarVehiculo = (placa) => {
    if (confirm("¿Eliminar vehículo?")) {
      const nuevosVehiculos = vehiculos.filter((v) => v.placa !== placa);
      setVehiculos(nuevosVehiculos);
      localStorage.setItem("vehiculos", JSON.stringify(nuevosVehiculos));
    }
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

        {/* CONTENIDO */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Clientes & Vehículos</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Gestión de clientes y sus vehículos</li>
              </ol>

              <div className="d-flex justify-content-end mb-3">
                <a href="/admin/nuevo-cliente" className="btn btn-primary">
                  <i className="fas fa-plus-circle me-2"></i>Agregar Cliente
                </a>
              </div>

              {/* TABS */}
              <ul className="nav nav-tabs mb-4" id="clientesTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="lista-clientes-tab" data-bs-toggle="tab"
                    data-bs-target="#lista-clientes" type="button" role="tab">
                    Lista de Clientes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="vehiculos-tab" data-bs-toggle="tab"
                    data-bs-target="#vehiculos" type="button" role="tab">
                    Vehículos
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="clientesTabsContent">
                {/* TAB CLIENTES */}
                <div className="tab-pane fade show active" id="lista-clientes" role="tabpanel">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-users me-1"></i> Clientes Registrados
                    </div>
                    <div className="card-body">
                      <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                          <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientes.map((c) => (
                            <tr key={c.id}>
                              <td>{c.id}</td>
                              <td>{c.nombre}</td>
                              <td>{c.telefono}</td>
                              <td>{c.correo}</td>
                              <td>
                                <button className="btn btn-sm btn-warning me-2">
                                  <i className="fas fa-edit"></i>
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={() => eliminarCliente(c.id)}>
                                  <i className="fas fa-trash-alt"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* TAB VEHÍCULOS */}
                <div className="tab-pane fade" id="vehiculos" role="tabpanel">
                  <div className="card mb-4">
                    <div className="card-header bg-secondary text-white">
                      <i className="fas fa-car-side me-1"></i> Vehículos Registrados
                    </div>
                    <div className="card-body">
                      <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                          <tr>
                            <th>Placa</th>
                            <th>Modelo</th>
                            <th>Año</th>
                            <th>Cliente Asociado</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vehiculos.map((v) => {
                            const cliente = clientes.find((c) => c.id === v.clienteId);
                            return (
                              <tr key={v.placa}>
                                <td>{v.placa}</td>
                                <td>{v.modelo}</td>
                                <td>{v.anio}</td>
                                <td>{cliente ? cliente.nombre : "—"}</td>
                                <td>
                                  <button className="btn btn-sm btn-warning me-2">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button className="btn btn-sm btn-danger" onClick={() => eliminarVehiculo(v.placa)}>
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
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
                <div className="text-muted">Dream Cars © Taller Mecánico 2025</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
