import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import endpoints from "../../services/endpoints";
import Swal from "sweetalert2";

export const updateHook = () => {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    roles: [],
    imagenUrl: '',
    password: ''
  });
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    username: '',
    imagen: null,
    password: '',
  });
  const [passValues, setPassValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setLoading(false);
    const fetchUserInfo = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(endpoints.cuenta, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUserInfo({
          username: response.data.username,
          roles: [response.data.role.name],
          imagenUrl: response.data.imagen ? `${endpoints.base}${response.data.imagen}` : '' 

        });
        setFormValues({
          nombre: response.data.nombre,
          apellidoP: response.data.apellidop,
          apellidoM: response.data.apellidom,
          username: response.data.username,
          password: '',
          imagen: null,
        });
      } catch (error) {
        alert("Error al cargar la información");
      }
    };
    fetchUserInfo();
  }, []);

  const handleUserChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagen') {
      setFormValues({
        ...formValues,
        imagen: files[0],
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassValues({
      ...passValues,
      [name]: value,
    });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    if (!formValues.password) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "¡Error!",
        text: "Ingrese su contraseña para confirmar",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    const confirm = await Swal.fire({
      title: "¿Esta seguro de actualizar su informacion?",
      text: "Podra modificar su informacion personal mas adelante si lo desea",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Guardar cambios",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
    try {
      // Verificar la contraseña antes de actualizar los datos
      await axios.post(endpoints.verify,
        { password: formValues.password },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // Crear un FormData para enviar la imagen y otros datos
      const formData = new FormData();
      formData.append('nombre', formValues.nombre);
      formData.append('apellidop', formValues.apellidoP);
      formData.append('apellidom', formValues.apellidoM);
      formData.append('username', formValues.username);
      if (formValues.imagen) {
        formData.append('imagen', formValues.imagen);
      }

      // Actualizar la información del usuario
      const updateResponse = await axios.put(
        endpoints.cuenta,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      setUserInfo({
        ...userInfo,
        nombre: formValues.nombre,
        apellidop: formValues.apellidoP,
        apellidom: formValues.apellidoM,
        username: formValues.username,
        imagenUrl: updateResponse.data.imagen ? `${endpoints.base}${updateResponse.data.imagen}` : '' // Actualizar la URL de la imagen
 
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Listo!",
        text: "Información actualizada con éxito",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
      window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Error!",
        text: "Contraseña incorrecta",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }

    // Validar nueva contraseña
    if (!validatePassword(passValues.newPassword)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Contraseña no válida",
        text: 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.',
        confirmButtonColor: "#0B1556",
        confirmButtonText: "Entendido",
      });
      return;
    }

    // Verificar que todos los campos estén llenos
    if (!passValues.currentPassword || !passValues.newPassword || !passValues.confirmNewPassword) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "¡Error!",
        text: "Llene los campos para continuar",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    // Verificar que las contraseñas coincidan
    if (passValues.newPassword !== passValues.confirmNewPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Error!",
        text: "Las contraseñas no coinciden",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      // Verificar la contraseña actual antes de actualizar la nueva contraseña
      await axios.post(endpoints.verify, { password: passValues.currentPassword }, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });

      // Mostrar confirmación de SweetAlert
      const confirm = await Swal.fire({
        title: "¿Está seguro de cambiar la contraseña?",
        text: "Recuerde su nueva contraseña para futuros accesos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0B1556",
        cancelButtonColor: "#d33",
        confirmButtonText: "Guardar cambios",
        cancelButtonText: "Cancelar",
      });

      if (confirm.isConfirmed) {
        // Actualizar la contraseña del usuario
        await axios.put(endpoints.updatePass, {
          currentPassword: passValues.currentPassword,
          newPassword: passValues.newPassword,
        }, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Listo!",
          text: "Información actualizada con éxito",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Error!",
        text: "La contraseña actual es incorrecta",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };


  return {
    loading,
    userInfo,
    formValues,
    passValues,
    passwordError,
    validatePassword,
    handleUserChange,
    handlePasswordChange,
    handleUserSubmit,
    handlePasswordSubmit,
  }
}

//Administrador123?