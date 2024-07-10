import './App.css'
import { Sidebar } from './components/Sidebar'
import { TopNavbar } from './components/TopNavbar'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

//Componentes
import { TablaUsuarios } from './components/TablaUsuarios'
import { TablaInventario } from './components/TablaInventario'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuarios" element={<TablaUsuarios />} />
      <Route path="/inventario" element={<TablaInventario />} />
    </Routes>
    </>
  )
}

export default App
