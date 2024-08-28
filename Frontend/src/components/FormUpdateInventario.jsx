import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditInventoryIcon from '../icons/EditInventoryIcon';
import Discard from '../icons/DiscardIcon';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import endpoints from '../services/endpoints';

const URI = "http://localhost:4000/api/inventario/";

export const FormUpdateInventario = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inventario, setInventario] = useState({
        id: '',
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
    const [file, setFile] = useState(null);

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

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
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
        });
        if (confirm.isConfirmed) {
            const formData = new FormData();
            for (const key in inventario) {
                formData.append(key, inventario[key]);
            }
            if (file) {
                formData.append('imagen', file);
            }
            await axios.put(URI + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/inventario');
            Swal.fire({
                title: "Datos actualizados",
                text: "El registro ha sido actualizado exitosamente",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    const imgUrl = inventario.imagen ? `${endpoints.base}${inventario.imagen.replace(/\\/g, '/')}` : '/inventory.jpg';

    return (
        <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
            <form className="max-w-xlg mx-auto p-8" onSubmit={updateInventario}>
                <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
                <h1 className="text-3xl italic mb-4 text-black ">Actualizar registro</h1>
                <p className="mb-8">Actualiza los datos necesarios y guarda los cambios</p>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
                  <div className="relative">
                      <input type="text" disabled value={inventario.id || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número de registro</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='etiqueta' value={inventario.etiqueta || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Etiqueta</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='numAnterior' value={inventario.numAnterior || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número anterior</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='tipo' value={inventario.tipo || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Tipo</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='marca' value={inventario.marca || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Marca</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='modelo' value={inventario.modelo || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Modelo</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='serie' value={inventario.serie || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Serie</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='departamento' value={inventario.departamento || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Departamento</label>
                  </div>
                  <div className="relative">
                      <input type="text" name='ubicacion' value={inventario.ubicacion || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                      <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ubicacion</label>
                  </div>
              </div>
                <div className="grid lg:grid-cols-2 gap-4 pt-5">
                    <div className="flex justify-center row-span-3 my-7 px-12 pb-12 sm:my-28">
                        <img src={imgUrl} alt="imagen" className="w-auto h-auto rounded-md shadow-md" />
                    </div>
                    <div className="grid grid-rows-4 grid-flow-col gap-4 mt-5">
                        <div className="relative">
                            <input type="text" name="edicion" value={inventario.edicion || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                            <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Edicion</label>
                        </div>
                        <div className="relative">
                            <input type="text" name="responsable" value={inventario.responsable || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                            <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Responsable</label>
                        </div>
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Cambiar imagen (JPG, JPEG o PNG)</label>
                            <input onChange={handleFileChange} name='imagen' className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                        </div>
                        <div className="relative">
                            <textarea name="descripcion" value={inventario.descripcion || ''} onChange={handleChange}  className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                            <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Descripcion</label>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 px-16 py-8">
                        <button className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
                            <EditInventoryIcon className="w-6 h-6 mr-2" />
                            Actualizar Registro
                        </button>
                        <Link to="/inventario" replace className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300">
                            <Discard className="w-6 h-6 mr-2" />
                            Cancelar
                        </Link>
                    </div>
                </div>
                <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            </form>
        </div>
    );
};
