import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🧹 Borrar los datos de sesión guardados
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // 🔄 Redirigir al login
    navigate("/login");
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="/">
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

            {/* 🔹 Botón funcional de cierre de sesión */}
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw me-2"></i>
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
