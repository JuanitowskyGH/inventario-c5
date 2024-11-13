import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import endpoints from '../../services/endpoints';

// HOOK PARA OBTENER LOS CONSUMIBLES REGISTRADOS
export const consumableHook = () => {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get(endpoints.types, {
        withCredentials: true
      })
        .then(response => setTypes(response.data))
        .catch(error => console.error('Error fetching types:', error));
        setLoading(false);
    }, []);
  
    // DECODIFICAR LA URL CON CARACTERES
    const handleViewRecords = (tipo, marca) => {
      const encodedTipo = encodeURIComponent(tipo);
      const encodedModelo = encodeURIComponent(marca);
      navigate(`/records/${encodedTipo}/${encodedModelo}`);
    };
  
    const filteredTypes = types.filter(type =>
      type.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.marca.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        loading,
        searchTerm,
        setSearchTerm,
        filteredTypes,
        handleViewRecords
    }
}
