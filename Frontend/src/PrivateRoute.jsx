import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from './services/auth-service';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const currentUser = AuthService.getCurrentUser();

  /*try {
    currentUser = AuthService.getCurrentUser();
  } catch (error) {
    console.error("Error getting current user:", error);
    //return <Navigate to="/" />;
  }*/

  if (!currentUser) {
    // Si no hay usuario, redirige al login
    return <Navigate to="/" />;
  }

  if (roles && roles.includes(currentUser.roles[0])) {
    // Si el usuario no tiene el rol adecuado, redirige a una página de no autorizado
    return <Navigate to="/unauthorized" />;
  }

  // Si el usuario tiene el rol adecuado, renderiza el componente
  return <Component {...rest} />;
};

export default PrivateRoute;