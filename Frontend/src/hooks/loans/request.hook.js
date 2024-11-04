import { useState, useEffect } from "react";
import endpoints from "../../services/endpoints";
import axios from "axios";
import Swal from "sweetalert2";

export const requestHook = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    axios
      .get(endpoints.obtenerSolicitud, {
        withCredentials: true,
      })
      .then((response) => {
        const solicitudes = response.data;
        setSolicitudes(solicitudes || []);
      })
      .catch((error) => {
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

  const handleAprobar = (solicitudId) => {
    axios
      .put(
        `${endpoints.aprobarSolicitud}/${solicitudId}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Solicitud aprobada",
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
          text: `Error al aprobar la solicitud: ${
            error.response?.data?.message || error.message
          }`,
          showConfirmButton: true,
          confirmButtonColor: "#d33",
        });
      });
  };

  const handleRechazar = (solicitudId) => {
    axios
      .put(
        `${endpoints.rechazarSolicitud}/${solicitudId}`,
        {},
        {
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

  return {
    solicitudes,
    handleAprobar,
    handleRechazar,
  };

}
