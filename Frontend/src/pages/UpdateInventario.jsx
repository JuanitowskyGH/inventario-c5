import React from 'react'
import { FormUpdateInventario } from '../components/FormUpdateInventario'
import { Menu } from '../components/Menu'
import authService from '../services/authService'

export const UpdateInventario = () => {
  const user = authService.getCurrentUser();
  return (
    <div className='absolute w-full h-full'>
    <div>
        <Menu role={user?.role}/>
    </div>
    <div className='container-fluid w-auto px-5 py-5 rounded-md h-max mt-28 mx-12 bg-gray-200'>
        <div className=''>
            <FormUpdateInventario/>
        </div>
    </div>
</div>
  )
}
