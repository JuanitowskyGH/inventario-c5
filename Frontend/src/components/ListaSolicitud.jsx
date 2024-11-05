import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import OrderIcon from "../icons/OrderIcon"
import { listHook } from "../hooks/loans/list.hook";

export const ListaSolicitud = () => {

  const { selectedConsumables, handleRemoveFromList, handleSubmitRequest, requestSort, clean } = listHook();

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <div className="flex justify-between">
        <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Tu lista de consumibles 
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Aquí puedes ver los consumibles que has seleccionado para solicitar el prestamo.
          </p>
        </div>
        <div className="pt-7 pr-5 text-right rtl:text-left">
          <button
            onClick={handleSubmitRequest}
            disabled={clean}
            className={`${clean ? "cursor-not-allowed text-red-300 border-red-300 hover:-translate-y-0 hover:border-red-300 hover:text-red-300 duration-300" : ""} px-5 py-2 text-base font-medium text-center inline-flex items-center rounded-lg text-blue-tlax transition ease-in-out delay-150 border-2 border-blue-tlax hover:-translate-y-1 hover:scale-100 hover:border-blue-tlax-light hover:text-blue-tlax-light duration-300`}>
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
        </div>
      )}
    </div>
  );
};
