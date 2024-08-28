import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import EditInventoryIcon from '../icons/EditInventoryIcon'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'
import ClearIcon from '../icons/ClearIcon'

export const InventarioForm = () => {
    const [formData, setFormData] = useState({
        etiqueta: '',
        numAnterior: '',
        tipo: '',
        marca: '',
        modelo: '',
        serie: '',
        departamento: '',
        ubicacion: '',
        edicion: '',
        descripcion: '',
        responsable: '',
        imagen: ''
    });

    const cleanForm = () => {
        setFormData({
            etiqueta: '',
            numAnterior: '',
            tipo: '',
            marca: '',
            modelo: '',
            serie: '',
            departamento: '',
            ubicacion: '',
            edicion: '',
            descripcion: '',
            responsable: '',
            imagen: ''
        });
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value || '' // Asegurarse de que el valor nunca sea undefined
        }));
    };
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setFormData({ ...formData, imagen: file });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.etiqueta === '' || 
            formData.numAnterior === '' || 
            formData.tipo === '' || 
            formData.marca === '' || 
            formData.departamento === '' ||
            formData.ubicacion === '' ||
            formData.edicion === '' ||
            formData.descripcion === '' ||
            formData.responsable === '') {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Campos vacios",
                text: "Por favor completa todos los campos",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        axios.post(endpoints.inventario, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .catch((error) => {
            console.error(error);
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Listo!",
            text: "El registro ha sido agregado con exito",
            showConfirmButton: false,
            timer: 2000
        });
        setFormData({
            etiqueta: '',
            numAnterior: '',
            modelo: '',
            serie: '',
            edicion: '',
            descripcion: '',
            imagen: ''
        });
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <div className='max-w-xlg mx-auto px-8 pt-8'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl italic mb-4 text-black">Agregar registro</h1>
                    <p>Llena los campos para agregar un nuevo registro</p>
                </div>
                <button onClick={cleanForm} className="flex flex-col px-5 py-3 text-base font-medium text-center items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-105 hover:bg-blue-tlax-light duration-300">

                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
                        <ClearIcon className="w-10 h-10 mr-2" />
                    </span>
                    <center>Limpiar Formulario</center>
                </button>
            </div>
        </div>
        <form className="max-w-xlg mx-auto p-8" onSubmit={handleSubmit} encType='multipart/form-data'>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <div className="grid items-end gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
            <div className="relative">
                <input type="number" min={1} name="etiqueta" value={formData.etiqueta} onChange={handleChange} id="etiqueta" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="etiqueta" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Etiqueta</label>
            </div>
            <div className="relative">
                <input type="text" name="numAnterior" value={formData.numAnterior} onChange={handleChange}  id="numAnterior" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="numAnterior" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número anterior</label>
            </div>
            <div className="relative">
                <input type="text" name="tipo" value={formData.tipo} onChange={handleChange}  id="tipo" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="tipo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Tipo</label>
            </div>
            <div className="relative">
                <input type="text" name="marca" value={formData.marca} onChange={handleChange}  id="marca" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="marca" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Marca</label>
            </div>
            <div className="relative">
                <input type="text" name="modelo" value={formData.modelo} onChange={handleChange}  id="modelo" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="modelo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Modelo</label>
            </div>
            <div className="relative">
                <input type="text" name="serie" value={formData.serie} onChange={handleChange}  id="serie" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="serie" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Serie</label>
            </div>
            <div className="relative">
                <input type="text" name="departamento" value={formData.departamento} onChange={handleChange}  id="departamento" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="departamento" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Departamento</label>
            </div>
            <div className="relative">
                <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange}  id="ubicacion" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="ubicacion" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ubicacion</label>
            </div>
            <div className="relative">
                <input type="text" name="edicion" value={formData.edicion} onChange={handleChange}  id="edicion" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="edicion" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Edicion</label>
            </div>
        </div>
        <div className="relative row-span-3">
            <textarea type="text" name='descripcion' value={formData.descripcion || ''} onChange={handleChange} id="descripcion" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
            <label htmlFor="descripcion" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Descripcion</label>
         </div>
        <div className="grid items-end gap-6 mb-6 mt-6 lg:grid-cols-2">
        <div className="relative">
                <input type="text" name="responsable" value={formData.responsable} onChange={handleChange}  id="responsable" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                <label htmlFor="responsable" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Responsable</label>
            </div>
            <div className="">                    
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Subir imagen (JPG, JPEG o PNG)</label>
                <input onChange={handleFileChange} name='imagen' className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                
            </div>
        </div>
        <button type="submit" className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-105 hover:bg-blue-tlax-light duration-300">
            <EditInventoryIcon className="w-6 h-6 mr-2"/>
            Agregar Registro
        </button> 
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
    </div>
  )
}