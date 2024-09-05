import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'flowbite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Mod from './pages/Mod';
import Lector from './pages/Lector';
import { Dashboard } from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { createRoot } from 'react-dom/client';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<ProtectedRoute roles={['Administrador']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<ProtectedRoute roles={['Moderador']} />}>
          <Route path="/mod" element={<Mod />} />
        </Route>
        <Route element={<ProtectedRoute roles={['Lector']} />}>
          <Route path="/lector" element={<Lector />} />
        </Route>
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

/*//Paginas
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Usuarios } from './pages/Usuarios'
import { Inventario } from './pages/Inventario'
import { AddInventario } from './pages/AddInventario'
import { AddUsuarios } from './pages/AddUsuarios'
import { Cuenta } from './pages/Cuenta'
import 'flowbite'

//Componentes
//import { Pruebas } from './components/Pruebas'
import { Pruebas } from './components/Pruebas'

import { TablaUsuarios } from './components/TablaUsuarios'
import { TablaInventario } from './components/TablaInventario'
import { Carrusel } from './components/Carrusel'
import { AccesoRapido } from './components/AccesoRapido'
import { Presentacion} from './components/Presentacion'
import { InventarioForm } from './components/InventarioForm'
import { Footer } from './components/Footer'
import { FormCuenta } from './components/FormCuenta'

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { UpdateInventario } from './pages/UpdateInventario'
import { UpdateUsuarios } from './pages/UpdateUsuarios'


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
      <Route path="/updateinventario/:id" element={<UpdateInventario/>} />
      <Route path='/updateusuarios/:id' element={<UpdateUsuarios/>} />

      {/* PARA PRUEBA DE COMPONENTES}
      <Route path="/pruebas" element={<Pruebas />} />

      <Route path="/usuarios" element={<TablaUsuarios />} />
      <Route path="/inventario" element={<TablaInventario />} />
      <Route path="/carrusel" element={<Carrusel />} />
      <Route path="/acceso" element={<AccesoRapido />} />
      <Route path="/presentacion" element={<Presentacion />} />
      <Route path="/inventarioform" element={<InventarioForm />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/cuenta" element={<FormCuenta />} />
      <Route path="*" element={<h1 className='text-white'>Esta pagina no existe papi</h1>} />
    </Routes>
    </>
  )
}

export default App*/
