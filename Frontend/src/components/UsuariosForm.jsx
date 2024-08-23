import React from 'react'
import AddUserIcon from '../icons/AddUserIcon'
import { Permisos } from './Permisos'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'

export const UsuariosForm = () => {

    const [nombre, setNombre] = useState('');
    const [apellidop, setApellidop] = useState('');
    const [apellidom, setApellidom] = useState('');
    const [username, setUsername] = useState('');
    const [permisos, setPermisos] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(endpoints.usuarios, {
            nombre: nombre,
            apellidop: apellidop,
            apellidom: apellidom,
            username: username,
            permisos: permisos,
            password: password
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Listo!",
            text: "El usuario ha sido agregado con exito",
            showConfirmButton: false,
            timer: 2000
          });

        setNombre('');
        setApellidop('');
        setApellidom('');
        setUsername('');
        setPermisos('');
        setPassword('');
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">      
        <form className="max-w-xlg mx-auto p-8" onSubmit={handleSubmit}>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <h1 className="text-3xl italic mb-4 text-black ">Agregar usuario</h1>     
        <p className="mb-8">Llena los campos para agregar un nuevo usuario</p>  

        <div className="grid items-end gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
            <div className="relative">
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre(s)</label>
            </div>
            <div className="relative">
                <input type="text" value={apellidop} onChange={(e) => setApellidop(e.target.value)} id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="default_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellido paterno</label>
            </div>
            <div className="relative">
                <input type="text" value={apellidom} onChange={(e) => setApellidom(e.target.value)} id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="default_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellido materno</label>
            </div>
            <div className="relative">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="default_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre de usuario</label>
            </div>
            <div className="relative">
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="default_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Contraseña</label>
            </div>
            <div className="relative">
                <label htmlFor="default_select" className="sr-only">Permisos</label>
                <select id="default_select" className="block rounded-t-lg pb-2.5 px-2.5 pt-3 w-full text-sm text-gray-500 text-left pl-auto border-0 border-b-2 bg-gray-50 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option defaultValue={""}>Seleccione un permiso</option>
                    <option value="Lector">Lector</option>
                    <option value="Moderador">Moderador</option>
                    <option value="Administrador">Administrador</option>
                </select>
            </div>
        </div>

            <button type='submit' className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
                <AddUserIcon className="w-6 h-6 mr-2"/>
                Agregar Usuario
            </button> 
            <Permisos />
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
    </div>
  )
}
