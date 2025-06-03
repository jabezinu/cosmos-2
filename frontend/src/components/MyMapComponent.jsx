import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px' // Adjust height as needed
};

// Replace with the actual coordinates of your new address
const center = {
  lat: -3.745, // Example Latitude
  lng: -38.523  // Example Longitude
};

function MyMapComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_Maps_API_KEY" // REPLACE THIS with your actual API key
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is called once the map instance is loaded
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    // This is called when the map is unmounted
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15} // Adjust zoom level as needed
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Add a marker at the center location */}
      <Marker position={center} />
    </GoogleMap>
  ) : <div>Loading Map...</div>;
}

export default MyMapComponent;