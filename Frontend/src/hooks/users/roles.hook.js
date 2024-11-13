import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

// HOOK PARA ACTUALIZAR EL ROL DE UN USUARIO
export const rolesHook = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    id: "",
    nombre: "",
    apellidop: "",
    apellidom: "",
    username: "",
    roleId: "",
    imagen: "",
  });

  const apellidos = `${user.apellidop || ""} ${user.apellidom || ""}`;

  useEffect(() => {
    // OBTENER INFORMACION DE UN USUARIO
    const getUser = async () => {
      try {
        const token = authService.getCurrentUser();
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(endpoints.usuarioId + id, {
          withCredentials: true
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const updateUser = async (e) => {
    e.preventDefault();
    // ACTUALIZAR EL ROL DEL USUARIO
    const confirm = await Swal.fire({
      title: "¿Esta seguro de asignar estos permisos a este usuario?",
      text: "Tendra acceso a ciertas partes del sistema",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, asignar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      try {
        const token = authService.getCurrentUser();
        if (!token) {
          throw new Error("Token not found");
        }
        await axios.put(endpoints.usuarioId + id, { roleId: user.roleId}, {
          withCredentials: true
        });
        navigate("/usuarios");
        Swal.fire({
          icon: "success",
          title: "Permisos asignados",
          text: "El usuario ha sido actualizado con éxito",
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        Swal.fire({
          icon: "error",
          title: "Error del servidor",
          text: "Ocurrió un error al intentar actualizar el usuario. Por favor, inténtelo de nuevo más tarde.",
          showConfirmButton: false,
        });
      }
    }
  };

  return {
    user,
    loading,
    apellidos,
    handleChange,
    updateUser,
  }
}
