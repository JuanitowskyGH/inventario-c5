import React from 'react'
import { Menu } from '../components/Menu'
import { TablaInventario } from '../components/TablaInventario'

export const Inventario = () => {
  return (
    <div className='absolute w-full h-full'>
        <div>
            <Menu/>
        </div>
        <div className='container-fluid w-auto px-5 py-5 rounded-md h-max mt-28 mx-12 bg-gray-200'>
            <div className=''>
                <TablaInventario/>
            </div>
        </div>
    </div>
  )
}
