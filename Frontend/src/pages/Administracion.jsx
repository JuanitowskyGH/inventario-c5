import React from 'react'

export const Administracion = () => {
  return (
    <div className="-bottom-56 min-h-screen">
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-col items-center p-28 bg-white ">
          <hr className="w-full h-1 mx-auto my-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <img src="/danger.png" alt="Logo" className=" py-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white max-w-xs"/>
          <h2 className="text-2xl italic mb-6 text-center text-black ">SIN AUTORIZACION</h2>
          <p className="pb-10 text-gray-500 dark:text-gray-400">No tienes permisos para acceder a esta página.</p>
          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          </div>
      </div>
    </div>
  );
}
