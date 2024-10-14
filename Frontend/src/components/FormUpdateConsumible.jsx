import EditInventoryIcon from "../icons/EditInventoryIcon";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Discard from "../icons/DiscardIcon";
import { Link, useNavigate } from "react-router-dom";
import { updateHook } from "../hooks/consumibles/update.hook";
import LoadIcon from "../icons/LoadIcon";


export const FormUpdateConsumible = () => {
  const {
    loading,
    errors,
    consumible,
    img,
    handleChange,
    handleFileChange,
    updateInventario,
  } = updateHook();

  const navigate = useNavigate();

  const handleCancel = () => {
    const { tipo, marca } = consumible;
    navigate(`/records/${tipo}/${marca}`);
  };

  if (loading) {
    return (
      <div className="text-center">
        <div role="status">
          <LoadIcon />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <form className="max-w-xlg mx-auto p-8" onSubmit={updateInventario}>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />

        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center px-12">
            <div className="mb-3">
              <h1 className="text-3xl italic mb-4 text-black ">
                Actualizar registro
              </h1>
              <p>
                Actualiza los datos necesarios y guarda los cambios.
                <br />
                Los campos marcados con * son obligatorios.
              </p>
              <figure className="mt-10">
                <img className="h-auto w-screen rounded-lg" src={img} />
                <figcaption className="my-6 text-sm text-center text-gray-500 dark:text-gray-400">
                  <strong> Número de registro: {consumible.id}</strong>
                </figcaption>
              </figure>
              <input
                onChange={handleFileChange}
                name="imagen"
                className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                accept="image/jpeg, image/jpg, image/png"
                type="file"
              />
              <label
                className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Cambiar imagen (JPG, JPEG o PNG)
              </label>
            </div>
          </div>
          <div className="grid grid-rows-7 grid-flow-col gap-4 mt-24">
            <div className="relative">
              <input
                type="text"
                name="etiqueta"
                value={consumible.etiqueta || ""}
                onChange={handleChange}
                id="etiqueta"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.etiqueta ? "input-error" : "border-gray-300"
                } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="etiqueta"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Etiqueta *
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="tipo"
                value={consumible.tipo || ""}
                onChange={handleChange}
                id="tipo"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.tipo ? "input-error" : "border-gray-300"
                } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="tipo"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Tipo *
              </label>
            </div>
            <div className="relative col-start-2">
              <input
                type="text"
                name="marca"
                value={consumible.marca || ""}
                onChange={handleChange}
                id="marca"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.marca ? "input-error" : "border-gray-300"
                } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="marca"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Marca *
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="modelo"
                value={consumible.modelo || ""}
                onChange={handleChange}
                id="modelo"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.modelo ? "input-error" : "border-gray-300"
                } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="modelo"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Modelo
              </label>
            </div>
            <div className="relative col-start-2">
              <input
                type="text"
                name="serie"
                value={consumible.serie || ""}
                onChange={handleChange}
                id="serie"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.serie ? "input-error" : "border-gray-300"
                } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="serie"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Serie
              </label>
            </div>
            <div className="relative col-start-2">
              <input
                type="text"
                name="responsable"
                value={consumible.responsable || ""}
                onChange={handleChange}
                id="responsable"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.responsable ? "input-error" : "border-gray-300"
                }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="responsable"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Responsable *
              </label>
            </div>
            <div className="relative col-span-2">
              <textarea
                name="descripcion"
                value={consumible.descripcion || ""}
                onChange={handleChange}
                id="descripcion"
                className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                  errors.descripcion ? "input-error" : "border-gray-300"
                }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
                placeholder=" "
              />
              <label
                htmlFor="descripcion"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Descripcion
              </label>
            </div>
            <div className="flex col-span-2 justify-end gap-5 py-4">
            <button className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
              <EditIcon className="w-3 h-3" />
              Actualizar Registro
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-red-600 transition ease-in-out delay-150 border-2 border-red-600 hover:-translate-y-1 hover:scale-100 hover:border-red-300 hover:text-red-300 duration-300"
            >
              <ExitToAppIcon className="w-6 h-6 mr-2" />
              Cancelar
            </button>
          </div>
          </div>
        </div>
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      </form>
    </div>
  );
};
