import React from 'react'
import UserIcon from '../icons/UserIcon';
import PasswordIcon from '../icons/PasswordIcon';
import EyeIcon from '../icons/EyeIcon';
import EyeIconClose from '../icons/EyeIconClose';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(username, password);
      navigate("/dashboard");
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <form onSubmit={handleLogin} className="mt-16 bg-white p-6 rounded-lg shadow-lg shadow-black w-96">
          <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <h2 className="text-2xl italic mb-6 text-center text-black ">Sistema de Inventario C5i</h2>
          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
          <div className="flex pb-8">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <UserIcon/>
            </span>
            <input type="text" name='username' id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-tlax block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre de usuario"/>
          </div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <div className="flex pb-8">
        <span className="inline-flex items-center px-3 py-3 text-sm text-gray-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <PasswordIcon/>
        </span>
        <input type={showPassword ? "text" : "password"} name='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-none bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-tlax block flex-1 min-w-0 w-full text-sm p-2.5 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"/>
        <button type="button" onClick={togglePasswordVisibility} className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 border border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          {showPassword ? <EyeIconClose className="w-5 h-10"/> : <EyeIcon className="w-5 h-10"/>}
        </button>
      </div>
          <div className="flex justify-center">
          <button type='submit' className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
            Acceder
          </button> 
          </div>
          <hr className="w-full h-1 mx-auto mt-4  bg-gray-100 border-0 rounded dark:bg-gray-700"/>
        </form>
  )
}
