import React from 'react'
import { Link } from 'react-router-dom'
import DeleteUserIcon from '../icons/DeleteUserIcon';
import EditUserIcon from '../icons/EditUserIcon';
import { Tooltip } from 'flowbite-react';

export const TablaUsuarios = () => {
  return (
    <div className="relative overflow-x-auto shadow-lg bg-white sm:rounded-lg w-full">
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
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Apellidos
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Usuario
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Permisos
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Imagen
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
                        Juan
                    </td>
                    <td className="px-6 py-4">
                        Vazquez
                    </td>
                    <td className="px-6 py-4">
                        juanvazquez
                    </td>
                    <td className="px-6 py-4">
                        Administrador
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditUserIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteUserIcon />
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
                        Juan
                    </td>
                    <td className="px-6 py-4">
                        Vazquez
                    </td>
                    <td className="px-6 py-4">
                        juanvazquez
                    </td>
                    <td className="px-6 py-4">
                        Administrador
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditUserIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteUserIcon />
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
                        Juan
                    </td>
                    <td className="px-6 py-4">
                        Vazquez
                    </td>
                    <td className="px-6 py-4">
                        juanvazquez
                    </td>
                    <td className="px-6 py-4">
                        Administrador
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditUserIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteUserIcon />
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
                        Juan
                    </td>
                    <td className="px-6 py-4">
                        Vazquez
                    </td>
                    <td className="px-6 py-4">
                        juanvazquez
                    </td>
                    <td className="px-6 py-4">
                        Administrador
                    </td>
                    <td className="px-6 py-4">
                        img
                    </td>
                    <td className="relative flex py-5 pl-10 items-center gap-2">
                        <Tooltip color='primary' content="Editar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-blue-800">
                                <EditUserIcon />
                            </span>
                        </Link>
                        </Tooltip>
                        <Tooltip color='primary' content="Eliminar usuario">
                        <Link>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-red-800">
                                <DeleteUserIcon />
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
