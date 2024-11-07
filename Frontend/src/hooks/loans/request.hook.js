import { useState, useEffect } from "react";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";
import axios from "axios";
import Swal from "sweetalert2";

// HOOK PARA OBTENER LAS SOLICITUDES DE PRÉSTAMO
export const requestHook = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    axios.get(endpoints.obtenerSolicitud, {
        withCredentials: true,
      }).then((response) => {
        const solicitudes = response.data;
        setSolicitudes(solicitudes || []);
      }).catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error al obtener las solicitudes: ${
            error.response?.data?.message || error.message
          }`,
          showConfirmButton: true,
          confirmButtonColor: "#d33",
        });
      });
  }, []);

  const handleAprobar = async (solicitudId) => {
    const confirm = await Swal.fire({
      title: "Aprobar solicitud",
      text: "¿Estás seguro de aprobar esta solicitud?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, aprobar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/");
        return;
      }
    axios.put(`${endpoints.aprobarSolicitud}/${solicitudId}`, {
          withCredentials: true,
        }).then(() => {
        Swal.fire({
          icon: "success",
          title: "Solicitud aprobada",
          showConfirmButton: false,
          timer: 1500,
        });

        setSolicitudes((prevSolicitud) =>
          prevSolicitud.filter((solicitud) => solicitud.id !== solicitudId)
        );
      }).catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error al aprobar la solicitud: ${
            error.response?.data?.message || error.message
          }`,
          showConfirmButton: true,
          confirmButtonColor: "#d33",
        });
      })
      window.location.reload();;
    }
  };

  const handleRechazar = async (solicitudId) => {
    const confirm = await Swal.fire({
      title: "Rechazar solicitud",
      text: "¿Estás seguro de rechazar esta solicitud?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, rechazar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/");
        return;
      }
    axios.put(`${endpoints.rechazarSolicitud}/${solicitudId}`,{
          withCredentials: true,
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Solicitud rechazada",
          showConfirmButton: false,
          timer: 1500,
        });
        setSolicitudes((prevSolicitud) =>
          prevSolicitud.filter((solicitud) => solicitud.id !== solicitudId)
        );
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error al rechazar la solicitud: ${
            error.response?.data?.message || error.message
          }`,
          showConfirmButton: true,
          confirmButtonColor: "#d33",
        });
      });
    }
  }

  return {
    solicitudes,
    handleAprobar,
    handleRechazar,
  };

}
