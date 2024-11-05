import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoanContext } from "../services/LoanService";
import axios from "axios";
import endpoints from "../services/endpoints";
import authService from "../services/authService";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InfoIcon from "@material-ui/icons/Info";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Tooltip, Popover } from "flowbite-react";
import LoadIcon from "../icons/LoadIcon";
import OrderIcon from "../icons/OrderIcon";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { groupHook } from "../hooks/consumibles/groupConsumable.hook";

export const GrupoConsumibles = ({ role }) => {

  const {
    records,
    loading,
    searchTerm,
    setSearchTerm,
    requestSort,
    tipo, marca,
    filteredRecords,
    deleteRegistro,
    handleAddToList,
    handleRemoveFromList,
    isInList,
  } = groupHook();

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
      <div className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        <p className="font-bold text-2xl">Datos del consumible seleccionado:</p>
        <ul className="list-disc pl-8 pt-3">
          <li>Tipo: "{decodeURIComponent(tipo)}"</li>
          <li>Marca: "{decodeURIComponent(marca)}"</li>
        </ul>
        <div className="flex justify-between items-center mt-4">
          <div className="relative w-2/5">
            <label htmlFor="table-search" className="sr-only">
              Buscar
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <SearchIcon style={{ color: "GrayText" }} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="table-search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-gray-50 focus:ring-blue-tlax focus:border-blue-tlax dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="itemsPerPage"
              className="mr-2 text-sm text-gray-700 dark:text-gray-400"
            >
              Registros por página:
            </label>
            <select
              id="itemsPerPage"
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
      {filteredRecords.length === 0 ? (
        <div className="p-5 text-center">
          <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700" />
          <p className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-400">
            No hay registros disponibles.
          </p>
          <Link
            to="/consumibles"
            replace
            className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-blue-tlax transition ease-in-out delay-150 border-2 border-blue-tlax hover:-translate-y-1 hover:scale-100 hover:border-blue-tlax-light hover:text-blue-tlax-light duration-300"
          >
            <ExitToAppIcon className="w-6 h-6 mr-2" />
            Volver
          </Link>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700" />
        </div>
      ) : (
        <div className="overflow-x-auto">
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
              <th scope="col" className="px-6 py-3">
                Descripcion
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
              <th scope="col" className="px-6 py-3">
                Serie
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
              <th scope="col" className="py-3  text-center">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3  text-center">
                Disponibilidad
              </th>
                <th scope="col" className="py-3 text-center">
                  Acciones
                </th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr
                key={record.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300"
              >
                <th
                  scope="row"
                  className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {record.id}
                </th>
                <td className="px-6 py-4">{record.descripcion}</td>
                <td className="px-6 py-4">{record.modelo}</td>
                <td className="px-6 py-4">{record.serie}</td>
                <td className="px-6 py-4">{record.responsable}</td>
                <td className="py-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={
                        record.imagen
                          ? `${endpoints.base}${record.imagen}`
                          : "/inventory.jpg"
                      }
                      alt="img"
                      className="max-w-[300px] max-h-[200px] object-cover rounded-lg mr-6"
                    />
                  </div>
                </td>
                <td className="text-center py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      record.disponible
                        ? "bg-green-500 shadow-md shadow-green-700"
                        : "bg-red-500 shadow-md shadow-red-700"
                    }`}
                  >
                    {record.disponible ? "DISPONIBLE" : "NO DISPONIBLE"}
                  </span>
                </td>
                  <td className="flex py-24 px-4 justify-center gap-2">
                  {(role === "Administrador" || role === "Moderador") && (
                    <div>
                    <Tooltip color="primary" content="Editar registro">
                      <Link to={`/updateconsumible/${record.id}`}>
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-tlax">
                          <EditIcon />
                        </span>
                      </Link>
                    </Tooltip>
                    <Tooltip color="primary" content="Eliminar registro">
                      <Link>
                        <span
                          className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800"
                          onClick={() => deleteRegistro(record.id)}
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
                              {record.creatorC
                                ? `${record.creatorC.nombre} ${record.creatorC.apellidop} ${record.creatorC.apellidom}`
                                : "Desconocido"}
                            </li>
                            <li>
                              <strong>Fecha: </strong>
                              {record.createdAt}
                            </li>
                            <li>
                              <strong>Ultima actualización: </strong>
                              {record.updatedAt}
                            </li>
                          </ul>
                        </div>
                      }
                    >
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-gray-500">
                        <InfoIcon />
                      </span>
                    </Popover>
                    </div>
                  )}
                    {isInList(record.id) ? (
                      <Tooltip color="danger" content="Quitar de solicitud">
                        <button onClick={() => handleRemoveFromList(record.id)}>
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-700">
                            <IndeterminateCheckBoxIcon />
                          </span>
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip color="primary" content={`${
                              !record.disponible
                                ? "No disponible"
                                : "Agregar a solicitud"
                            }`}>
                        <button
                          onClick={() => handleAddToList(record)}
                          disabled={!record.disponible}
                        >
                          <span
                            className={`text-lg text-default-400 cursor-pointer active:opacity-50 ${
                              !record.disponible
                                ? "text-gray-400"
                                : "text-green-700"
                            }`}
                          >
                            <AddBoxIcon />
                          </span>
                        </button>
                      </Tooltip>
                    )}
                    
                  </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};
