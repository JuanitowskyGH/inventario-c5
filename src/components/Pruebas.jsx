import React from 'react'


export const Pruebas = () => {
  return (
    <div className="relative overflow-x-auto bg-gray-200 sm:rounded-lg w-full">
        <div className="grid grid-cols-5 gap-6 p-4">
            <div className='container-fluid shadow-md p-4 rounded-md bg-white'>
                <div className='flex justify-center'>               
                    <img className="rounded-full p-8" src="/perfil.jpg" alt="image description"/> 
                </div>
                <div className="container mx-auto px-6 py-6 ">
                    <h1 className="text-3xl text-center dark:text-gray-100 font-bold italic">Juan Pablo Vázquez Contreras</h1>
                    <p className="text-center dark:text-gray-400 mt-2">Usted tiene permisos de: [LECTOR]</p>
                </div>
            </div>

            <div className="relative overflow-x-auto col-span-4 bg-white shadow-md sm:rounded-lg w-full">                
                <form className="max-w-xlg mx-auto p-8">
                <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
                <h1 className="text-2xl italic mb-8 text-black ">Tu informacion</h1>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5 '>
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
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                        <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-5 col-span-2">                    
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Cambiar imagen</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                        <p className="mt-1 text-sm text-gray-tlax dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                </div>

                <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
                <h1 className="mt-6 text-2xl italic text-black ">Actualizar contraseña</h1>


                    <button type="submit" className="mt-5 text-white bg-blue-tlax hover:bg-blue-tlax-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar informacion</button>
                </form>
            </div>
        </div>
    </div>
  )
}
