import React from 'react'
import EditInventoryIcon from '../icons/EditInventoryIcon'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'

export const InventarioForm = () => {

    const [etiqueta, setEtiqueta] = useState('');
    const [numAnterior, setNumeroAnterior] = useState('');
    const [tipo, setTipo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [serie, setSerie] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [edicion, setEdicion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [responsable, setResponsable] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(endpoints.inventario, {
            etiqueta: etiqueta,
            numAnterior: numAnterior,
            tipo: tipo,
            marca: marca,
            modelo: modelo,
            serie: serie,
            departamento: departamento,
            ubicacion: ubicacion,
            edicion: edicion,
            descripcion: descripcion,
            responsable: responsable
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Listo!",
            text: "El registro ha sido agregado con exito",
            showConfirmButton: false,
            timer: 2000
          });
        setEtiqueta('');
        setNumeroAnterior('');
        setTipo('');
        setMarca('');
        setModelo('');
        setSerie('');
        setDepartamento('');
        setUbicacion('');
        setEdicion('');
        setDescripcion('');
        setResponsable('');
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <form className="max-w-xlg mx-auto p-8" onSubmit={handleSubmit}>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <h1 className="text-3xl italic mb-4 text-black ">Agregar registro</h1>     
        <p className="mb-8">Llena los campos para agregar un nuevo registro</p>  
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etiqueta</label>
                <input type="number" value={etiqueta} onChange={(e) => setEtiqueta(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número anterior</label>
                <input type="text" value={numAnterior} onChange={(e) => setNumeroAnterior(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serie</label>
                <input type="text" value={serie} onChange={(e) => setSerie(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicacion</label>
                <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edicion</label>
                <input type="text" value={edicion} onChange={(e) => setEdicion(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
        </div>
        <div className="mb-5 row-span-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <textarea type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="shadow-md bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
            <div className="mb-5 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                <input type="text" value={responsable} onChange={(e) => setResponsable(e.target.value)} placeholder='Ingrese el nombre completo del responsable' className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"  />
            </div>
            <div className="mb-5">                    
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Subir imagen</label>
                <input className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
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
