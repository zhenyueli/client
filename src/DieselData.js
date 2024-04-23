import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DieselData() {
  const [dieselData, setDieselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/diesel'); // Assuming your Flask server runs on port 5000
      setDieselData(response.data);
    };

    fetchData();
  }, []);

  // Display the dieselData however you like in your component
  return (
    <div>
      {/* Example display */}
      {dieselData.map((item) => (
        <div key={item.date}> 
          {item.date}: {item.price} 
        </div>
      ))}
    </div>
  );
}

export default DieselData;