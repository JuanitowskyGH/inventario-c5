import EditInventoryIcon from "../icons/EditInventoryIcon";
import ClearIcon from "../icons/ClearIcon";
import { submitHook } from "../hooks/registers/submit.hook";

export const InventarioForm = () => {

  const { errors, loading, inventario, cleanForm, handleChange, handleFileChange, handleSubmit } = submitHook();

  if (loading) {
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-tlax"
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
