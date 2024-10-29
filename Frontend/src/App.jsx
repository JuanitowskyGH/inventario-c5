import "./index.css";
import "flowbite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { LoanProvider } from "./services/LoanService";
import ProtectedRoute from "./ProtectedRoute";

//PAGINAS
//PAGINAS PUBLICAS
import Login from "./pages/Login";
import { Pruebas } from "./components/Pruebas";

//PAGINAS DE ERROR
import { NotFound } from "./pages/NotFound";

//PAGINAS CON AUTENTICACION
import { Administracion } from "./pages/Administracion";

//PAGINAS QUE SE PUEDEN ACCESAR DESDE CUALQUIER ROL AUTENTICADO
import { Cuenta } from "./pages/Cuenta";
import { Inventario } from "./pages/Inventario";
import { Dashboard } from "./pages/Dashboard";
import { ListaSolicitudes } from "./pages/ListSolicitudes";

//PAGINAS QUE SOLO SE PUEDEN ACCESAR DESDE ROL ADMINISTRADOR Y MODERADOR
import { Usuarios } from "./pages/Usuarios";
import { AddInventario } from "./pages/AddInventario";
import { AddUsuarios } from "./pages/AddUsuarios";
import { UpdateInventario } from "./pages/UpdateInventario";
import { AddConsumibles } from "./pages/AddConsumibles";
import { Consumibles } from "./pages/Consumibles";
import { UpdateConsumible } from "./pages/UpdateConsumible";
import { VerConsumibles } from "./pages/VerConsumibles";

//PAGINAS QUE SOLO SE PUEDEN ACCESAR DESDE ROL ADMINISTRADOR
import { UpdateUsuarios } from "./pages/UpdateUsuarios";
import { Solicitudes } from "./pages/Solicitudes";

const App = () => {
  return (
    <LoanProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pruebas/:id" element={<Pruebas />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/unauthorized" element={<Administracion />} />
          </Route>
          <Route
            element={
              <ProtectedRoute
                roles={["Administrador", "Moderador", "Lector"]}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/solicitudes" element={<ListaSolicitudes />} />
          </Route>
          <Route
            element={<ProtectedRoute roles={["Administrador", "Moderador"]} />}
          >
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/addinventario" element={<AddInventario />} />
            <Route
              path="/updateinventario/:id"
              element={<UpdateInventario />}
            />
            <Route path="/addconsumibles" element={<AddConsumibles />} />
            <Route path="/consumibles" element={<Consumibles />} />
            <Route path="/records/:tipo/:marca" element={<VerConsumibles />} />
            <Route
              path="/updateconsumible/:id"
              element={<UpdateConsumible />}
            />
          </Route>
          <Route element={<ProtectedRoute roles={["Administrador"]} />}>
            <Route path="/updateusuarios/:id" element={<UpdateUsuarios />} />
            <Route path="/addusuarios" element={<AddUsuarios />} />
            <Route path="/aprobarsolicitudes" element={<Solicitudes />} />
          </Route>
        </Routes>
      </Router>
    </LoanProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
