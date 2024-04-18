import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet'; // Import Leaflet
const Map = () => {
    const mapRef = useRef(null);
    useEffect(() => {
        if (mapRef.current) return;
        // Initialize map after the component mounts
        const canadaBounds = L.latLngBounds(
            L.latLng(41.5, -141),  // Adjusted southern edge (slightly north of NYC)
            L.latLng(83.1, -52.7)  
        );
        
        
        const stJohns = [47.5615, -52.7126];
        const charlottetown = [46.2382, -63.1304];
        const halifax = [44.6488, -63.5752];
        const saintJohnNB = [45.2733, -66.0633];
        const quebecCity = [46.8139, -71.2080];
        const montreal = [45.5017, -73.5673];
        const ottawa = [45.4215, -75.6972];
        const toronto = [43.6532, -79.3832];
        const thunderBay = [48.3809, -89.2477];
        const winnipeg = [49.8951, -97.1384];
        const regina = [50.4452, -104.6189];
        const saskatoon = [52.1332, -106.6700];
        const edmonton = [53.5461, -113.4938];
        const calgary = [51.0447, -114.0719];
        const vancouver = [49.2827, -123.1207];
        const victoria = [48.4284, -123.3656];
        const whitehorse = [60.7212, -135.0567];
        const yellowknife = [62.4540, -114.3718];


        const map = L.map('map-container', {
            center: [50, -95],
            zoom: 4,
            maxBounds: canadaBounds,  // Add this line
            minZoom: 3 
        });
        let originalCenter = map.getCenter(); // Store the initial center
        const originalZoom = map.getZoom();
        function resetView() {
            map.flyTo(originalCenter, originalZoom);
        }        

        map.on('dblclick', resetView);
        // Add tile layer from OpenStreetMap 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map); 
        mapRef.current = map;
        
    function handleDoubleClick(event) {
    if (map.getZoom() >= 16) { // Modify the threshold zoom level if needed
        map.setView(event.latlng, 6); // Zoom out to a wider view (adjust zoom level as needed)
    } else {
        map.setView(event.latlng, 16); // Zoom in to city view
    }
        }
        L.marker(stJohns).addTo(map).bindPopup("St. John's, Newfoundland and Labrador").on('dblclick', handleDoubleClick);
        L.marker(charlottetown).addTo(map).bindPopup("Charlottetown, Prince Edward Island").on('dblclick', handleDoubleClick);
        L.marker(halifax).addTo(map).bindPopup("Halifax, Nova Scotia").on('dblclick', handleDoubleClick);
        L.marker(saintJohnNB).addTo(map).bindPopup("Saint John, New Brunswick").on('dblclick', handleDoubleClick);
        L.marker(quebecCity).addTo(map).bindPopup("Québec, Quebec").on('dblclick', handleDoubleClick);
        L.marker(montreal).addTo(map).bindPopup("Montréal, Quebec").on('dblclick', handleDoubleClick);
        L.marker(ottawa).addTo(map).bindPopup("Ottawa, Ontario").on('dblclick', handleDoubleClick);
        L.marker(toronto).addTo(map).bindPopup("Toronto, Ontario").on('dblclick', handleDoubleClick);
        L.marker(thunderBay).addTo(map).bindPopup("Thunder Bay, Ontario").on('dblclick', handleDoubleClick);
        L.marker(winnipeg).addTo(map).bindPopup("Winnipeg, Manitoba").on('dblclick', handleDoubleClick);
        L.marker(regina).addTo(map).bindPopup("Regina, Saskatchewan").on('dblclick', handleDoubleClick);
        L.marker(saskatoon).addTo(map).bindPopup("Saskatoon, Saskatchewan").on('dblclick', handleDoubleClick);
        L.marker(edmonton).addTo(map).bindPopup("Edmonton, Alberta").on('dblclick', handleDoubleClick);
        L.marker(calgary).addTo(map).bindPopup("Calgary, Alberta").on('dblclick', handleDoubleClick);
        L.marker(vancouver).addTo(map).bindPopup("Vancouver, British Columbia").on('dblclick', handleDoubleClick);
        L.marker(victoria).addTo(map).bindPopup("Victoria, British Columbia").on('dblclick', handleDoubleClick);
        L.marker(whitehorse).addTo(map).bindPopup("Whitehorse, Yukon ").on('dblclick', handleDoubleClick);
        L.marker(yellowknife).addTo(map).bindPopup("Yellowknife, Northwest Territories").on('dblclick', handleDoubleClick);

    }, []);

    return (
        <div id="map-container" style={{ height: '400px' }}></div> 
    );
};

export default Map;