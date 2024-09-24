import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../../services/endpoints";
import authService from "../../services/authService";

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
    "nombre",
    "apellidop",
    "apellidom",
    "username",
    "role.name",
  ]);


  useEffect(() => {
    const fetchData = async () => {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(endpoints.usuarios, {
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
      return search.some((key) => {
        const keys = key.split(".");
        let value = item;
        for (const k of keys) {
          value = value ? value[k] : null;
        }
        return (
          value &&
          value.toString().toLowerCase().includes(globalFilter.toLowerCase())
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

  const deleteUsuario = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Esta seguro de eliminar este usuario?",
      text: "No habrá registro de él una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B1556",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate("/");
        return;
      }
      await axios.delete(`${endpoints.usuarios}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Usuario eliminado",
        text: "El usuario ha sido eliminado con éxito",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.reload();
      });
      setData(data.filter((item) => item.id !== id));
      getUsuarios();
    }
  };

  return {
    data: searchItems(sortedData),
    loading,
    requestSort,
    globalFilter,
    setGlobalFilter,
    deleteUsuario,
  };
}
