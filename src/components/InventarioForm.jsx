import React from 'react'

export const InventarioForm = () => {
  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
        <form className="max-w-xlg mx-auto p-8">
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etiqueta</label>
                <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número anterior</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serie</label>
                <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicacion</label>
                <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edicion</label>
                <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
            </div>
        </div>
        <div className="mb-5 row-span-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
                </div>
            <div className="grid lg:grid-cols-2 gap-5">
                <div className="mb-5 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                    <input type="password" placeholder='Ingrese el nombre completo del responsable' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">                    
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Subir imagen</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                    <p className="mt-1 text-sm text-gray-tlax dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-tlax hover:bg-blue-tlax-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar registro</button>
        </form>
    </div>
  )
}
