import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "./services/authService";

// MIDDLEWARE PARA PROTEGER RUTAS
const ProtectedRoute = ({ roles }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // SI EL USUARIO NO ESTÁ AUTENTICADO LO REDIRIGE AL LOGIN
  if (!user) {
    return <Navigate to="/" />;
  }

  // SI EL USUARIO NO TIENE PERMISOS PARA ACCEDER A LA RUTA LO REDIRIGE A UNA PÁGINA DE ERROR
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;