import React from 'react'
import { Menu } from '../components/Menu'
import { AccesoRapido } from '../components/AccesoRapido'
import { Presentacion } from '../components/Presentacion'
import { Footer } from '../components/Footer'

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
          <div className="bg-white rounded-lg row-span-12">
            <Presentacion/>
          </div>
          <div className="bg-red-800 col-span-2">03</div>
          <div className="col-span-2 bg-green-100">04</div>
          <div className="...">05</div>
          <div className="...">06</div>
          <div className="col-span-2 ...">07</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
