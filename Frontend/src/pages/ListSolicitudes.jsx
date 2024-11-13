import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { ListaSolicitud } from "../components/ListaSolicitud";
import { authRole } from "../services/authRole";

export const ListaSolicitudes = () => {
  const { user } = authRole();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
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
          <ListaSolicitud role={user?.role} />
        </div>
      </div>
    </div>
  );
};
