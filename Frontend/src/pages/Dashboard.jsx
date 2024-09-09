import { Menu } from "../components/Menu";
import { AccesoRapido } from "../components/AccesoRapido";
import { Presentacion } from "../components/Presentacion";
import { Carrusel } from "../components/Carrusel";
import authService from "../services/authService";

export const Dashboard = () => {
  const user = authService.getCurrentUser();

  return (
    <div className="w-full h-full">
      <div>
        <Menu role={user?.role} />
      </div>
      <div className="flex my-24 mx-6  rounded-md bg-gray-200">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="grid col-span-2 gap-4">
            <div className="bg-white rounded-lg">
              <AccesoRapido role={user?.role} />
            </div>
            <div className="bg-white rounded-lg ">
              <Carrusel />
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <Presentacion />
          </div>
        </div>
      </div>
    </div>
  );
};
