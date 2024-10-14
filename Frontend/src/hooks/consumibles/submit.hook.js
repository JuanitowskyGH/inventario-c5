import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

export const submitHook = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [consumible, setConsumible] = useState({
    etiqueta: "",
    tipo: "",
    marca: "",
    modelo: "",
    serie: "",
    descripcion: "",
    responsable: "",
    imagen: "",
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const cleanForm = () => {
    setConsumible({
      etiqueta: "",
      tipo: "",
      marca: "",
      modelo: "",
      serie: "",
      descripcion: "",
      responsable: "",
      imagen: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setConsumible({ ...consumible, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setConsumible({ ...consumible, imagen: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      etiqueta,
      tipo,
      responsable,
    } = consumible;

    const newErrors = {
      etiqueta: !etiqueta,
      tipo: !tipo,
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
      Object.keys(consumible).forEach((key) => {
        if (consumible[key]) {
          formDataToSend.append(key, consumible[key]);
        }
      });

      console.log('Datos enviados:', Object.fromEntries(formDataToSend.entries()));

      const user = authService.getCurrentUser();
      if (!user) {
        throw new Error("No se ha iniciado sesión");
      }

      await axios.post(endpoints.consumibles, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
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
      cleanForm();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      Swal.fire({
        icon: "error",
        title: "Error del servidor",
        text: "Ocurrió un error al intentar agregar el registro. Por favor, inténtelo de nuevo más tarde.",
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    errors,
    loading,
    consumible,
    handleChange,
    handleFileChange,
    handleSubmit,
    cleanForm
  }
}