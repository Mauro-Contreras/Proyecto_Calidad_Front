import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Páginas principales (cliente y login)
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

// Importar estilos generales del panel
import "./pages/admin/style.css";
import "./pages/admin/panel.css";

// Componente temporal del Cliente
function ClienteDashboard() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Bienvenido Cliente 👋</h1>
      <p>Esta es la vista del cliente. Pronto estará conectada al backend.</p>
    </div>
  );
}

function App() {
  // Estado global del usuario actual (rol)
  const [userRole, setUserRole] = useState(null); // null | "admin" | "cliente"

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

        {/* Panel de ADMIN */}
        {userRole === "admin" && (
          <>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/clientes" element={<Clientes />} />
            <Route path="/admin/nuevo-cliente" element={<NuevoCliente />} />
            <Route path="/admin/configuracion" element={<Configuracion />} />
            <Route path="/admin/empleados" element={<Empleados />} />
            <Route path="/admin/nuevo-empleado" element={<NuevoEmpleado />} />
            <Route path="/admin/ordenes-trabajo" element={<OrdenesTrabajo />} />
            <Route path="/admin/orden-nueva" element={<OrdenNueva />} />
            <Route path="/admin/reportes" element={<Reportes />} />
            <Route path="/admin/servicios" element={<Servicios />} />
            <Route path="/admin/nuevo-servicio" element={<NuevoServicio />} />
            <Route path="/admin/vehiculos" element={<Vehiculos />} />
            <Route path="/admin/nuevo-vehiculo" element={<NuevoVehiculo />} />
          </>
        )}

        {/* Panel de CLIENTE */}
        {userRole === "cliente" && (
          <Route path="/cliente" element={<ClienteDashboard />} />
        )}

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
