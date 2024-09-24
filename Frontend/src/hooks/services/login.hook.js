import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

export const loginHook = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(username, password);
      if (user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
    togglePasswordVisibility,
  }
}
