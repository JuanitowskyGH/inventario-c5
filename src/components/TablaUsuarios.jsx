import React from 'react'
import { Link } from 'react-router-dom'
import DeleteUserIcon from '../icons/DeleteUserIcon';
import EditUserIcon from '../icons/EditUserIcon';
import { Tooltip } from 'flowbite-react';

export const TablaUsuarios = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
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
            </tbody>
        </table>
    </div>
  )
}
