import React, { useEffect, useState } from "react";
import EditInventoryIcon from "../icons/EditInventoryIcon";
import DeleteInventoryIcon from "../icons/DeleteInventoryIcon";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import axios from "axios";
import endpoints from "../services/endpoints";
import Swal from "sweetalert2";
import authService from "../services/authService";

export const TablaInventario = ({ role }) => {
  /*const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getInventario = async (page = 1) => {
        const response = await axios.get(endpoints.inventario, {
            params: { page, limit: 10 }
        });
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
    }

    useEffect(() => {
        getInventario(currentPage);
    }, [currentPage]);*/

  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const [search] = useState([
    "id",
    "tipo",
    "marca",
    "serie",
    "departamento",
    "responsable",
    "ubicacion",
  ]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate("/login");
        return;
      }
      try {
        const response = await axios.get(endpoints.inventario, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };
    fetchData();
    setLoading(false);
  }, [navigate]);

  const sortedData = [...data].sort((a, b) => {
    if (
      typeof a[sortConfig.key] === "number" &&
      typeof b[sortConfig.key] === "number"
    ) {
      return sortConfig.direction === "ascending"
        ? a[sortConfig.key] - b[sortConfig.key]
        : b[sortConfig.key] - a[sortConfig.key];
    } else {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
  });

  function searchItems(sortedData) {
    return sortedData.filter((item) => {
      return search.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(globalFilter.toLowerCase()) > -1
        );
      });
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const deleteRegistro = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Esta seguro de eliminar este registro?",
      text: "No habrá registro de él una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "0B1556",
      cancelButtonColor: "d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate("/login");
        return;
      }
      await axios.delete(`${endpoints.inventario}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Registro eliminado",
        text: "El registro ha sido eliminado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      setData(data.filter((item) => item.id !== id));
      getInventario();
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
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
          Realiza la búsqueda de un registro en específico con:{" "}
          <b>ID, Tipo, Marca, Serie, Departamento, Responsable o Ubicacion.</b>
        </p>
        <label htmlFor="table-search" className="sr-only">
          Buscar
        </label>
        <div className="relative mt-1 pt-3">
          <div className="absolute inset-y-0 rtl:inset-r-0 pt-3 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            id="table-search"
            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-2/5 bg-gray-50 focus:ring-blue-tlax focus:border-blue-tlax dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                ID
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("id");
                  }}
                >
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Etiqueta
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("etiqueta");
                  }}
                >
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
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
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
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
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
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
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Serie
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Departamento
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("departamento");
                  }}
                >
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
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
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
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
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Edicion
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    requestSort("edicion");
                  }}
                >
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Imagen
            </th>
            {(role === "Administrador" || role === "Moderador") && (
              <th scope="col" className="px-3 py-3">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {searchItems(sortedData).map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="px-6 py-4">{item.etiqueta}</td>
              <td className="px-6 py-4">{item.numAnterior}</td>
              <td className="px-6 py-4">{item.tipo}</td>
              <td className="px-6 py-4">{item.descripcion}</td>
              <td className="px-6 py-4">{item.marca}</td>
              <td className="px-6 py-4">{item.modelo}</td>
              <td className="px-6 py-4">{item.serie}</td>
              <td className="px-6 py-4">{item.departamento}</td>
              <td className="px-6 py-4">{item.responsable}</td>
              <td className="px-6 py-4">{item.ubicacion}</td>
              <td className="px-6 py-4">{item.edicion}</td>
              <td className="px-6 py-4">
                <img
                  src={`${endpoints.base}${item.imagen}`}
                  alt="img"
                  width="lg:1000"
                  height="lg:1000"
                ></img>
              </td>
              {(role === "Administrador" || role === "Moderador") && (
                <td className="relative flex py-20 px-4 items-center gap-5">
                  <Tooltip color="primary" content="Editar registro">
                    <Link to={`/updateinventario/${item.id}`}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                        <EditInventoryIcon />
                      </span>
                    </Link>
                  </Tooltip>
                  <Tooltip color="primary" content="Eliminar registro">
                    <Link>
                      <span
                        className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800"
                        onClick={() => deleteRegistro(item.id)}
                      >
                        <DeleteInventoryIcon />
                      </span>
                    </Link>
                  </Tooltip>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex flex-col items-left pl-12 py-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Mostrando{" "}
          <span className="font-semibold text-gray-900 dark:text-white"></span>{" "}
          a{" "}
          <span className="font-semibold text-gray-900 dark:text-white"></span>{" "}
          de{" "}
          <span className="font-semibold text-gray-900 dark:text-white"></span>{" "}
          Registros
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Anterior
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Siguiente
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
