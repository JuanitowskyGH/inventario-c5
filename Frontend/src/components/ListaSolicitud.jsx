import React, { useContext } from "react";
import axios from "axios";
import { LoanContext } from "../services/LoanService";
import endpoints from "../services/endpoints";

export const ListaSolicitud = () => {
  const { selectedConsumables, removeFromList, clearList } = useContext(LoanContext);

  const handleSubmitRequest = async () => {
    try {
      await axios.post(
        endpoints.solicitud,
        {
          consumibles: selectedConsumables.map(consumable => consumable.id),
        },
        {
          withCredentials: true,
        }
      );
      alert("Solicitud enviada correctamente");
      clearList();
    } catch (error) {
      alert("Error al enviar la solicitud");
      console.error("Error al enviar la solicitud", error);
    }
  };

  return (
    <div>
      <h1>Lista de solicitud</h1>
      <ul>
        {selectedConsumables.map((consumable) => (
          <li key={consumable.id}>
            {consumable.nombre}
            <br />
            {consumable.descripcion}
            <br />
            {consumable.serie}
            <button onClick={() => removeFromList(consumable.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitRequest}>Enviar Solicitud</button>
    </div>
  );
};