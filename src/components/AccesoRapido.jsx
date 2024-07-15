import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../icons/UserIcon'
import InvetoryIcon from '../icons/InventoryIcon'
import ReportIcon from '../icons/ReportIcon'

export const AccesoRapido = () => {
  return (
    <div className="container mx-auto px-6 py-6">
        <hr className="w-full h-1 mx-auto mb-3 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        <div className='flex justify-center pb-6 text-3xl text-default-400 italic'>
            <b>Accesos Rapidos</b>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 '>
            <div className="flex p-3 justify-center items-center shadow-md shadow-black text-3xl rounded-lg text-white bg-blue-tlax hover:bg-blue-tlax-light focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                <Link to={"/usuarios"} >
                    Usuarios
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
                        <UserIcon className="w-32 h-32 p-3"/>
                    </span>
                </Link>
            </div>
            <div className="flex justify-center items-center text-3xl shadow-md shadow-black rounded-lg text-white bg-blue-tlax hover:bg-blue-tlax-light focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                <Link to={"/inventario"} >
                    Inventario
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
                        <InvetoryIcon className="w-32 h-32 p-3"/>
                    </span>
                </Link>
            </div>
            <div className="flex justify-center items-center text-3xl shadow-md shadow-black rounded-lg text-white bg-blue-tlax hover:bg-blue-tlax-light focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                <Link to={""} >
                    Reportes
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
                        <ReportIcon className="w-32 h-32 p-3"/>
                    </span>
                </Link>
            </div>
        </div>
        <hr className="w-full h-1 mx-auto mt-6 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    </div>
    /*
                <Link to={""} className="text-sm px-5 py-2.5 me-2 mb-2 text-white bg-blue-700 hover:text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50 text-white">
                    <UserIcon />
                </span>
            </Link>*/
  )
}
