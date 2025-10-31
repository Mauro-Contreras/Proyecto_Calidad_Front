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

function App() {
  const isAuthenticated = true; // cambia esto según tu lógica de login

  return (
    <BrowserRouter>
      <Routes>
        {/* Parte pública */}
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/admin" /> : <Login />}
        />

        {/* Panel de administrador */}
        {isAuthenticated && (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
