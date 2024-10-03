import { Link } from "react-router-dom";
import DeleteUserIcon from "../icons/DeleteUserIcon";
import EditUserIcon from "../icons/EditUserIcon";
import { Tooltip, Popover } from "flowbite-react";
import { tableHook } from "../hooks/users/table.hook";
import endpoints from "../services/endpoints";
import InfoIcon from "../icons/InfoIcon";
import authService from "../services/authService";
import OrderIcon from "../icons/OrderIcon";
import SearchIcon from "../icons/SearchIcon";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";
import LoadIcon from "../icons/LoadIcon";

export const TablaUsuarios = ({ role }) => {
  const {
    data,
    loading,
    globalFilter,
    currentPage,
    totalPages,
    totalRecords,
    itemsPerPage,
    handlePageChange,
    handleItemsPerPageChange,
    requestSort,
    setGlobalFilter,
    deleteUsuario
  } = tableHook();

  if (loading) {
    return (
      <div className="text-center">
        <div role="status">
          <LoadIcon />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="relative overflow-x-auto shadow-lg bg-white sm:rounded-lg w-full">
        <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Lista de usuarios
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Aquí puedes ver la lista de los usuarios con detalles. <br />
            Realiza la búsqueda de un registro en específico con:
            <b> ID, Nombre, Apellidos, Nombre de usuario y Permisos</b>
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="relative w-2/5">
              <label htmlFor="table-search" className="sr-only">
                Buscar
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                id="table-search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-gray-50 focus:ring-blue-tlax focus:border-blue-tlax dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-700 dark:text-gray-400">
                Registros por página:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="py-1 px-0 w-14 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="pl-6 py-3">
              <div className="flex items-center">
                ID
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("id");
                  }}
                >
                  <OrderIcon />
                </a>
              </div>
            </th>
            <th scope="col" className="pl-6 py-3">
              <div className="flex items-center">
                Nombre(s)
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("nombre");
                  }}
                >
                  <OrderIcon />
                </a>
              </div>
            </th>
            <th scope="col" className="pl-6 py-3">
              <div className="flex items-center">
                Apellidos
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("apellidop");
                  }}
                >
                  <OrderIcon />
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Nombre de usuario
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("username");
                  }}
                >
                  <OrderIcon />
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Permisos
            </th>
            <th scope="col" className="px-11 py-3">
              Imagen
            </th>
            {(role === "Administrador" || role === "Moderador") && (
              <th scope="col" className="pr-6 py-3">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-base">
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300"
            >
              <th
                scope="row"
                className="pl-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="pl-6 py-4">{item.nombre}</td>
              <td className="pl-6 py-4">
                {item.apellidop} {item.apellidom}
              </td>
              <td className="pl-6 py-4">{item.username}</td>
              <td className="px-6 py-4">
                {item.role ? item.role.name : "Sin rol"}
              </td>
              <td className="px-1 py-4">
                <img
                  src={
                    item.imagen
                      ? `${endpoints.base}${item.imagen}`
                      : "/user.jpg"
                  }
                  alt="img"
                  className="w-32 h-32 object-cover rounded-full mr-3"
                />
              </td>
                <td className="relative flex py-16 items-center gap-2">
                {role === "Administrador" && (<>
                  <Tooltip color="primary" content="Editar usuario">
                    <Link to={`/updateusuarios/${item.id}`}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                        <EditUserIcon />
                      </span>
                    </Link>
                  </Tooltip>
                  <Tooltip color="primary" content="Eliminar usuario">
                    <Link>
                      <span
                        className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800"
                        onClick={() => deleteUsuario(item.id)}
                      >
                        <DeleteUserIcon />
                      </span>
                    </Link>
                  </Tooltip>
                  </>)}
                  <Popover
                    trigger="hover"
                    placement="left"
                    content={
                      <div className="p-4">
                        <ul>
                          <li>
                            <strong>DATOS DE REGISTRO</strong>
                          </li>
                          <li>
                            <strong>Creado por: </strong>
                            {item.creatorU
                              ? `${item.creatorU.nombre} ${item.creatorU.apellidop} ${item.creatorU.apellidom}`
                              : "Desconocido"}
                          </li>
                          <li>
                            <strong>Fecha: </strong>
                            {item.createdAt}
                          </li>
                        </ul>
                      </div>
                    }
                  >
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-gray-500">
                      <InfoIcon />
                    </span>
                  </Popover>
                </td>
              
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex flex-col items-left pl-12 py-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Mostrando{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          a{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {Math.min(currentPage * itemsPerPage, totalRecords)}
          </span>{" "}
          de{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalRecords}
          </span>{" "}
          Registros
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <LeftIcon />
            Anterior
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Siguiente
            <RightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
