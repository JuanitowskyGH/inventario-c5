import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import endpoints from '../services/endpoints';
import authService from '../services/authService';

export const TablaConsumibles = () => {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();
    axios.get(endpoints.types, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(response => setTypes(response.data))
      .catch(error => console.error('Error fetching types:', error));
  }, []);

  const handleViewRecords = (tipo) => {
    navigate(`/records/${tipo}`);
  };

  return (
    <div>
      <h1>Tipos de Registros</h1>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type, index) => (
            <tr key={index}>
              <td>{type.tipo}</td>
              <td>
                <button onClick={() => handleViewRecords(type.tipo)}>Ver Registros</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};