import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

export const menuHook = ( onMenuToggle ) => {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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

    const fetchUserInfo = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(endpoints.cuenta, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUserInfo({
          nombre: response.data.nombre,
          apellidop: response.data.apellidop,
          apellidom: response.data.apellidom,
          imagenUrl: response.data.imagen
            ? `${endpoints.base}${response.data.imagen.replace(/\\/g, "/")}`
            : "", // Convertir las barras invertidas a barras y agregar la base URL
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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    onMenuToggle(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    onMenuToggle(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return {
    isDrawerOpen,
    isDropdownOpen,
    isMobile,
    userInfo,
    toggleDrawer,
    closeDrawer,
    toggleDropdown,
    logout,
  }
}
