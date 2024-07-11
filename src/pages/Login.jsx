import React from 'react';

import { LoginForm } from '../components/LoginForm';
export const Login = () => {
  return (
    <div className="-bottom-56 min-h-screen">
      <div className="flex flex-col items-center pt-10">
        <img
          src="/tlx.png"
          alt="Logo"
          className=" text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
          max-w-xs"
        />
        <LoginForm />
      </div>
    </div>
  );
};
