import axios from 'axios';
import {jwtDecode as decode} from 'jwt-decode';

const API_URL = 'http://localhost:4000/api';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

const logout = () => {
  localStorage.removeItem('user');
}

const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    const decoded = decode(user.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      logout();
      return null;
    }
  }
  return user;
}

export default {
  login,
  logout,
  getCurrentUser
};