import React from 'react'
import { Menu } from '../components/Menu'
import { AccesoRapido } from '../components/AccesoRapido'
import { Presentacion } from '../components/Presentacion'
import { Carrusel } from '../components/Carrusel'

export const Dashboard = () => {


  return (
    <div className='w-full h-full'>
      <div>
        <Menu/>
      </div>
      <div className='container-fluid w-auto h-72 mt-28 mx-12'>
        <div className="grid grid-cols-3 gap-4 p-2">
          <div className='bg-white col-span-2 rounded-lg'>

            <AccesoRapido/>
          </div>
          <div className="bg-white rounded-lg row-span-2">
            <Presentacion/>
          </div>
          <div className="bg-red-800 col-span-2">
            <Carrusel/>
          </div>
        </div>
      </div>
    </div>
  )
}
