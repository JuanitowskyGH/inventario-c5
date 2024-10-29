import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

// HOOK PARA CONTROLAR EL MENU
export const menuHook = (onMenuToggle) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [dropdownOpen, setDropdownOpen] = useState({ dropdown: false });
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellidop: "",
    apellidom: "",
    imagenUrl: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // OBTENER LA INFORMACION DEL USUARIO AUTENTICADO
    const fetchUserInfo = async () => {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(endpoints.cuenta, {
          withCredentials: true, 
        });
        setUserInfo({
          nombre: response.data.nombre,
          apellidop: response.data.apellidop,
          apellidom: response.data.apellidom,
          imagenUrl: response.data.imagen
            ? `${endpoints.base}${response.data.imagen.replace(/\\/g, "/")}`
            : ""
        });
      } catch (error) {
        alert("Error al cargar la información");
      }
    };

    window.addEventListener("resize", handleResize);
    fetchUserInfo();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  const logout = () => {
    authService.logout();
    navigate("/");
  };


  // MOVIMIENTO DE LOS BOTONES DEL MENU
  const handleMouseEnter = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: true,
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: false,
    }));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    onMenuToggle(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    onMenuToggle(false);
  };

  return {
    isDrawerOpen,
    dropdownOpen,
    isMobile,
    userInfo,
    toggleDrawer,
    closeDrawer,
    handleMouseEnter,
    handleMouseLeave,
    logout,
  };
};