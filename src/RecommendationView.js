import React, { useState } from 'react';
import axios from 'axios';

const RecommendationView = () => {
  const [feature, setFeature] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFeature(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // URL de tu API Flask para recomendaciones
    const apiUrl = `http://ip172-18-0-19-crremi8l2o900086d9pg-5000.direct.labs.play-with-docker.com/recommend?feature=${feature}`;

    axios.get(apiUrl)
      .then((response) => {
        setRecommendations(response.data); // Guardamos las recomendaciones en el estado
        setLoading(false);
      })
      .catch((error) => {
        setError('Error al obtener las recomendaciones'); // Manejamos cualquier error
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Recomendaciones de Productos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feature">Características del producto:</label>
        <input
          type="text"
          id="feature"
          value={feature}
          onChange={handleInputChange}
        />
        <button type="submit">Obtener Recomendaciones</button>
      </form>
      
      {loading && <p>Cargando recomendaciones...</p>}
      {error && <p>{error}</p>}

      {recommendations.length > 0 && (
        <div>
          <h3>Productos Recomendados:</h3>
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
              {recommendations.map((appliance) => (
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
      )}
    </div>
  );
};

export default RecommendationView;
