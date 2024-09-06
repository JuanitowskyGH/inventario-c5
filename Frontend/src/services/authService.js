import axios from 'axios';
import {jwtDecode as decode} from 'jwt-decode';
import endpoints from './endpoints';

const login = async (username, password) => {
  try{
    const response = await axios.post(endpoints.login, { username, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
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
    return {...user, role: decoded.role};
  }
  return null;
}

export default {
  login,
  logout,
  getCurrentUser
};