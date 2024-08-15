import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EditInventoryIcon from '../icons/EditInventoryIcon'
import Discard from '../icons/DiscardIcon'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'

const URI = "http://localhost:4000/api/inventario/";

export const FormUpdateInventario = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [inventario, setInventario] = useState({
        etiqueta: '',
        numAnterior: '',
        tipo: '',
        marca: '',
        modelo: '',
        serie: '',
        departamento: '',
        ubicacion: '',
        edicion: '',
        responsable: '',
        imagen: '',
        descripcion: ''
        });

    useEffect(() => {
        const getInventario = async () => {
            try {
                const response = await axios.get(URI + id);
                setInventario(response.data);
            } catch (error) {
                console.error("Error fetching inventory data: ", error);
            }
        };
        getInventario();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInventario(prevInventario => ({
            ...prevInventario,
            [name]: value
        }));
    };

    const updateInventario = async (e) => {
        e.preventDefault();
        const confirm = await Swal.fire({
            title: "¿Esta seguro de guardar los cambios?",
            text: "Se actualizaran los datos del registro",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0B1556",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, actualizar",
            cancelButtonText: "Cancelar"
        }) 
        if (confirm.isConfirmed) {
                await axios.put(URI + id, inventario);
                navigate('/inventario');
                Swal.fire({
                    title: "Datos actualizados",
                    text: "El registro ha sido actualizado exitosamente",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });    
        }
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <form className="max-w-xlg mx-auto p-8" onSubmit={updateInventario}>
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <h1 className="text-3xl italic mb-4 text-black ">Actualizar registro</h1>     
        <p className="mb-8">Actualiza los datos necesarios y guarda los cambios</p>  
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etiqueta</label>
                <input type="number" name='etiqueta' value={inventario.etiqueta} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número anterior</label>
                <input type="text" name='numAnterior' value={inventario.numAnterior} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                <input type="text" name='tipo' value={inventario.tipo} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input type="text" name='marca' value={inventario.marca} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                <input type="text" name='modelo' value={inventario.modelo} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serie</label>
                <input type="text" name='serie' value={inventario.serie} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                <input type="text" name='departamento' value={inventario.departamento} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicacion</label>
                <input type="text" name='ubicacion' value={inventario.ubicacion} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edicion</label>
                <input type="text" name='edicion' value={inventario.edicion} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
            </div>
        </div>

        
        <div className="grid lg:grid-cols-2 gap-4 pt-5">
            <div className="flex justify-center row-span-3">
                <img src="/inventory.jpg" alt="imagen" className="w-auto h-auto rounded-md shadow-md"/>
            </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
                    <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                            <input type="text" name='responsable' value={inventario.responsable} onChange={handleChange} placeholder='Ingrese el nombre completo del responsable' className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
                    </div>
                    <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Subir imagen</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-tlax dark:text-gray-300" id="file_input_help">PNG o JPG(MAX. 800x400px).</p>
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                        <textarea type="text" name='descripcion' value={inventario.descripcion} onChange={handleChange} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light" required />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-5 px-16">
                <button className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
                    <EditInventoryIcon className="w-6 h-6 mr-2"/>
                    Actualizar Registro
                </button>                    
                <Link to="/inventario" replace className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300">
                    <Discard className="w-6 h-6 mr-2"/>
                    Cancelar
                </Link>
                </div>
            </div>
            <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
    </div>
  )
}
