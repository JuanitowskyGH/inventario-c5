import { Menu } from "../components/Menu";
import { AccesoRapido } from "../components/AccesoRapido";
import { Presentacion } from "../components/Presentacion";
import { Carrusel } from "../components/Carrusel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authRole } from "../services/authRole";

export const Dashboard = () => {
  const { user } = authRole();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full">
      <div>
        <Menu role={user.role} onMenuToggle={toggleMenu} />
      </div>
      <div className={`absolute my-24 mt-28 bg-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'md:ml-64' : 'ml-0'
        }`}>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="grid col-span-2 gap-4">
            <div className="bg-white rounded-lg">
              <AccesoRapido role={user.role} />
            </div>
            <div className="bg-white rounded-lg ">
              <Carrusel />
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <Presentacion />
          </div>
        </div>
      </div>
    </div>
  );
};