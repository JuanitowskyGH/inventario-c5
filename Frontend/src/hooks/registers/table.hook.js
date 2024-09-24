import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import authService from "../../services/authService";
import endpoints from "../../services/endpoints";

export const tableHook = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const [search] = useState([
    "id",
    "tipo",
    "marca",
    "serie",
    "departamento",
    "responsable",
    "ubicacion",
  ]);


  useEffect(() => {
    const fetchData = async () => {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate("/login");
        return;
      }
      try {
        const response = await axios.get(endpoints.inventario, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };
    fetchData();
    setLoading(false);
  }, [navigate]);

  const sortedData = [...data].sort((a, b) => {
    if (
      typeof a[sortConfig.key] === "number" &&
      typeof b[sortConfig.key] === "number"
    ) {
      return sortConfig.direction === "ascending"
        ? a[sortConfig.key] - b[sortConfig.key]
        : b[sortConfig.key] - a[sortConfig.key];
    } else {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
  });

  function searchItems(sortedData) {
    return sortedData.filter((item) => {
      return search.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(globalFilter.toLowerCase()) > -1
        );
      });
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const deleteRegistro = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Esta seguro de eliminar este registro?",
      text: "No habrá registro de él una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "0B1556",
      cancelButtonColor: "d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate("/login");
        return;
      }
      await axios.delete(`${endpoints.inventario}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Registro eliminado",
        text: "El registro ha sido eliminado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      setData(data.filter((item) => item.id !== id));
      getInventario();
    }
  };

  return {
    data: searchItems(sortedData),
    loading,
    requestSort,
    sortConfig,
    globalFilter,
    setGlobalFilter,
    deleteRegistro,
  }
}
