import React from "react";
import { Menu } from "../components/Menu";
import { FormUpdateUsuario } from "../components/FormUpdateUsuario";
import authService from "../services/authService";

export const UpdateUsuarios = () => {
  const user = authService.getCurrentUser();

  return (
    <div className="absolute w-full h-full">
      <div>
        <Menu role={user?.role} />
      </div>
      <div className="container-fluid w-auto px-5 py-5 rounded-md h-max mt-28 mx-12 bg-gray-200">
        <div className="">
          <FormUpdateUsuario />
        </div>
      </div>
    </div>
  );
};
