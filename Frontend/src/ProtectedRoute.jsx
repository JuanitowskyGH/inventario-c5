import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../src/services/authService';

const ProtectedRoute = ({ roles }) => {
  const user = authService.getCurrentUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;