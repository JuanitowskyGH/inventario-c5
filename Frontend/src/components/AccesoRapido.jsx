import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../icons/UserIcon";
import InventoryIcon from "../icons/InventoryIcon";
import ReportIcon from "../icons/ReportIcon";
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


export const AccesoRapido = ({ role }) => {
  const isAdminOrMod = role === "Administrador" || role === "Moderador";
  const gridCols = isAdminOrMod ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="container mx-auto px-6 py-16">
      <hr className="w-full h-1 mx-auto mb-3 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <h1 className="my-6 text-3xl text-center font-extrabold text-blue-tlax dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-tlax from-sky-400">Accesos Ra</span>pidos</h1>
      {/* <div className="flex justify-center pb-6 text-3xl text-default-400 italic">
        <b>Accesos Rapidos</b>
      </div> */}
      <div
        className={`grid ${gridCols} sm:grid-cols-1 gap-4 px-6 justify-center`}
      >
        {isAdminOrMod && (
          <div className="flex p-3 justify-center items-center">
            <Link
              to="/usuarios"
              className="flex flex-col p-3 w-full justify-center items-center shadow-md shadow-black text-3xl rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-110 hover:bg-blue-tlax-light duration-300"
            >
              Usuarios
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
                <PersonIcon style={{ fontSize: 200 }} />
              </span>
            </Link>
          </div>
        )}
        <div className="flex p-3 justify-center items-center">
          <Link
            to="/inventario"
            className="flex flex-col p-3 w-full justify-center items-center shadow-md shadow-black text-3xl rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-110 hover:bg-blue-tlax-light duration-300"
          >
            Inventario
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
            <LibraryBooksIcon style={{ fontSize: 200 }} />
            </span>
          </Link>
        </div>
        <div className="flex p-3 justify-center items-center">
          <Link
            to=""
            className="flex flex-col p-3 w-full justify-center items-center shadow-md shadow-black text-3xl rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-110 hover:bg-blue-tlax-light duration-300"
          >
            Reportes
            <span className="pt-2 text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
              <AssignmentIcon style={{ fontSize: 200 }} />
            </span>
          </Link>
        </div>
      </div>
      <hr className="w-full h-1 mx-auto mt-6 bg-gray-100 border-0 rounded dark:bg-gray-700" />
    </div>
  );
};
