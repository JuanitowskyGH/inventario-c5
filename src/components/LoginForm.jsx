import React from 'react'
import InventoryIcon from '../icons/InventoryIcon';
import UserIcon from '../icons/UserIcon';
import PasswordIcon from '../icons/PasswordIcon';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <form className="mt-16 bg-white p-6 rounded-lg shadow-lg shadow-black w-96">
          <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <h2 className="text-2xl font-serif mb-6 text-center text-black ">Sistema de Inventario C5</h2>
          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
          <UserIcon
            className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400"
            aria-hidden="true"/>
            <label htmlFor="user" className="ml-3 text-sm text-left font-medium text-gray-900 dark:text-white">Usuario</label>
          </div>
          <div className='mb-6'>
            <input type="text" id="user" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-tlax focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
          <PasswordIcon
            className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 "
            aria-hidden="true"/>
            <label htmlFor="user" className="ml-3 text-sm text-left font-medium text-gray-900 dark:text-white">Contraseña</label>
          </div>
          <div className="mb-6">
            <input type="password" placeholder="*********" id="password" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-tlax focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div className="items-center justify-between">
          <Link to={"/dashboard"} className=" text-white bg-blue-700 hover:text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Acceder
          </Link> 
          {/*<button type='link' className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Acceder
             <Link to="/dashboard" className=''></Link>
          </button>*/}
          </div>
          <hr className="w-full h-1 mx-auto mt-6  bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
  )
}
