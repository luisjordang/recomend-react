import React from 'react';
import AppliancesView from './AppliancesView';
import RecommendationView from './RecommendationView'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <h1>Electrodomésticos y Recomendaciones</h1>
      <AppliancesView />
      <RecommendationView />
    </div>
  );
}

export default App;
