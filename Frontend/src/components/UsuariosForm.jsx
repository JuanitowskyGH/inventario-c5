import React from 'react'
import AddUserIcon from '../icons/AddUserIcon'
import { Permisos } from './Permisos'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'
import authService from '../services/authService'

export const UsuariosForm = () => {

    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        nombre: '',
        apellidop: '',
        apellidom: '',
        username: '',
        permisos: '',
        password: ''
    });

    useEffect(() => {
        setLoading(false);
    }, []);

    const [errors, setErrors] = useState({});

    const cleanForm = () => {
        setFormData({
            nombre: '',
            apellidop: '',
            apellidom: '',
            username: '',
            permisos: '',
            password: ''
        });
        setErrors({});
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: !value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nombre, apellidop, apellidom, username, permisos, password } = formData;
    
        const newErrors = {
            nombre: !nombre,
            apellidop: !apellidop,
            apellidom: !apellidom,
            username: !username,
            permisos: !permisos,
            password: !password
        };
    
        if (Object.values(newErrors).some(error => error)) {
            setErrors(newErrors);
            Swal.fire({
                icon: 'error',
                title: 'Campos vacíos',
                text: 'Por favor, complete todos los campos antes de enviar el formulario.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
    
        try {

            const user = authService.getCurrentUser();
            if(!user) {
                throw new Error('Usuario no autenticado');
            }

            await axios.post(endpoints.usuarios, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Listo!",
                text: "El usuario se ha creado con exito",
                showConfirmButton: false,
                timer: 2000
            });
            cleanForm();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
        <div className='text-center'>
            <div role="status">
                <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        );
      }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">      
        <form className="max-w-xlg mx-auto p-8" onSubmit={handleSubmit}>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <h1 className="text-3xl italic mb-4 text-black ">Agregar usuario</h1>     
        <p className="mb-8">Llena los campos para agregar un nuevo usuario.<br/>
        Los campos marcados con * son obligatorios.
        </p>  

        <div className="grid items-end gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
            <div className="relative">
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} id="nombre" className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${errors.nombre ? 'input-error' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`} placeholder=" " />
                <label htmlFor="nombre" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre(s) *</label>
            </div>
            <div className="relative">
                <input type="text" name="apellidop" value={formData.apellidop} onChange={handleChange} id="apellidop" className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${errors.apellidop ? 'input-error' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`} placeholder=" " />
                <label htmlFor="apellidop" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellido paterno *</label>
            </div>
            <div className="relative">
                <input type="text"  name="apellidom" value={formData.apellidom} onChange={handleChange} id="apellidom" className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${errors.apellidom ? 'input-error' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`} placeholder=" " />
                <label htmlFor="apellidom" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellido materno *</label>
            </div>
            <div className="relative">
                <input type="text" name="username" value={formData.username} onChange={handleChange} id="username" className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${errors.username ? 'input-error' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`} placeholder=" " />
                <label htmlFor="username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre de usuario *</label>
            </div>
            <div className="relative">
                <input type="text" name="password" value={formData.password} onChange={handleChange} id="password" className={`block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${errors.password ? 'input-error' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer`} placeholder=" " />
                <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Contraseña *</label>
            </div>
            <div className="relative">
                <label htmlFor="default_select" className="sr-only">Permisos</label>
                <select id="default_select" name="permisos" value={formData.permisos} onChange={handleChange} className={`block rounded-t-lg pb-2.5 px-2.5 pt-3 w-full text-sm text-gray-500 text-left pl-auto border-0 border-b-2 bg-gray-50 ${errors.permisos ? 'input-error' : 'border-gray-300'} appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer`}>
                    <option defaultValue={""}>Seleccione un permiso *</option>
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
