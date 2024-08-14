import React, { useEffect, useState } from 'react'
import EditInventoryIcon from '../icons/EditInventoryIcon';
import DeleteInventoryIcon from '../icons/DeleteInventoryIcon';
import { Link } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import axios from 'axios';
import endpoints from '../services/endpoints';
import Swal from 'sweetalert2';

export const TablaInventario = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getInventario = async (page = 1) => {
        const response = await axios.get(endpoints.inventario, {
            params: { page, limit: 10 }
        });
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
    }

    useEffect(() => {
        getInventario(currentPage);
    }, [currentPage]);

    const deleteRegistro = async (id) => {
        const confirm = await Swal.fire({
            title: "¿Esta seguro de eliminar este registro?",
            text: "No habrá registro de él una vez eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0B1556",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        });
        if (confirm.isConfirmed) {
            await axios.delete(`${endpoints.inventario}/${id}`);
            getInventario();
            Swal.fire({
                icon: 'success',
                title: 'Registro eliminado',
                text: 'El registro ha sido eliminado con éxito',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Lista de registros
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Aqui puedes ver la lista de los registros con detalles. </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Etiqueta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Numero anterior
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tipo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Descripcion
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Marca
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Modelo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Serie
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Departamento
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Responsable
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ubicacion
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Imagen
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Edicion
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.id}
                    </th>
                    <td className="px-6 py-4">
                        {item.etiqueta }
                    </td>
                    <td className="px-6 py-4">
                        {item.numAnterior}
                    </td>
                    <td className="px-6 py-4">
                        {item.tipo}
                    </td>
                    <td className="px-6 py-4">
                        {item.descripcion}
                    </td>
                    <td className="px-6 py-4">
                        {item.marca}
                    </td>
                    <td className="px-6 py-4">
                        {item.modelo}
                    </td>
                    <td className="px-6 py-4">
                        {item.serie}
                    </td>
                    <td className="px-6 py-4">
                        {item.departamento}
                    </td>
                    <td className="px-6 py-4">
                        {item.responsable}
                    </td>
                    <td className="px-6 py-4">
                        {item.ubicacion}
                    </td>
                    <td className="px-6 py-4">
                        {item.imagen}
                    </td>
                    <td className="px-6 py-4">
                        {item.edicion}
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar registro">
                        <Link to={`/updateinventario/${item.id}`}>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar registro">
                        <Link>
                            <span
                                className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800"
                                onClick={() => deleteRegistro(item.id)}
                            >
                                <DeleteInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        
         {/* PAGINATION */}
        <div className="flex flex-col items-left pl-12 py-4">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Mostrando <span className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * 10 + 1}</span> a <span className="font-semibold text-gray-900 dark:text-white">{Math.min(currentPage * 10, data.length)}</span> de <span className="font-semibold text-gray-900 dark:text-white">{totalPages * 10}</span> Registros
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                >
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Anterior
                </button>
                <button
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                >
                Siguiente
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
