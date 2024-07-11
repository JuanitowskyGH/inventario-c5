import React from 'react'
import EditInventoryIcon from '../icons/EditInventoryIcon';
import DeleteInventoryIcon from '../icons/DeleteInventoryIcon';
import { Link } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';

export const TablaInventario = () => {
  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Our products
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </th>
                    <td className="px-6 py-4">
                        2003
                    </td>
                    <td className="px-6 py-4">
                        MOB036615
                    </td>
                    <td className="px-6 py-4">
                        MESA
                    </td>
                    <td className="px-6 py-4">
                        MESA PARA JUNTAS RECTANGULAR DE CRISTAL FACT. A-19...
                    </td>
                    <td className="px-6 py-4">
                        Sin marca
                    </td>
                    <td className="px-6 py-4">
                        Sin modelo
                    </td>
                    <td className="px-6 py-4">
                        S/N
                    </td>
                    <td className="px-6 py-4">
                        DIRECCION DE C5
                    </td>
                    <td className="px-6 py-4">
                        ALEJANDRO ANDRES MENA RIVERA
                    </td>
                    <td className="px-6 py-4">
                        SISTEMAS 
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="px-6 py-4">
                        2
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar registro">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar registro">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </th>
                    <td className="px-6 py-4">
                        2003
                    </td>
                    <td className="px-6 py-4">
                        MOB036615
                    </td>
                    <td className="px-6 py-4">
                        MESA
                    </td>
                    <td className="px-6 py-4">
                        MESA PARA JUNTAS RECTANGULAR DE CRISTAL FACT. A-19...
                    </td>
                    <td className="px-6 py-4">
                        Sin marca
                    </td>
                    <td className="px-6 py-4">
                        Sin modelo
                    </td>
                    <td className="px-6 py-4">
                        S/N
                    </td>
                    <td className="px-6 py-4">
                        DIRECCION DE C5
                    </td>
                    <td className="px-6 py-4">
                        ALEJANDRO ANDRES MENA RIVERA
                    </td>
                    <td className="px-6 py-4">
                        SISTEMAS 
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="px-6 py-4">
                        2
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar registro">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar registro">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </th>
                    <td className="px-6 py-4">
                        2003
                    </td>
                    <td className="px-6 py-4">
                        MOB036615
                    </td>
                    <td className="px-6 py-4">
                        MESA
                    </td>
                    <td className="px-6 py-4">
                        MESA PARA JUNTAS RECTANGULAR DE CRISTAL FACT. A-19...
                    </td>
                    <td className="px-6 py-4">
                        Sin marca
                    </td>
                    <td className="px-6 py-4">
                        Sin modelo
                    </td>
                    <td className="px-6 py-4">
                        S/N
                    </td>
                    <td className="px-6 py-4">
                        DIRECCION DE C5
                    </td>
                    <td className="px-6 py-4">
                        ALEJANDRO ANDRES MENA RIVERA
                    </td>
                    <td className="px-6 py-4">
                        SISTEMAS 
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="px-6 py-4">
                        2
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar registro">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar registro">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteInventoryIcon />
                            </span>
                        </Link>
                        </Tooltip>
                    </td>
                </tr>
            </tbody>
        </table>
        
        {/* PAGINATION */}
        <div className="flex flex-col items-left pl-12 py-4">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Prev
                </button>
                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
