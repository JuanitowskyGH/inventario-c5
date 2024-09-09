import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import authService from "../services/authService";

export const Administracion = () => {
  const user = authService.getCurrentUser();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-2);
  };

  return (
    <div className="absolute w-full h-full">
      <div>
        <Menu role={user?.role} />
      </div>
      <div className="-bottom-56 min-h-screen">
        <div className="flex flex-col items-center pt-44">
          <div className="flex flex-col items-center px-28 py-10 bg-white ">
            <hr className="w-full h-1 mx-auto my-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <img
              src="/danger.png"
              alt="Logo"
              className=" py-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white max-w-xs"
            />
            <h2 className="text-2xl italic mb-6 text-center text-black ">
              SIN AUTORIZACION
            </h2>
            <p className="pb-5 text-gray-500 dark:text-gray-400">
              No tienes permisos para acceder a esta página.
            </p>
            <button
              onClick={handleGoBack}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Regresar
            </button>
            <hr className="w-full h-1 mx-auto my-4 mt-10 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
