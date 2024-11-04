import { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "../services/endpoints";
import { reportHook } from "../hooks/services/report.hook";
import SearchIcon from "@material-ui/icons/Search";
import OrderIcon from "../icons/OrderIcon";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";
export const TablaReportes = () => {
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
  } = reportHook();

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Reporte de prestamos
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Aqui puedes ver los prestamos aprobados
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
                placeholder="Buscar"
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
            Sin registros disponibles.
          </p>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700" />
        </div>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-3 py-3">
                <div className="flex items-center">
                  No. de Ticket
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
                  Solicitante
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha de prestamo
              </th>
              <th scope="col" className="px-6 py-3">
                  Consumibles
              </th>
              <th scope="col" className="px-6 py-3">
                  Aprobó
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((prestamo) => (
              <tr
                key={prestamo.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300"
              >
                <th
                  scope="row"
                  className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {prestamo.id}
                </th>
                <td className="pl-3 py-4">
                  {" "}
                  {prestamo.user
                    ? `${prestamo.user.nombre} ${prestamo.user.apellidop} ${prestamo.user.apellidom}`
                    : "Usuario no disponible"}
                </td>
                <td className="px-6 py-4">
                  {prestamo.loanDate}
                </td>
                <td className="px-6 py-4">
                  {" "}
                  {prestamo.consumables && prestamo.consumables.length > 0 ? (
                    prestamo.consumables.map((consumible) => (
                      <div key={consumible.id} className="mb-2">
                        <p>
                          <strong>Tipo:</strong> {consumible.tipo}
                        </p>
                        <p>
                          <strong>Descripción:</strong> {consumible.descripcion}
                        </p>
                        <p>
                          <strong>Marca:</strong> {consumible.marca}
                        </p>
                        <p>
                          <strong>Serie:</strong> {consumible.serie}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No hay consumibles disponibles</p>
                  )}
                </td>
                <td className="px-6 py-4">
                {prestamo.approved
                    ? `${prestamo.approved.nombre} ${prestamo.approved.apellidop} ${prestamo.approved.apellidom}`
                    : "Aprobador no disponible"}
                </td>
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
/*<div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Préstamos Aprobados
      </h2>
      <p className="text-gray-600 mb-6">
        Aquí puedes ver los préstamos que han sido aprobados.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                Solicitante
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                Fecha de Préstamo
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                No. de Ticket
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                Consumibles
              </th>
            </tr>
          </thead>
          <tbody>
            {prestamos.length > 0 ? (
              prestamos.map((prestamo) => (
                <tr key={prestamo.id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {prestamo.user
                      ? `${prestamo.user.nombre} ${prestamo.user.apellidop} ${prestamo.user.apellidom}`
                      : "Usuario no disponible"}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {new Date(prestamo.loanDate).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {prestamo.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {prestamo.consumables && prestamo.consumables.length > 0 ? (
                      prestamo.consumables.map((consumible) => (
                        <div key={consumible.id} className="mb-2">
                          <p>
                            <strong>Tipo:</strong> {consumible.tipo}
                          </p>
                          <p>
                            <strong>Descripción:</strong> {consumible.descripcion}
                          </p>
                          <p>
                            <strong>Marca:</strong> {consumible.marca}
                          </p>
                          <p>
                            <strong>Serie:</strong> {consumible.serie}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p>No hay consumibles disponibles</p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-2 px-4 border-b border-gray-200 text-center text-gray-500">
                  No hay préstamos aprobados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>*/
