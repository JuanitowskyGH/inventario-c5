import "./index.css";
import "flowbite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ProtectedRoute from "./ProtectedRoute";

//PAGINAS
//PAGINAS PUBLICAS
import Login from "./pages/Login";

//PAGINAS CON AUTENTICACION
import { Administracion } from "./pages/Administracion";

//PAGINAS QUE SE PUEDEN ACCESAR DESDE CUALQUIER ROL AUTENTICADO
import { Cuenta } from "./pages/Cuenta";
import { Inventario } from "./pages/Inventario";
import { Dashboard } from "./pages/Dashboard";

//PAGINAS QUE SOLO SE PUEDEN ACCESAR DESDE ROL ADMINISTRADOR Y MODERADOR 
import { Usuarios } from "./pages/Usuarios";
import { AddInventario } from "./pages/AddInventario";
import { AddUsuarios } from "./pages/AddUsuarios";
import { UpdateInventario } from "./pages/UpdateInventario";

//PAGINAS QUE SOLO SE PUEDEN ACCESAR DESDE ROL ADMINISTRADOR
import { UpdateUsuarios } from "./pages/UpdateUsuarios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/unauthorized" element={<Administracion />} />
        </Route>
        <Route element={<ProtectedRoute roles={["Administrador", "Moderador", "Lector"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/cuenta" element={<Cuenta />} />
        </Route>
        <Route
          element={<ProtectedRoute roles={["Administrador", "Moderador"]} />}>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/addinventario" element={<AddInventario />} />
          <Route path="/updateinventario/:id" element={<UpdateInventario />} />
        </Route>
        <Route element={<ProtectedRoute roles={["Administrador"]} />}>
          <Route path="/updateusuarios/:id" element={<UpdateUsuarios />} />
          <Route path="/addusuarios" element={<AddUsuarios />} />
        </Route>
      </Routes>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);