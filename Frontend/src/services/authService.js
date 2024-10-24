import axios from "axios";
import endpoints from "./endpoints";

// Configurar Axios para enviar cookies con cada solicitud
axios.defaults.withCredentials = true;

//FUNCION PARA INICIAR SESION
const login = async (username, password) => {
  try {
    const response = await axios.post(endpoints.login, { username, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return { message: "Error de conexión" };
  }
};

//FUNCION PARA CERRAR SESION
const logout = () => {
  axios.post(endpoints.logout);
};

//FUNCION PARA OBTENER EL USUARIO ACTUAL 
const getCurrentUser = async () => {
  try {
    const response = await axios.get(endpoints.current);
    return response.data;
  } catch (error) {
    return null;
  }
};

export default {
  login,
  logout,
  getCurrentUser
};