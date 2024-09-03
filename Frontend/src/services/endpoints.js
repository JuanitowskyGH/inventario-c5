
const API_BASE_URL = "http://localhost:4000/api";

const endpoints = {
    usuarios: `${API_BASE_URL}/usuarios`,
    inventario: `${API_BASE_URL}/inventario`,
    base: "http://localhost:4000/",

    register: `${API_BASE_URL}/auth/register`,
    login : `${API_BASE_URL}/auth/login`,
    user: `${API_BASE_URL}/auth/user`,
};

export default endpoints;
