import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from "./authService";

// SERVICIO PARA OBTENER EL ROL DE LA COOKIE PARA CADA COMPONENTE 
export const authRole = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    };

    fetchUser();
  }, [navigate]);

  return { user };
};