import React from 'react'
import { Menu } from '../components/Menu'
import { FormCuenta } from '../components/FormCuenta'

export const Cuenta = () => {
  return (
    <div className='absolute w-full h-full'>
        <div>
            <Menu/>
        </div>
        <div className='container-fluid w-auto px-8 py-8 rounded-md h-max mt-28 mx-12 bg-gray-200'>
            <div className=''>
                <FormCuenta/>
            </div>
        </div>
    </div>
  )
}
