import React from 'react'
import UserIcon from '../icons/UserIcon';
import PasswordIcon from '../icons/PasswordIcon';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <form className="mt-16 bg-white p-6 rounded-lg shadow-lg shadow-black w-96">
          <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <h2 className="text-2xl italic mb-6 text-center text-black ">Sistema de Inventario C5</h2>
          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
          <div className="flex pb-8">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <UserIcon/>
            </span>
            <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-tlax block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre de usuario"/>
          </div>
          <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <div className="flex pb-8">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <PasswordIcon/>
            </span>
            <input type="password" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900  focus:border-blue-tlax block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"/>
          </div>
          <div className="flex justify-center">
          <Link to={"/dashboard"} className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
            Acceder
          </Link> 
          </div>
          <hr className="w-full h-1 mx-auto mt-4  bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
  )
}