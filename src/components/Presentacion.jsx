import React from 'react'

export const Presentacion = () => {
  return (
    <div className="container mx-auto px-6 py-6 ">
        <img src="/tlx.png" alt="Logo Tlaxcala" className="lg:w-38 lg:h-40 mx-auto"/> 
        <div className='pt-12'>
            <h1 className="text-3xl text-center text-gray-800 dark:text-gray-100 font-bold italic">Bienvenido al sistema de inventario</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-2">Este sistema te permitira llevar un control de los activos de la institucion</p>
            
        </div>    
    </div>
  )
}
