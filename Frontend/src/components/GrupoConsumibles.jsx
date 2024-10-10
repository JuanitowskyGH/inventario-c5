import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import endpoints from '../services/endpoints';
import authService from '../services/authService';

export const GrupoConsumibles = () => {
  const { tipo, modelo } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const user = authService.getCurrentUser();
    const decodedTipo = decodeURIComponent(tipo);
    const decodedModelo = decodeURIComponent(modelo);
    console.log(`Fetching records for tipo: ${decodedTipo}, modelo: ${decodedModelo}`);
    axios.get(`${endpoints.consumables}/${encodeURIComponent(decodedTipo)}/${encodeURIComponent(decodedModelo)}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(response => {
        console.log(`Received records: ${JSON.stringify(response.data)}`);
        setRecords(response.data);
      })
      .catch(error => console.error('Error fetching records:', error));
  }, [tipo, modelo]);

  return (
    <div>
      <h1>Registros de tipo: {decodeURIComponent(tipo)} y modelo: {decodeURIComponent(modelo)}</h1>
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