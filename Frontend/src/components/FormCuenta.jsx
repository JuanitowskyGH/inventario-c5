import IconUpdate from "../icons/UpdateIcon";
import IconLockPasswordLine from "../icons/UpdatePasswordIcon";
import InfoIcon from "../icons/InfoIcon";
import { updateHook } from "../hooks/users/update.hook";
import { Tooltip, Popover } from "flowbite-react";

export const FormCuenta = () => {
  const {
    loading,
    userInfo,
    formValues,
    passValues,
    passwordError,
    validatePassword,
    handleUserChange,
    handleUserSubmit,
    handlePasswordChange,
    handlePasswordSubmit,
  } = updateHook();

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
    <div className="relative overflow-x-auto bg-gray-200 sm:rounded-lg w-full">
      <div className="grid grid-cols-3 gap-6 p-4">
        <div className="container-fluid shadow-md p-4 rounded-md bg-white">
          <div className="flex justify-center m-16">
            <img
              className="rounded-full shadow-sm"
              src={userInfo.imagenUrl || "/user.jpg"} // Mostrar la imagen del usuario o una imagen por defecto
              alt="image description"
            />
          </div>
          <div className="grid grid-rows-2">
            <span className="mb-7 self-center text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-blue-tlax font-semibold whitespace-nowrap dark:text-white italic">
              {userInfo.username}
            </span>
            <p className="text-center dark:text-gray-400 mt-2 mx-4">
              Usted tiene permisos de:{" "}
              <strong>{userInfo.roles.join(", ")}</strong>
            </p>
          </div>
        </div>

        <div className="relative overflow-x-auto col-start-2 col-span-2 bg-white shadow-md sm:rounded-lg w-full">
          <form className="max-w-xlg mx-auto p-8" onSubmit={handleUserSubmit}>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <h1 className="text-2xl italic mb-8 text-black ">Tu informacion</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleUserChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="nombre"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Nombre(s)
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="apellidoP"
                  name="apellidoP"
                  value={formValues.apellidoP}
                  onChange={handleUserChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="apellidoP"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Apellido Paterno
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="apellidoM"
                  name="apellidoM"
                  value={formValues.apellidoM}
                  onChange={handleUserChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="apellidoM"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Apellido Materno
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  onChange={handleUserChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Nombre de usuario
                </label>
              </div>
              <div className="relative col-span-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Cambiar imagen (JPG, JPEG o PNG)
                </label>
                <input
                  onChange={handleUserChange}
                  name="imagen"
                  className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  accept="image/jpeg, image/jpg, image/png"
                  id="file_input"
                  type="file"
                />
              </div>
              <div className="relative col-span-2 pt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleUserChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Ingrese su contraseña para confirmar
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-4 mt-5 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300"
            >
              <IconUpdate className="w-6 h-6 mr-2" />
              Actualizar información
            </button>
            <hr className="w-full h-1 mx-auto mt-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </form>

          <form
            className="max-w-xlg mx-auto px-8 pb-8"
            onSubmit={handlePasswordSubmit}
          >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl italic mb-8 text-black flex items-center">
            Actualizar contraseña
            <Popover
              trigger="hover"
              placement="top-start"
              content={
                <div className="px-3 py-4 overflow-x-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Nota: </strong>
                    La contraseña debe tener: <br/>
                    -Al menos 8 caracteres <br/>
                    -Una letra mayúscula <br/>
                    -Una letra minúscula <br/>
                    -Un número y un carácter especial.
                  </p>
                </div>
              }
            >
              <span className="ml-2 text-lg text-default-400 cursor-pointer active:opacity-50 text-gray-500">
                <InfoIcon />
              </span>
            </Popover>
          </h1>
        </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 ">
              <div className="relative">
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passValues.currentPassword}
                  onChange={handlePasswordChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="currentPassword"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Contraseña actual
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passValues.newPassword}
                  onChange={handlePasswordChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="newPassword"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Nueva contraseña
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  value={passValues.confirmNewPassword}
                  onChange={handlePasswordChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="confirmNewPassword"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Confirme nueva contraseña
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300"
            >
              <IconLockPasswordLine className="w-6 h-6 mr-2" />
              Actualizar contraseña
            </button>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCuenta;

/**/
