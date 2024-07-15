import React from 'react'
import { FormUpdateInventario } from '../components/FormUpdateInventario'
import { Menu } from '../components/Menu'

export const UpdateInventario = () => {
  return (
    <div className='absolute w-full h-full'>
    <div>
        <Menu/>
    </div>
    <div className='container-fluid w-auto px-10 py-10 rounded-md h-max mt-28 mx-12 bg-gray-200'>
        <div className=''>
            <FormUpdateInventario/>
        </div>
    </div>
</div>
  )
}
