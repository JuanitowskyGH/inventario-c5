const API_BASE_URL = "http://localhost:4000/api";

const endpoints = {
  usuarios: `${API_BASE_URL}/users`,
  cuenta: `${API_BASE_URL}/users/profile`,
  inventario: `${API_BASE_URL}/inventario`,
  usuarioId: `${API_BASE_URL}/users/`,
  inventarioId: `${API_BASE_URL}/inventario/`,
  login: `${API_BASE_URL}/login`,
  base: "http://localhost:4000/",
};

export default endpoints;
