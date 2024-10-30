import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import OrderIcon from "../icons/OrderIcon"
import axios from "axios";
import authService from "../services/authService";
import { LoanContext } from "../services/LoanService";
import endpoints from "../services/endpoints";
import Swal from "sweetalert2";

export const ListaSolicitud = () => {
  const { selectedConsumables, removeFromList, clearList } = useContext(LoanContext);
  const user = authService.getCurrentUser();
  const handleSubmitRequest = async () => {
    try {
      if (selectedConsumables.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Lista vacía",
          text: "No se puede enviar la solicitud porque la lista está vacía.",
          showConfirmButton: true,
          confirmButtonColor: "#0B1556",
        });
        return;
      }
  
      const confirm = await Swal.fire({
        title: "Enviar solicitud",
        text: "¿Estás seguro de enviar la solicitud de préstamo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0B1556",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, enviar",
        cancelButtonText: "Cancelar",
      });
  
      if (confirm.isConfirmed) {
        if (!user) {
          navigate("/");
          return;
        }
  
        await axios.post(endpoints.solicitud, {
          consumibles: selectedConsumables.map((consumable) => consumable.id),
          withCredentials: true,
        });
  
        Swal.fire({
          icon: "success",
          title: "Solicitud enviada",
          text: "Tu solicitud de préstamo ha sido enviada correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
  
        clearList();
      }
    } catch (error) {
      alert("Error al enviar la solicitud");
      console.error("Error al enviar la solicitud", error);
    }
  };

  const handleRemoveFromList = (recordId) => {
    removeFromList(recordId);
    let timerInterval;
    Swal.fire({
      position: "bottom-start",
      title: "¡Listo!",
      html: "Se ha eliminado el consumible de la lista de solicitud",
      //allowOutsideClick: false,
      toast: true,
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        if (timer) {
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };


  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Tu lista de consumibles 
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Aquí puedes ver los consumibles que has seleccionado para solicitar el prestamo.
          </p>
        </div>
        <div className="col-span-1 pt-7 pr-5 text-right rtl:text-left">
          <button
            onClick={handleSubmitRequest}
            className="px-5 py-2 text-base font-medium text-center inline-flex items-center rounded-lg text-blue-tlax transition ease-in-out delay-150 border-2 border-blue-tlax hover:-translate-y-1 hover:scale-100 hover:border-blue-tlax-light hover:text-blue-tlax-light duration-300"
          >
            <PostAddOutlinedIcon className="w-6 h-6 mr-2" />
            Solicitar Préstamo
          </button>
          </div>
      </div>
      {selectedConsumables.length === 0 ? (
        <div className="p-5 text-center bg-white">
          <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700" />
          <p className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-400">
            Aún no hay consumibles seleccionados.
          </p>
          <Link
            to="/consumibles"
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
                Descripcion
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
                <th scope="col" className=" py-3">
                  Acciones
                </th>
            </tr>
          </thead>
          <tbody>
            {selectedConsumables.map((consumable) => (
              <tr
                key={consumable.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300"
              >
                <th
                  scope="row"
                  className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {consumable.id}
                </th>
                <td className="px-6 py-4">{consumable.tipo}</td>
                <td className="px-6 py-4">{consumable.marca}</td>
                <td className="px-6 py-4">{consumable.modelo}</td>
                <td className="px-6 py-4">{consumable.serie}</td>
                <td className="px-6 py-4">{consumable.descripcion}</td>
                <td className="px-6 py-4">{consumable.responsable}</td>
                  <td className="flex justify-center pt-2">
                    <Tooltip color="primary" content="Quitar de solicitud">
                      <button onClick={()=> handleRemoveFromList(consumable.id)}>
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                          <DeleteForeverIcon />
                        </span>
                      </button>
                    </Tooltip>
                  </td>
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
        {/* <div className="grid grid-cols-2">
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
        </div> */}