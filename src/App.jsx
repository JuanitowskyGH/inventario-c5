import './App.css'
//import '../styles/App.css'

//Paginas
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Usuarios } from './pages/Usuarios'
import { Inventario } from './pages/Inventario'
import { AddInventario } from './pages/AddInventario'
import { AddUsuarios } from './pages/AddUsuarios'
import { Cuenta } from './pages/Cuenta'
import 'flowbite'

//Componentes
import { TablaUsuarios } from './components/TablaUsuarios'
import { TablaInventario } from './components/TablaInventario'
import { Carrusel } from './components/Carrusel'
import { AccesoRapido } from './components/AccesoRapido'
import { Presentacion} from './components/Presentacion'
import { InventarioForm } from './components/InventarioForm'
import { Footer } from './components/Footer'
import { Pruebas } from './components/Pruebas'
import { FormCuenta } from './components/FormCuenta'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/inventario" element={<Inventario />} />
      <Route path="/addinventario" element={<AddInventario />} />
      <Route path='/addusuarios' element={<AddUsuarios />} />
      <Route path="/cuenta" element={<Cuenta />} />

      {/* PARA PRUEBA DE COMPONENTES */}
      <Route path="/usuarios" element={<TablaUsuarios />} />
      <Route path="/inventario" element={<TablaInventario />} />
      <Route path="/carrusel" element={<Carrusel />} />
      <Route path="/acceso" element={<AccesoRapido />} />
      <Route path="/presentacion" element={<Presentacion />} />
      <Route path="/inventarioform" element={<InventarioForm />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/pruebas" element={<Pruebas />} />
      <Route path="/cuenta" element={<FormCuenta />} />
      <Route path="*" element={<h1 className='text-white'>Esta pagina no existe papi</h1>} />
    </Routes>
    </>
  )
}

export default App
