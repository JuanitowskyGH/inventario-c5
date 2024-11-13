import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authService from "../../services/authService";
import endpoints from "../../services/endpoints";

// HOOK PARA OBTENER LOS REGISTROS
export const reportHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "descending",
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const [search] = useState([
    "id",
    "user.nombre",
    "user.apellidop",
    "user.apellidom",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(endpoints.reporte, {
          withCredentials: true
        });
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [navigate]);

  // ORDENAMIENTO DE LOS DATOS
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

  // FILTRO DE BUSQUEDA
  function searchItems(sortedData) {
    return sortedData.filter((item) => {
      return search.some((newItem) => {
        const keys = newItem.split('.');
        let value = item;
        for (const key of keys) {
          value = value?.[key];
          if (value === undefined || value === null) {
            return false;
          }
        }
        return value.toString().toLowerCase().indexOf(globalFilter.toLowerCase()) > -1;
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

  const filteredData = searchItems(sortedData);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const totalRecords = filteredData.length;
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1)
  };

  return {
    data: paginatedData,
    loading,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage,
    setGlobalFilter,
    setSortConfig,
    sortConfig,
    totalPages,
    totalRecords,
    handlePageChange,
    handleItemsPerPageChange,
    requestSort
  };
};