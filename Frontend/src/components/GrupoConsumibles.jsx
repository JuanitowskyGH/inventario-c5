import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import endpoints from '../services/endpoints';
import authService from '../services/authService';

export const GrupoConsumibles = () => {
  const { tipo } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const user = authService.getCurrentUser();
    axios.get(`${endpoints.consumables}/${tipo}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    )
      .then(response => setRecords(response.data))
      .catch(error => console.error('Error fetching records:', error));
  }, [tipo]);

  return (
    <div>
      <h1>Registros de tipo: {tipo}</h1>
      <table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.descripcion}</td>
              <td>{record.marca}</td>
              <td>{record.modelo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};