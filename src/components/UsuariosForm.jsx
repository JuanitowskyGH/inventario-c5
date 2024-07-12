import React from 'react'

export const UsuariosForm = () => {
  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <form className="max-w-xlg mx-auto p-8">
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre(s)</label>
                <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5 col-span-2">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permisos</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option className='disabled'>Seleccione</option>
                    <option>Super Administrador</option>
                    <option>Administrador</option>
                    <option>Lector</option>
                </select>
            </div>
        </div>
            <button type="submit" className="text-white bg-blue-tlax hover:bg-blue-tlax-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar registro</button>
        </form>
    </div>
  )
}
