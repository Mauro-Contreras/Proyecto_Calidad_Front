import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "../panel.css";

const Inventario = () => {
  // Estado inicial del inventario
  const [inventario, setInventario] = useState([
    { repuesto: "Filtro de Aceite", stock: 3 },
    { repuesto: "Pastillas de Freno", stock: 12 },
    { repuesto: "Bujías", stock: 7 },
  ]);

  const [repuestoSeleccionado, setRepuestoSeleccionado] = useState("Filtro de Aceite");
  const [cantidad, setCantidad] = useState(1);
  const [tipo, setTipo] = useState("entrada");

  // Función para obtener el estado visual del stock
  const getEstado = (stock) => {
    if (stock <= 3) return { texto: "Bajo", clase: "bg-danger" };
    if (stock <= 7) return { texto: "Medio", clase: "bg-warning" };
    return { texto: "Óptimo", clase: "bg-success" };
  };

  // Función para registrar movimiento
  const registrarMovimiento = () => {
    setInventario((prevInventario) =>
      prevInventario.map((item) => {
        if (item.repuesto === repuestoSeleccionado) {
          let nuevoStock =
            tipo === "entrada"
              ? item.stock + parseInt(cantidad)
              : Math.max(item.stock - parseInt(cantidad), 0);
          return { ...item, stock: nuevoStock };
        }
        return item;
      })
    );
    alert("✅ Movimiento registrado correctamente (simulación).");
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

      {/* LAYOUT GENERAL */}
      <div id="layoutSidenav">
        {/* MENU LATERAL */}
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
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
                    <Link className="nav-link" to="/admin/empleados">
                      Lista de Empleados
                    </Link>
                    <Link className="nav-link" to="/admin/nuevo-empleado">
                      Agregar Empleado
                    </Link>
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
              <h1 className="mt-4">Inventario de Repuestos</h1>
              <p className="text-muted">Control de stock en tiempo real</p>

              {/* Tabla de inventario */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-primary text-white fw-bold">
                  <i className="fas fa-boxes-stacked me-2"></i>Stock Actual
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Repuesto</th>
                        <th>Stock</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventario.map((item, index) => {
                        const estado = getEstado(item.stock);
                        return (
                          <tr key={index}>
                            <td>{item.repuesto}</td>
                            <td>{item.stock}</td>
                            <td>
                              <span className={`badge ${estado.clase}`}>
                                {estado.texto}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Registrar movimiento */}
              <div className="card shadow-sm">
                <div className="card-header bg-secondary text-white fw-bold">
                  <i className="fas fa-exchange-alt me-2"></i>Registrar Movimiento
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Repuesto</label>
                      <select
                        className="form-select"
                        value={repuestoSeleccionado}
                        onChange={(e) => setRepuestoSeleccionado(e.target.value)}
                      >
                        {inventario.map((item, i) => (
                          <option key={i}>{item.repuesto}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-bold">Cantidad</label>
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-bold">Tipo</label>
                      <select
                        className="form-select"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                      >
                        <option value="entrada">Entrada (+)</option>
                        <option value="salida">Salida (-)</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-primary"
                      onClick={registrarMovimiento}
                    >
                      <i className="fas fa-check me-1"></i>Registrar
                    </button>
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

export default Inventario;
