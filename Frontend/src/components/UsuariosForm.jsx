import React from 'react'
import AddUserIcon from '../icons/AddUserIcon'
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(endpoints.usuarios, {
            nombre: nombre,
            apellidop: apellidop,
            apellidom: apellidom,
            username: username,
            permisos: permisos
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
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">      
        <form className="max-w-xlg mx-auto p-8" onSubmit={handleSubmit}>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <h1 className="text-3xl italic mb-4 text-black ">Agregar usuario</h1>     
        <p className="mb-8">Llena los campos para agregar un nuevo usuario</p>  
        
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre(s)</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                <input type="text" value={apellidop} onChange={(e) => setApellidop(e.target.value)}  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno</label>
                <input type="text" value={apellidom} onChange={(e) => setApellidom(e.target.value)}  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5 col-span-2">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permisos</label>
                <select id="countries" value={permisos} onChange={(e) => setPermisos(e.target.value)} className="bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled>Seleccione</option>
                    <option>Super Administrador</option>
                    <option>Administrador</option>
                    <option>Lector</option>
                </select>
            </div>
        </div>
        <button type='submit' className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
            <AddUserIcon className="w-6 h-6 mr-2"/>
            Agregar Usuario
        </button> 
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
    </div>
  )
}
