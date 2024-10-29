import { useState, useEffect } from "react";
import endpoints from "../services/endpoints";
import axios from "axios";
import { Card } from "flowbite-react";

export const TablaSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    axios
      .get(endpoints.obtenerSolicitud, {
        withCredentials: true,
      })
      .then((response) => {
        const { solicitudes } = response.data;
        setSolicitudes(solicitudes || []);
      })
      .catch((error) => {
        console.error("Error al obtener los datos", error);
      });
  }, []);

  const handleAprobar = (solicitudId) => {
    axios
      .put(`${endpoints.aprobarSolicitud}/${solicitudId}`, {
        withCredentials: true,
      })
      .then(() => {
        alert("Solicitud aprobada correctamente");
        setSolicitudes((prevSolicitud) =>
          prevSolicitud.filter((solicitud) => solicitud.id !== solicitudId)
        );
      })
      .catch((error) => {
        console.error("Error al aprobar la solicitud", error);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Solicitudes de préstamos Pendientes
      </h2>
      <p className="text-gray-600 mb-6">
        Aquí puedes ver los préstamos que están pendientes de aprobación.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solicitudes.length > 0 ? (
          solicitudes.map((solicitud) => (
            <div
              key={solicitud.id}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                Solicitante:{" "}
                {solicitud.Usuario
                  ? `${solicitud.Usuario.nombre} ${solicitud.Usuario.apellidop} ${solicitud.Usuario.apellidom}`
                  : "Usuario no disponible"}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Usuario:</strong>{" "}
                {solicitud.Usuario?.username || "Usuario no disponible"}
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Consumibles Solicitados:</strong>
                {solicitud.Consumibles && solicitud.Consumibles.length > 0 ? (
                  solicitud.Consumibles.map((consumible) => (
                    <div
                      key={consumible.id}
                      className="mt-2 p-3 border border-gray-300 rounded-md bg-white shadow-sm"
                    >
                      <p>
                        <strong>Ticket:</strong> {consumible.id}
                      </p>
                      <p>
                        <strong>Tipo:</strong> {consumible.tipo}
                      </p>
                      <p>
                        <strong>Descripcion:</strong> {consumible.descripcion}
                      </p>
                      <p>
                        <strong>Marca:</strong> {consumible.marca}
                      </p>
                      <p>
                        <strong>Serie:</strong> {consumible.serie}
                      </p>
                      <p>
                        <strong>Responsable:</strong> {consumible.responsable}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No hay consumibles disponibles</p>
                )}
              </div>
              <button
                onClick={() => handleAprobar(solicitud.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Aprobar
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">
            No hay préstamos pendientes
          </p>
        )}
      </div>
    </div>
  );
};