import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <img
          src="/404.jpg"
          alt="404 Not Found"
          className="mx-auto mb-8 w-64 h-64 object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-blue-tlax text-white rounded hover:bg-blue-tlax-light transition duration-300"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};