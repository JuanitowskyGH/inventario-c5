import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

// HOOK PARA INICIAR SESION
export const loginHook = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // LLAMADA AL SERVICIO DE AUTENTICACION DEL BACKEND
      const user = await authService.login(username, password);
      if (user && user.message === "Usuario autenticado") {
        navigate("/dashboard");
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