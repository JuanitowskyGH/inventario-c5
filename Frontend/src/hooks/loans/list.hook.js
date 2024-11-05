import axios from "axios";
import { LoanContext } from "../../services/LoanService";
import endpoints from "../../services/endpoints";
import Swal from "sweetalert2";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// HOOK PARA LISTAR LOS CONSUMIBLES SELECCIONADOS PARA SOLICITUD
export const listHook = () => {
  // TOMADOS DEL CONTEXTO EN LOANSERVICE.JSX EN LA CARPETA SERVICES EN SRC
  const { selectedConsumables, user, removeFromList, clearList } = useContext(LoanContext);
  const clean = selectedConsumables.length === 0;
  const navigate = useNavigate();
  const handleSubmitRequest = async () => {
    try {
      const confirm = await Swal.fire({
        title: "Enviar solicitud",
        text: "¿Estás seguro de enviar la solicitud de préstamo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0B1556",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, enviar",
        cancelButtonText: "Cancelar",
      });
  
      if (confirm.isConfirmed) {
        if (!user) {
          navigate("/");
          return;
        }
  
        await axios.post(endpoints.solicitud, {
          consumibles: selectedConsumables.map((consumable) => consumable.id),
          withCredentials: true,
        });
  
        Swal.fire({
          icon: "success",
          title: "Solicitud enviada",
          text: "Tu solicitud de préstamo ha sido enviada correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
  
        clearList();
      }
    } catch (error) {
      alert("Error al enviar la solicitud");
      console.error("Error al enviar la solicitud", error);
    }
  };

  const handleRemoveFromList = (recordId) => {
    removeFromList(recordId);
    let timerInterval;
    Swal.fire({
      position: "bottom-start",
      title: "¡Listo!",
      html: "Se ha eliminado el consumible de la lista de solicitud",
      toast: true,
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        if (timer) {
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };

  return {
    clean,
    selectedConsumables,
    handleSubmitRequest,
    handleRemoveFromList,
  };
}
