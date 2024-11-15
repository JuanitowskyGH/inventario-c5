import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

// HOOK PARA AGREGAR UN NUEVO REGISTRO
export const submitHook = () => {
  const user = authService.getCurrentUser();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [inventario, setInventario] = useState({
    etiqueta: "",
    numAnterior: "",
    tipo: "",
    marca: "",
    modelo: "",
    serie: "",
    departamento: "",
    ubicacion: "",
    descripcion: "",
    responsable: "",
    imagen: "",
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const cleanForm = () => {
    setInventario({
      etiqueta: "",
      numAnterior: "",
      tipo: "",
      marca: "",
      modelo: "",
      serie: "",
      departamento: "",
      ubicacion: "",
      descripcion: "",
      responsable: "",
      imagen: "",
    });
    setErrors({});
  };

  // LIMPIA LOS CAMPOS DEL FORMULARIO DESPUES DE ENVIAR
  const sendClean = (fieldsToKeep = {}) => {
    setInventario((prevState) => ({
      ...prevState,
      ...fieldsToKeep,
      etiqueta: "",
      numAnterior: "",
      serie: "",
      descripcion: "",
      imagen: "",
    }));
    setErrors({});
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInventario({ ...inventario, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInventario({ ...inventario, imagen: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      etiqueta,
      numAnterior,
      tipo,
      departamento,
      ubicacion,
      responsable,
    } = inventario;

    const newErrors = {
      etiqueta: !etiqueta,
      numAnterior: !numAnterior,
      tipo: !tipo,
      departamento: !departamento,
      ubicacion: !ubicacion,
      responsable: !responsable,
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
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(inventario).forEach((key) => {
        if (inventario[key]) {
          formDataToSend.append(key, inventario[key]);
        }
      });


      if (!user) {
        throw new Error("No se ha iniciado sesión");
      }

      await axios.post(endpoints.inventario, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          withCredentials: true,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Listo!",
        text: "El registro ha sido agregado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      sendClean({ 
        tipo: inventario.tipo,
        marca: inventario.marca,
        modelo: inventario.modelo,
        departamento: inventario.departamento,
        ubicacion: inventario.ubicacion,
        responsable: inventario.responsable,
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      if (error.response && error.response.status === 400 && error.response.data.message === "La etiqueta ya está registrada") {
        Swal.fire({
          icon: "error",
          title: "Etiqueta duplicada",
          text: "La etiqueta ya está registrada. Por favor, ingrese una etiqueta diferente.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error del servidor",
          text: "Ocurrió un error al intentar agregar el registro. Por favor, inténtelo de nuevo más tarde.",
          showConfirmButton: false,
        });
      }
    } finally {
      setLoading(false);
    }
  };


  return {
    errors,
    loading,
    inventario,
    handleChange,
    handleFileChange,
    handleSubmit,
    cleanForm
  }
}
