import React, { useState, useEffect } from 'react';
import Map from './Map'; 
import DieselData from './DieselData';
import './App.css'; 


function App() {
  return (
    <div> {/* You can add overall styling to this div if needed */}
      <header>
        <h1>Planada</h1>
        <h3>Why plan your future anywhere else?</h3>
      </header>
      <main>
        <div id="map-container"><Map/></div>
        <section id="city-info">
        </section> 
      </main>
    </div>
  );
}

export default App; 
