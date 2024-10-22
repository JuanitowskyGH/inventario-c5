import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

export const submitHook = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const user = authService.getCurrentUser();
  const [consumible, setConsumible] = useState({
    tipo: "",
    marca: "",
    modelo: "",
    serie: "",
    descripcion: "",
    responsable: "",
    imagen: "",
  });

  const validateSerie = (serie) => {
    const seriePattern = /^(\d+)(,\s?\d+)*$/;
    return seriePattern.test(serie);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const cleanForm = () => {
    setConsumible({
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

  const sendClean = (fieldsToKeep = {}) => {
    setConsumible((prevState) => ({
      ...prevState,
      ...fieldsToKeep,
      modelo: "",
      serie: "",
      descripcion: "",
      imagen: ""
    }));
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
    const { tipo, responsable, serie } = consumible;

    const newErrors = {
      tipo: !tipo,
      responsable: !responsable,
      serie: serie && !validateSerie(serie),
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      Swal.fire({
        icon: "error",
        title: "Campos vacíos o inválidos",
        text: "Por favor, complete todos los campos correctamente antes de enviar el formulario.",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      return;
    }

    try {
      const serieList = serie ? serie.split(',').map(serie => serie.trim()) : [null];

      for (const serieItem of serieList) {
        const formDataToSend = new FormData();
        formDataToSend.append('tipo', tipo);
        formDataToSend.append('marca', consumible.marca);
        formDataToSend.append('modelo', consumible.modelo);
        if (serieItem) formDataToSend.append('serie', serieItem);
        formDataToSend.append('descripcion', consumible.descripcion);
        formDataToSend.append('responsable', responsable);
        formDataToSend.append('imagen', consumible.imagen);

        await axios.post(endpoints.consumibles, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.token}`,
          },
        });
      }

      Swal.fire({
        icon: "success",
        title: "Registro creado",
        text: "El registro ha sido creado exitosamente.",
        showConfirmButton: false,
        timer: 1500,
      });
      sendClean({
        tipo: consumible.tipo,
        marca: consumible.marca,
        responsable: consumible.responsable,
      })
    } catch (error) {
      console.error('Error al crear el registro:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al crear el registro. Por favor, inténtelo de nuevo.",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    consumible,
    errors,
    loading,
    handleChange,
    handleFileChange,
    handleSubmit,
    cleanForm,
  };
};