import { useState } from "react";
import { Menu } from "../components/Menu";
import { TablaInventario } from "../components/TablaInventario";
import authService from "../services/authService";

export const Inventario = () => {
  const user = authService.getCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  }
  return (
    <div className="absolute w-full h-full">
      <div>
        <Menu role={user?.role} onMenuToggle={toggleMenu}/>
      </div>
      <div className={`container-fluid w-auto px-5 py-5  h-max mt-28 bg-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'md:ml-64' : 'ml-0'
        }`}>
        <div className="">
          <TablaInventario role={user?.role} />
        </div>
      </div>
    </div>
  );
};
