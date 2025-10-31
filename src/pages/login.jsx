import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => setIsRegister(!isRegister);

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔹 Datos simulados por ahora
    const adminUser = { email: "admin@dreamcars.com", password: "admin123" };
    const clientUser = { email: "cliente@dreamcars.com", password: "cliente123" };

    if (email === adminUser.email && password === adminUser.password) {
      navigate("/admin"); // 👈 Va al dashboard
    } else if (email === clientUser.email && password === clientUser.password) {
      navigate("/"); // 👈 Va al home del cliente
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div
      id="bodyBackground"
      className={`login-background ${
        isRegister ? "register-bg" : "login-bg"
      } d-flex align-items-center justify-content-center`}
    >
      <div
        className={`card-container ${isRegister ? "register-mode" : "login-mode"}`}
      >
        {/* 🔙 Flecha */}
        <a href="/" className="back-arrow">
          &#8592;
        </a>

        {/* Login */}
        <div className="form-container form-login">
          <img
            src="assets/img/logos/logodr.png"
            alt="Dream Cars"
            className="logo-img"
          />
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary text-uppercase">
              Ingresar
            </button>
          </form>
          <p className="mt-3 text-center">
            ¿No tienes cuenta?{" "}
            <a href="#" onClick={toggleMode}>
              Regístrate
            </a>
          </p>
        </div>

        {/* Registro */}
        <div className="form-container form-register">
          <img
            src="assets/img/logos/logodr.png"
            alt="Dream Cars"
            className="logo-img"
          />
          <h2>Crear Cuenta</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre completo"
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required
            />
            <button type="submit" className="btn btn-success text-uppercase">
              Registrarme
            </button>
          </form>
          <p className="mt-3 text-center">
            ¿Ya tienes cuenta?{" "}
            <a href="#" onClick={toggleMode}>
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
