import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../src/services/authService';

const ProtectedRoute = ({ roles }) => {
  const user = authService.getCurrentUser();

  useEffect(() => {
    if (!user) {
      localStorage.setItem('showAlert', 'true');
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;