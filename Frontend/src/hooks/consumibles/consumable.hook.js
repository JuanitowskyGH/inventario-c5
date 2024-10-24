import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import endpoints from '../../services/endpoints';
import authService from '../../services/authService';

export const consumableHook = () => {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const user = authService.getCurrentUser();
      axios.get(endpoints.types, {
        withCredentials: true
      })
        .then(response => setTypes(response.data))
        .catch(error => console.error('Error fetching types:', error));
        setLoading(false);
    }, []);
  
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
