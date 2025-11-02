import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Páginas principales
import Home from "./pages/home";
import Login from "./pages/login";

// ADMIN — importando desde tus carpetas reales
import Dashboard from "./pages/admin/Inicio/index";
import Clientes from "./pages/admin/Clientes/Clientes";
import NuevoCliente from "./pages/admin/Clientes/NuevoCliente";
import Configuracion from "./pages/admin/Configuracion/Configuracion";
import Empleados from "./pages/admin/Empleados/Empleados";
import NuevoEmpleado from "./pages/admin/Empleados/NuevoEmpleado";
import OrdenesTrabajo from "./pages/admin/OrdenesTrabajo/OrdenesTrabajo";
import OrdenNueva from "./pages/admin/OrdenesTrabajo/OrdenNueva";
import Reportes from "./pages/admin/Reportes/Reportes";
import Servicios from "./pages/admin/Servicios/Servicios";
import NuevoServicio from "./pages/admin/Servicios/NuevoServicio";
import Vehiculos from "./pages/admin/Vehiculos/Vehiculos";
import NuevoVehiculo from "./pages/admin/Vehiculos/NuevoVehiculo";
import Facturacion from "./pages/admin/Facturacion/facturacion";
import Inventario from "./pages/admin/Inventario/Inventario";



// Importar estilos generales del panel
import "./pages/admin/style.css";
import "./pages/admin/panel.css";

// --- Componente temporal del Cliente ---
function ClienteDashboard({ onLogout }) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Bienvenido Cliente 👋</h1>
      <p>Esta es la vista del cliente. Pronto estará conectada al backend.</p>
      <button
        onClick={onLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#e74c3c",
          color: "white",
          cursor: "pointer",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

// --- Rutas protegidas ---
function AdminRoute({ userRole, element }) {
  return userRole === "admin" ? element : <Navigate to="/login" />;
}

function ClienteRoute({ userRole, element }) {
  return userRole === "cliente" ? element : <Navigate to="/login" />;
}

// --- App principal ---
function App() {
  // Estado global del usuario actual (rol)
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem("userRole") || null;
  });

  // Guardar/eliminar el rol en localStorage cuando cambie
  useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [userRole]);

  // Cierre de sesión global
  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem("userRole");
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Página pública */}
        <Route path="/" element={<Home />} />

        {/* Página de login */}
        <Route
          path="/login"
          element={
            userRole === "admin" ? (
              <Navigate to="/admin" />
            ) : userRole === "cliente" ? (
              <Navigate to="/cliente" />
            ) : (
              <Login setUserRole={setUserRole} />
            )
          }
        />

        {/* --- Panel ADMIN --- */}
        <Route
          path="/admin"
          element={<AdminRoute userRole={userRole} element={<Dashboard />} />}
        />
        <Route
          path="/admin/clientes"
          element={<AdminRoute userRole={userRole} element={<Clientes />} />}
        />
        <Route
          path="/admin/nuevo-cliente"
          element={<AdminRoute userRole={userRole} element={<NuevoCliente />} />}
        />
        <Route
          path="/admin/configuracion"
          element={<AdminRoute userRole={userRole} element={<Configuracion />} />}
        />
        <Route
          path="/admin/empleados"
          element={<AdminRoute userRole={userRole} element={<Empleados />} />}
        />
        <Route
          path="/admin/nuevo-empleado"
          element={<AdminRoute userRole={userRole} element={<NuevoEmpleado />} />}
        />
        <Route
          path="/admin/ordenes-trabajo"
          element={<AdminRoute userRole={userRole} element={<OrdenesTrabajo />} />}
        />
        <Route
          path="/admin/orden-nueva"
          element={<AdminRoute userRole={userRole} element={<OrdenNueva />} />}
        />
        <Route
          path="/admin/reportes"
          element={<AdminRoute userRole={userRole} element={<Reportes />} />}
        />
        <Route
          path="/admin/servicios"
          element={<AdminRoute userRole={userRole} element={<Servicios />} />}
        />
        <Route
          path="/admin/nuevo-servicio"
          element={<AdminRoute userRole={userRole} element={<NuevoServicio />} />}
        />
        <Route
          path="/admin/vehiculos"
          element={<AdminRoute userRole={userRole} element={<Vehiculos />} />}
        />
        <Route
          path="/admin/nuevo-vehiculo"
          element={<AdminRoute userRole={userRole} element={<NuevoVehiculo />} />}
        />
        <Route 
          path="/pages/login" element={<Login />} />

        <Route 
          path="/admin/facturacion" element={<Facturacion />} 
        />

        <Route 
          path="/admin/inventario"element={<Inventario />} 
        />
        
        {/* --- Panel CLIENTE --- */}
        <Route
          path="/cliente"
          element={
            <ClienteRoute
              userRole={userRole}
              element={<ClienteDashboard onLogout={handleLogout} />}
            />
          }
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
