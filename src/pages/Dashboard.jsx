import React from 'react'
import { Menu } from '../components/Menu'
import { AccesoRapido } from '../components/AccesoRapido'
import { Presentacion } from '../components/Presentacion'

export const Dashboard = () => {


  return (
    <div className='absolute w-full h-full'>
      <div>
        <Menu/>
      </div>
      <div className='container-fluid w-auto h-72 mt-28 mx-12'>
        <div className="grid grid-cols-3 gap-4 p-2">
          <div className='bg-gray-200 col-span-2 rounded-lg'>
            <div className='flex justify-center pt-4 text-3xl text-default-400 italic'>
                <b>Accesos Rapidos</b>
            </div>
            <AccesoRapido/>
          </div>
          <div className="bg-gray-200 rounded-lg">
            <Presentacion/>
          </div>
          <div className="bg-red-800">03</div>
          <div className="col-span-2 bg-green-100">04</div>
          <div className="...">05</div>
          <div className="...">06</div>
          <div className="col-span-2 ...">07</div>
        </div>
      </div>
    </div>
  )
}
