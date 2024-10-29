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
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Swal from "sweetalert2";

export const GrupoConsumibles = ({ role }) => {
  const { selectedConsumables, addToList, removeFromList } = useContext(LoanContext);
  const { tipo, marca } = useParams();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const user = authService.getCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    const decodedTipo = decodeURIComponent(tipo);
    const decodedModelo = decodeURIComponent(marca);
    axios.get(`${endpoints.grupo}/${encodeURIComponent(decodedTipo)}/${encodeURIComponent(decodedModelo)}`,
        {
          withCredentials: true
        }
      )
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => console.error("Error fetching records:", error));
    setLoading(false);
  }, [tipo, marca]);

  const handleAddToList = (record) => {
    console.log("Consumable added to cart:", record);
    addToList(record);
  };

  const handleRemoveFromList = (recordId) => {
    console.log("Consumable removed from cart:", recordId);
    removeFromList(recordId);
  };

  const isInList = (recordId) => {
    return selectedConsumables.some((consumable) => consumable.id === recordId);
  };

  const deleteRegistro = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Esta seguro de eliminar este consumible?",
      text: "No habrá registro de él una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      if (!user) {
        navigate("/");
        return;
      }
      await axios.delete(`${endpoints.consumibles}/${id}`, {
        withCredentials: true
      });
      Swal.fire({
        icon: "success",
        title: "Consumible eliminado",
        text: "El registro ha sido eliminado con éxito",
        showConfirmButton: false,
        timer: 2000,
      })
      setRecords(records.filter((record) => record.id !== id));
    }
  };

  const filteredRecords = records.filter((record) => {
    const serie = record.serie ? record.serie.toString().toLowerCase() : "";
    const responsable = record.responsable ? record.responsable.toString().toLowerCase() : "";
    const disponibilidad = record.disponibilidad ? record.disponibilidad.toString().toLowerCase() : "";
    const searchTermLower = searchTerm.toLowerCase();

    return (
      serie.includes(searchTermLower) ||
      responsable.includes(searchTermLower) ||
      disponibilidad.includes(searchTermLower)
    );
  });

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
              /*value={itemsPerPage}
              onChange={handleItemsPerPageChange}*/
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
        <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700"/>
          <p className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-400">No hay registros disponibles.</p>
          <Link
                to="/consumibles"
                replace
                className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-blue-tlax transition ease-in-out delay-150 border-2 border-blue-tlax hover:-translate-y-1 hover:scale-100 hover:border-blue-tlax-light hover:text-blue-tlax-light duration-300"
              >
                <ExitToAppIcon className="w-6 h-6 mr-2" />
                Volver
              </Link>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700"/>
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
            {(role === "Administrador" || role === "Moderador") && (
              <th scope="col" className="py-3 text-center">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300">
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
                    record.disponible ? "bg-green-500 shadow-md shadow-green-700" : "bg-red-500 shadow-md shadow-red-700"
                  }`}
                >
                  {record.disponible ? "DISPONIBLE" : "NO DISPONIBLE"}
                </span>
              </td>              
              {(role === "Administrador" || role === "Moderador") && (
                <td className="flex py-24 px-4 justify-center gap-2">
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

                    {isInList(record.id) ? (
                      <Tooltip color="danger" content="Quitar de solicitud">
                    
                    <button onClick={() => handleRemoveFromList(record.id)}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-700">
                        <NoteAddIcon />
                      </span>
                    </button>
                    </Tooltip>
                    ) : (
                      <Tooltip color="primary" content="Agregar a solicitud">
                    <button onClick={() => handleAddToList(record)}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-green-700">
                        <NoteAddIcon />
                      </span>
                    </button>
                    </Tooltip>
                    )}
                    
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
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    )}

      {/* PAGINATION
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
      </div> */}
    </div>
  );
};
