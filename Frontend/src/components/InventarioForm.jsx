import EditInventoryIcon from "../icons/EditInventoryIcon";
import ClearIcon from "../icons/ClearIcon";
import { submitHook } from "../hooks/registers/submit.hook";
import LoadIcon from "../icons/LoadIcon";


export const InventarioForm = () => {

  const { errors, loading, inventario, cleanForm, handleChange, handleFileChange, handleSubmit } = submitHook();

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
      <div className="max-w-xlg mx-auto px-8 pt-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl italic mb-4 text-black">
              Agregar registro
            </h1>
            <p>
              Llena los campos para agregar un nuevo registro.
              <br />
              Los campos marcados con * son obligatorios.
            </p>
          </div>
          <button
            onClick={cleanForm}
            className="flex flex-col px-5 py-3 text-base font-medium text-center items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-105 hover:bg-blue-tlax-light duration-300"
          >
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
              <ClearIcon className="w-10 h-10 mr-2" />
            </span>
            <center>Limpiar Formulario</center>
          </button>
        </div>
      </div>
      <form
        className="max-w-xlg mx-auto p-8"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        <div className="grid items-end gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
          <div className="relative">
            <input
              type="number"
              min={1}
              name="etiqueta"
              value={inventario.etiqueta}
              onChange={handleChange}
              id="etiqueta"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.etiqueta ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
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
              name="numAnterior"
              value={inventario.numAnterior}
              onChange={handleChange}
              id="numAnterior"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.numAnterior ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
              placeholder=" "
            />
            <label
              htmlFor="numAnterior"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Número anterior *
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="tipo"
              value={inventario.tipo}
              onChange={handleChange}
              id="tipo"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.tipo ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
              placeholder=" "
            />
            <label
              htmlFor="tipo"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Tipo *
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="marca"
              value={inventario.marca}
              onChange={handleChange}
              id="marca"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.marca ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
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
              value={inventario.modelo}
              onChange={handleChange}
              id="modelo"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.modelo ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
              placeholder=" "
            />
            <label
              htmlFor="modelo"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Modelo
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="serie"
              value={inventario.serie}
              onChange={handleChange}
              id="serie"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.serie ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
              placeholder=" "
            />
            <label
              htmlFor="serie"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Serie
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="departamento"
              value={inventario.departamento}
              onChange={handleChange}
              id="departamento"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.departamento ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
              placeholder=" "
            />
            <label
              htmlFor="departamento"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Departamento *
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="ubicacion"
              value={inventario.ubicacion}
              onChange={handleChange}
              id="ubicacion"
              className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${
                errors.ubicacion ? "input-error" : "border-gray-300"
              }  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`}
              placeholder=" "
            />
            <label
              htmlFor="ubicacion"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Ubicacion *
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="responsable"
              value={inventario.responsable}
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
        </div>

        <div className="grid items-end gap-6 mb-6 mt-6 lg:grid-cols-2">
        <div className="relative">
          <textarea
            type="text"
            name="descripcion"
            value={inventario.descripcion || ""}
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
          <div className="">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="inventory_pic"
            >
              Subir imagen (JPG, JPEG o PNG)
            </label>
            <input
              defaultValue={""}
              onChange={handleFileChange}
              name="imagen"
              className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="inventory_pic"
              accept="image/jpeg, image/jpg, image/png"
              type="file"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-105 hover:bg-blue-tlax-light duration-300"
        >
          <EditInventoryIcon className="w-6 h-6 mr-2" />
          Agregar Registro
        </button>
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      </form>
    </div>
  );
};
