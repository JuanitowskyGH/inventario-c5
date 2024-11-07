import { useState } from "react";
import authService from "../../services/authService";

export const loginHook = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // LLAMADA AL SERVICIO DE AUTENTICACION DEL BACKEND
      const user = await authService.login(username, password);
      if (user && user.message === "Usuario autenticado") {
        window.location.href = "/dashboard";
      } else {
        setError(user.message);
      }
    } catch (error) {
      setError("Error al iniciar sesión");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    username,
    password,
    error,
    setUsername,
    setPassword,
    handleLogin,
    togglePasswordVisibility,
  };
};