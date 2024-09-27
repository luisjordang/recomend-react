import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppliancesView = () => {
  const [appliances, setAppliances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API
    const apiUrl = 'http://ip172-18-0-43-crremi8l2o900086d9pg-8080.direct.labs.play-with-docker.com/appliances';

    // Realizamos la solicitud HTTP
    axios.get(apiUrl)
      .then((response) => {
        setAppliances(response.data); // Guardamos los datos en el estado
        setLoading(false); // Cambiamos el estado de cargando a falso
      })
      .catch((error) => {
        setError('Error al obtener los datos'); // Manejamos cualquier error
        setLoading(false);
      });
  }, []); // El array vacío indica que se ejecutará una sola vez cuando el componente se monte.

  if (loading) {
    return <p>Cargando los datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Electrodomésticos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Potencia</th>
            <th>Características</th>
          </tr>
        </thead>
        <tbody>
          {appliances.map((appliance) => (
            <tr key={appliance.id}>
              <td>{appliance.id}</td>
              <td>{appliance.name}</td>
              <td>{appliance.brand}</td>
              <td>{appliance.category}</td>
              <td>{appliance.power}</td>
              <td>{appliance.feature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliancesView;
