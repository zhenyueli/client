import React, { useEffect } from 'react';
import * as L from 'leaflet';

const MyMap = () => {
    useEffect(() => {
        const map = L.map('map-container').setView([60, -95], 4);
        // ... (Add your Leaflet tile layers, markers, etc.) 
    }, []);

    return <div id="map-container" style={{ height: '400px' }}></div>; 
};

export default MyMap;