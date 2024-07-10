import React from 'react'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { TopNavbar } from '../components/TopNavbar'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {


  return (
    <div className='absolute w-full h-full'>
      <div>
        <Menu/>
      </div>
      <div className='container-fluid bg-white w-96 h-72 mt-32 ml-20'>

      </div>
    </div>
  )
}
