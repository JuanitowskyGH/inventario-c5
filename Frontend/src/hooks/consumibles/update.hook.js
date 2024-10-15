import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import authService from "../../services/authService";
import endpoints from "../../services/endpoints";

export const updateHook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [consumible, setInventario] = useState({
    id: "",
    etiqueta: "",
    tipo: "",
    marca: "",
    modelo: "",
    serie: "",
    responsable: "",
    imagen: "",
    descripcion: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getInventario = async () => {
      try {
        const user = authService.getCurrentUser();
        if (!user) {
          throw new Error("Usuario no autenticado");
        }
        const response = await axios.get(endpoints.consumibleId + id, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setInventario(response.data);
      } catch (error) {
        console.error("Error fetching inventory data: ", error);
      } finally {
        setLoading(false);
      }
    };
    getInventario();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventario((prevInventario) => ({
      ...prevInventario,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: !value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const redirect = () => {
    const { tipo, marca } = consumible;
    navigate(`/records/${tipo}/${marca}`, { replace: true });
  };


  const updateInventario = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    const newErrors = {
      etiqueta: !consumible.etiqueta,
      tipo: !consumible.tipo,
      marca: !consumible.marca,
      modelo: !consumible.modelo,
      serie: !consumible.serie,
      responsable: !consumible.responsable,
      descripcion: !consumible.descripcion,
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

    const confirm = await Swal.fire({
      title: "¿Está seguro de guardar los cambios?",
      text: "Se actualizarán los datos del registro",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      const formData = new FormData();
      for (const key in consumible) {
        formData.append(key, consumible[key]);
      }
      if (file) {
        formData.append("imagen", file);
      }

      try {
        const user = authService.getCurrentUser();
        if (!user) {
          throw new Error("Usuario no autenticado");
        }

        await axios.put(endpoints.consumibleId + id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        });
        redirect();
        Swal.fire({
          title: "Datos actualizados",
          text: "El registro ha sido actualizado exitosamente",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        console.error("Error al actualizar el registro:", error);
        Swal.fire({
          icon: "error",
          title: "Error del servidor",
          text:
            error.response?.data?.message ||
            "Ocurrió un error al intentar actualizar el registro. Por favor, inténtelo de nuevo más tarde.",
          showConfirmButton: true,
        });
      }
    }
  };

  const img = consumible.imagen
    ? `${endpoints.base}${consumible.imagen}`
    : "/inventory.jpg";

  return {
    loading,
    errors,
    consumible,
    img,
    handleChange,
    handleFileChange,
    updateInventario,
    redirect
  }
}
