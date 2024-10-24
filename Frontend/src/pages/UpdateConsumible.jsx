import { useState } from "react";
import { FormUpdateConsumible } from "../components/FormUpdateConsumible";
import { Menu } from "../components/Menu";
import { authRole } from "../services/authRole";

export const UpdateConsumible = () => {
  const { user } = authRole();
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
          <FormUpdateConsumible />
        </div>
      </div>
    </div>
  );
};
