import React from 'react'
import { Menu } from '../components/Menu'
import { UsuariosForm } from '../components/UsuariosForm'

export const AddUsuarios = () => {
  return (
    <div className='absolute w-full h-full'>
    <div>
        <Menu/>
    </div>
    <div className='container-fluid w-auto px-10 py-10 rounded-md h-max mt-28 mx-12 bg-gray-200'>
        <div className=''>
            <UsuariosForm/>
        </div>
    </div>
</div>
  )
}