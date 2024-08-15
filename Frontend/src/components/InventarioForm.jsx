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
        setFormData({ ...formData, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setFormData({ ...formData, imagen: file });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etiqueta</label>
                <input type="number" name='etiqueta' value={formData.etiqueta} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número anterior</label>
                <input type="text" name='numAnterior' value={formData.numAnterior} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  required/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                <input type="text" name='tipo' value={formData.tipo} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input type="text" name='marca' value={formData.marca} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                <input type="text" name='modelo' value={formData.modelo} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serie</label>
                <input type="text" name='serie' value={formData.serie} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                <input type="text" name='departamento' value={formData.departamento} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicacion</label>
                <input type="text" name='ubicacion' value={formData.ubicacion} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edicion</label>
                <input type="text" name='edicion' value={formData.edicion} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  required/>
            </div>
        </div>
        <div className="mb-5 row-span-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <textarea type="text" name='descripcion' value={formData.descripcion} onChange={handleChange} className="shadow-md bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  required/>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
            <div className="mb-5 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                <input type="text" name='responsable' value={formData.responsable} onChange={handleChange} placeholder='Ingrese el nombre completo del responsable' className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">                    
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Subir imagen</label>
                <input onChange={handleFileChange} name='imagen' className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                <p className="mt-1 text-sm text-gray-tlax dark:text-gray-300" id="file_input_help">PNG o JPG(MAX. 800x400px).</p>
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