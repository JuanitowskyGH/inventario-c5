import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../src/services/authService";

//MIDDLEWARE PARA PROTEGER RUTAS
const ProtectedRoute = ({ roles }) => {
  const user = authService.getCurrentUser();

  useEffect(() => {
    if (!user) {
      localStorage.setItem("showAlert", "true");
    }
  }, [user]);

//SI EL USUARIO NO ESTÁ AUTENTICADO LO REDIRIGE AL LOGIN
  if (!user) {
    return <Navigate to="/" />;
  }
  
//SI EL USUARIO NO TIENE PERMISOS PARA ACCEDER A LA RUTA LO REDIRIGE A UNA PÁGINA DE ERROR
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
