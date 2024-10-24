import { consumableHook } from "../hooks/consumibles/consumable.hook";
import { Link } from "react-router-dom";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";

import LoadIcon from "../icons/LoadIcon";

export const TablaConsumibles = () => {
  const {
    loading,
    searchTerm,
    setSearchTerm,
    filteredTypes,
    handleViewRecords,
  } = consumableHook();

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
    <div>
      <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Consumibles
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Selecciona un tipo de consumible para ver los registros.
        </p>
        <div className="relative w-2/5 pt-2">
          <label htmlFor="table-search" className="sr-only">
            Buscar
          </label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-2 pointer-events-none ">
            <SearchIcon style={{ color: "GrayText" }} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="table-search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-gray-50 focus:ring-blue-tlax focus:border-blue-tlax dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar por tipo o marca"
          />
        </div>
      </div>
      {filteredTypes.length === 0 ? (
        <div className="p-5 text-center bg-white">
          <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700" />
          <p className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-400">
            Aún no hay registros disponibles.
          </p>
          <Link
            to="/addconsumibles"
            className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-blue-tlax transition ease-in-out delay-150 border-2 border-blue-tlax hover:-translate-y-1 hover:scale-100 hover:border-blue-tlax-light hover:text-blue-tlax-light duration-300"
          >
            <AddToQueueIcon className="w-6 h-6 mr-2" />
            Agregar Consumibles
          </Link>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredTypes.map((type, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
                type.disponibles <= 3
                  ? "border-red-700 shadow-red-800 shadow-md"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full dark:bg-blue-500 dark:bg-opacity-40">
                  <ImportantDevicesIcon style={{ fontSize: 50 }} />
                </div>
                <div className="mt-4 mb-2 text-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {type.tipo}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {type.marca}
                  </p>
                  <p
                    className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${
                      type.disponibles <= 3 ? "text-red-800" : ""
                    }`}
                  >
                    Disponibles: {type.disponibles}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleViewRecords(type.tipo, type.marca)}
                  className="py-2 px-3 text-base font-medium justify-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300"
                >
                  Ver Registros
                  <ArrowForwardIcon className="w-6 h-6 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
