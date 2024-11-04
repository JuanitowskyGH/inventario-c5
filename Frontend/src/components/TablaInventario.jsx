import EditInventoryIcon from "../icons/EditInventoryIcon";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import InfoIcon from "@material-ui/icons/Info";
import SearchIcon from "@material-ui/icons/Search";
import DeleteInventoryIcon from "../icons/DeleteInventoryIcon";
import { Link } from "react-router-dom";
import { Tooltip, Popover } from "flowbite-react";
import endpoints from "../services/endpoints";
import { tableHook } from "../hooks/registers/table.hook";
//import InfoIcon from "../icons/InfoIcon";
import LoadIcon from "../icons/LoadIcon";
//import SearchIcon from "../icons/SearchIcon";
import OrderIcon from "../icons/OrderIcon";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";

export const TablaInventario = ({ role }) => {
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
    deleteRegistro,
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
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Lista de registros
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Aquí puedes ver la lista de los registros con detalles. <br />
        </p>
        <div className="grid grid-cols-2">
          <div className="items-center mt-4">
            <div className="relative w-auto">
              <label htmlFor="table-search" className="sr-only">
                Buscar
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <SearchIcon style={{ color: "GrayText" }} />
              </div>
              <input
                type="text"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                id="table-search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-gray-50 focus:ring-blue-tlax focus:border-blue-tlax-light"
                placeholder="ID, Tipo, Marca, Serie, Departamento, Responsable o Ubicacion."
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center justify-self-end me-5">
              <label
                htmlFor="itemsPerPage"
                className="mr-2 text-sm text-gray-700 dark:text-gray-400"
              >
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
            <div className="flex flex-col justify-items-end">
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
        </div>
      </div>
      {data.length === 0 ? (
        <div className="p-5 text-center bg-white">
          <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700" />
          <p className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-400">
            Aún no hay registros disponibles.
          </p>
          <Link
            to="/addinventario"
            className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-blue-tlax transition ease-in-out delay-150 border-2 border-blue-tlax hover:-translate-y-1 hover:scale-100 hover:border-blue-tlax-light hover:text-blue-tlax-light duration-300"
          >
            <PostAddOutlinedIcon className="w-6 h-6 mr-2" />
            Agregar Consumibles
          </Link>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700" />
        </div>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-3 py-3">
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
              <th scope="col" className="pl-3 py-3">
                <div className="flex items-center">
                  Etiqueta
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("etiqueta");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Numero anterior
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Tipo
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("tipo");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Marca
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("marca");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Modelo
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("modelo");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Serie
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Dpto
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("departamento");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Responsable
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("responsable");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Ubicacion
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      requestSort("ubicacion");
                    }}
                  >
                    <OrderIcon />
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3  text-center">
                Imagen
              </th>
              {(role === "Administrador" || role === "Moderador") && (
                <th scope="col" className="text-center py-3">
                  Acciones
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300"
              >
                <th
                  scope="row"
                  className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="pl-3 py-4">{item.etiqueta}</td>
                <td className="px-6 py-4">{item.numAnterior}</td>
                <td className="px-6 py-4">{item.tipo}</td>
                <td className="px-6 py-4">{item.descripcion}</td>
                <td className="px-6 py-4">{item.marca}</td>
                <td className="px-6 py-4">{item.modelo}</td>
                <td className="px-6 py-4">{item.serie}</td>
                <td className="px-6 py-4">{item.departamento}</td>
                <td className="px-6 py-4">{item.responsable}</td>
                <td className="px-6 py-4">{item.ubicacion}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={
                        item.imagen
                          ? `${endpoints.base}${item.imagen}`
                          : "/inventory.jpg"
                      }
                      alt="img"
                      className="w-xs h-auto rounded-lg"
                    />
                  </div>
                </td>
                {(role === "Administrador" || role === "Moderador") && (
                  <td className="flex my-14 px-4 gap-2">
                    <Tooltip color="primary" content="Editar registro">
                      <Link to={`/updateinventario/${item.id}`}>
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                          <EditIcon />
                        </span>
                      </Link>
                    </Tooltip>
                    <Tooltip color="primary" content="Eliminar registro">
                      <Link>
                        <span
                          className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800"
                          onClick={() => deleteRegistro(item.id)}
                        >
                          <DeleteForeverIcon />
                        </span>
                      </Link>
                    </Tooltip>
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
                              {item.creatorI
                                ? `${item.creatorI.nombre} ${item.creatorI.apellidop} ${item.creatorI.apellidom}`
                                : "Desconocido"}
                            </li>
                            <li>
                              <strong>Fecha: </strong>
                              {item.createdAt}
                            </li>
                            <li>
                              <strong>Ultima actualización: </strong>
                              {item.updatedAt}
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
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

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
