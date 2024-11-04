import { requestHook } from "../hooks/loans/request.hook";

export const TablaSolicitudes = () => {

  const { solicitudes, handleAprobar, handleRechazar } = requestHook();

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Solicitudes de préstamos Pendientes
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Aquí puedes ver los préstamos que están pendientes de aprobación.
          </p>
        </div>
      </div>
      {solicitudes.length > 0 ? (
        <div className="px-5 pb-5">
          <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solicitudes.map((solicitud) => (
              <div key={solicitud.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-lg text-gray-600">
                  <strong>Ticket:</strong> {solicitud.id}
                </h3>
                <h3 className="text-lg text-gray-600">
                  <strong>Solicitante:</strong>{" "}
                  {solicitud.user
                    ? `${solicitud.user.nombre} ${solicitud.user.apellidop} ${solicitud.user.apellidom}`
                    : "user no disponible"}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Usuario:</strong>{" "}
                  {solicitud.user?.username || "user no disponible"}
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Consumibles Solicitados:</strong>
                  {solicitud.consumables && solicitud.consumables.length > 0 ? (
                    solicitud.consumables.map((consumible) => (
                      <div key={consumible.id} className="mt-2 p-3 border border-gray-300 rounded-md bg-white shadow-sm">
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
                <div className="flex gap-2">
                <button
                  onClick={() => handleAprobar(solicitud.id)}
                  className="bg-blue-tlax text-white px-4 py-2 rounded-lg hover:bg-blue-tlax-light focus:outline-none hover:-translate-y-1 hover:scale-100 duration-300"
                >
                  Aprobar
                </button>
                <button
                  onClick={() => handleRechazar(solicitud.id)}
                  className="border border-red-800 text-red-800 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none hover:-translate-y-1 hover:scale-100 duration-300"
                >
                  Rechazar
                </button>
                </div>
              </div>
            ))}
          </div>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700" />
        </div>
      ) : (
        <div className="p-5 text-center bg-white">
          <hr className="border-t-2 mb-4 border-gray-200 dark:border-gray-700" />
          <p className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-400">
            No hay solicitudes pendientes.
          </p>
          <hr className="border-t-2 mt-4 border-gray-200 dark:border-gray-700" />
        </div>
      )}
    </div>
  );
};
