const API_BASE_URL = "http://localhost:4000/api";

const endpoints = {
  usuarios: `${API_BASE_URL}/users`,
  cuenta: `${API_BASE_URL}/info`,
  updatePass: `${API_BASE_URL}/upass`,
  verify: `${API_BASE_URL}/verify`,
  inventario: `${API_BASE_URL}/inventario`,
  usuarioId: `${API_BASE_URL}/users/`,
  inventarioId: `${API_BASE_URL}/inventario/`,
  login: `${API_BASE_URL}/auth/login`,
  logout: `${API_BASE_URL}/auth/logout`,
  current: `${API_BASE_URL}/auth/currentUser`,
  consumibles: `${API_BASE_URL}/consumables`,
  consumibleId: `${API_BASE_URL}/consumables/`,
  types: `${API_BASE_URL}/consumables/types`,
  grupo: `${API_BASE_URL}/consumables/type`,
  solicitud : `${API_BASE_URL}/request`,
  aprobarSolicitud: `${API_BASE_URL}/apprequest`,
  rechazarSolicitud: `${API_BASE_URL}/decrequest`,
  obtenerSolicitud: `${API_BASE_URL}/getrequest`,
  reporte: `${API_BASE_URL}/report`,
  base: "http://localhost:4000/",
};

export default endpoints;
