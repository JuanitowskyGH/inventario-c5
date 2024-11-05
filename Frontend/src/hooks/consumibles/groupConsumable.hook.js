import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoanContext } from "../../services/LoanService";
import axios from "axios";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";
import Swal from "sweetalert2";

export const groupHook = () => {
  const { selectedConsumables, addToList, removeFromList } =
  useContext(LoanContext);
const { tipo, marca } = useParams();
const [records, setRecords] = useState([]);
const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState("");
const user = authService.getCurrentUser();
const navigate = useNavigate();

// OBTENER LOS CONSUMIBLES DE UN GRUPO ESPECÍFICO POR TIPO Y MARCA
useEffect(() => {
  const decodedTipo = decodeURIComponent(tipo);
  const decodedModelo = decodeURIComponent(marca);
  axios
    .get(
      `${endpoints.grupo}/${encodeURIComponent(
        decodedTipo
      )}/${encodeURIComponent(decodedModelo)}`,
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      setRecords(response.data);
    })
    .catch((error) => console.error("Error fetching records:", error));
  setLoading(false);
}, [tipo, marca]);

const handleAddToList = (record) => {
  addToList(record);
  let timerInterval;
  Swal.fire({
    position: "bottom-start",
    title: "¡Listo!",
    html: "Se ha agregado el consumible a la lista de solicitud",
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

const handleRemoveFromList = (recordId) => {
  removeFromList(recordId);
};

const isInList = (recordId) => {
  return selectedConsumables.some((consumable) => consumable.id === recordId);
};

const deleteRegistro = async (id) => {
  const confirm = await Swal.fire({
    title: "¿Esta seguro de eliminar este consumible?",
    text: "No habrá registro de él una vez eliminado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0B1556",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });
  if (confirm.isConfirmed) {
    if (!user) {
      navigate("/");
      return;
    }
    await axios.delete(`${endpoints.consumibles}/${id}`, {
      withCredentials: true,
    });
    Swal.fire({
      icon: "success",
      title: "Consumible eliminado",
      text: "El registro ha sido eliminado con éxito",
      showConfirmButton: false,
      timer: 2000,
    });
    setRecords(records.filter((record) => record.id !== id));
  }
};

const filteredRecords = records.filter((record) => {
  const serie = record.serie ? record.serie.toString().toLowerCase() : "";
  const responsable = record.responsable
    ? record.responsable.toString().toLowerCase()
    : "";
  const disponibilidad = record.disponibilidad
    ? record.disponibilidad.toString().toLowerCase()
    : "";
  const searchTermLower = searchTerm.toLowerCase();

  return (
    serie.includes(searchTermLower) ||
    responsable.includes(searchTermLower) ||
    disponibilidad.includes(searchTermLower)
  );
});

  return {
    loading,
    tipo,
    marca,
    searchTerm,
    setSearchTerm,
    filteredRecords,
    handleAddToList,
    handleRemoveFromList,
    isInList,
    deleteRegistro
  }

}
