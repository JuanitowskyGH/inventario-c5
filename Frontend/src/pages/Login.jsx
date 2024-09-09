import React from "react";
import Alerta from "../components/Alerta";
import { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("showAlert") === "true") {
      setShowAlert(true);
      localStorage.removeItem("showAlert");
    }
  }, []);
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
      <div className="flex justify-center mt-10">
        {showAlert && (
          <Alerta
            message="Inicia sesión para continuar."
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
