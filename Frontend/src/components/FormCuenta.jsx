import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import endpoints from "../services/endpoints";
import IconUpdate from "../icons/UpdateIcon"; // Asegúrate de importar tu componente de icono

export const FormCuenta = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    roles: [],
  });
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(endpoints.cuenta, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUserInfo({
          username: response.data.username,
          roles: [response.data.role.name],
        });
        setFormValues({
          nombre: response.data.nombre,
          apellidoP: response.data.apellidop,
          apellidoM: response.data.apellidom,
          username: response.data.username,
          password: "",
        });
      } catch (error) {
        alert("Error al cargar la información");
      }
    };
    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    try {
      // Verificar la contraseña antes de actualizar los datos
      const verifyResponse = await axios.post(
        endpoints.verify,
        { password: formValues.password },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (verifyResponse.status !== 200) {
        alert("Contraseña incorrecta");
        return;
      }

      // Actualizar la información del usuario
      await axios.put(
        endpoints.cuenta,
        {
          nombre: formValues.nombre,
          apellidop: formValues.apellidoP,
          apellidom: formValues.apellidoM,
          username: formValues.username,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setUserInfo({
        ...userInfo,
        username: formValues.username,
      });
      alert("Información actualizada con éxito");
      window.location.reload();
    } catch (error) {
      alert("Error al actualizar la información");
    }
  };

  return (
    <div className="relative overflow-x-auto bg-gray-200 sm:rounded-lg w-full">
      <div className="grid grid-cols-3 gap-6 p-4">
        <div className="container-fluid shadow-md p-4 rounded-md bg-white">
          <div className="flex justify-center">
            <img
              className="rounded-full p-8"
              src="/perfil.jpg"
              alt="image description"
            />
          </div>
          <div className="grid grid-rows-2">
            <h1 className="text-3xl text-center mb-8 dark:text-gray-100 font-bold italic">
              {userInfo.username}
            </h1>
            <p className="text-center dark:text-gray-400 mt-2">
              Usted tiene permisos de: {userInfo.roles.join(", ")}
            </p>
          </div>
        </div>

        <div className="relative overflow-x-auto col-start-2 col-span-2 bg-white shadow-md sm:rounded-lg w-full">
          <form className="max-w-xlg mx-auto p-8" onSubmit={handleSubmit}>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <h1 className="text-2xl italic mb-8 text-black ">Tu informacion</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="text"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
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
                  name="apellidoP"
                  value={formValues.apellidoP}
                  onChange={handleChange}
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
                  name="apellidoM"
                  value={formValues.apellidoM}
                  onChange={handleChange}
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
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  name="imagen"
                  className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
              </div>
              <div className="relative col-span-2 pt-2">
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Contraseña Actual
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
        </div>
      </div>
    </div>
  );
};

export default FormCuenta;

/*<form className="max-w-xlg mx-auto px-8 pb-8">
            <h1 className="text-2xl italic mb-8 text-black ">
              Actualizar contraseña
            </h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 ">
              <div className="relative">
                <input
                  type="password"
                  value={""}
                  onChange={""}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="default-fillded"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Contraseña actual
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={""}
                  onChange={""}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="default-fillded"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Nueva contraseña
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={""}
                  onChange={""}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer"
                  placeholder=" "
                />
                <label
                  htmlFor="default-fillded"
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
          </form> */
