import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService"

// HOOK PARA AGREGAR UN NUEVO USUARIO
export const submitHook = () => {

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidop: "",
    apellidom: "",
    username: "",
    roleId: "",
    password: "",
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const [errors, setErrors] = useState({});

  // LIMPIA LOS CAMPOS DEL FORMULARIO DESPUES DE ENVIAR
  const cleanForm = () => {
    setFormData({
      nombre: "",
      apellidop: "",
      apellidom: "",
      username: "",
      roleId: "",
      password: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellidop, apellidom, username, roleId, password } =
      formData;

    const newErrors = {
      nombre: !nombre,
      apellidop: !apellidop,
      apellidom: !apellidom,
      username: !username,
      roleId: !roleId,
      password: !password,
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Por favor, complete todos los campos antes de enviar el formulario.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      const user = authService.getCurrentUser();
      if (!user) {
        throw new Error("Usuario no autenticado");
      }

      await axios.post(endpoints.usuarios, formData, {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Listo!",
        text: "El usuario se ha creado con exito",
        showConfirmButton: false,
        timer: 2000,
      });
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };


  return {
    loading,
    formData,
    errors,
    handleChange,
    handleSubmit,
  }
}
