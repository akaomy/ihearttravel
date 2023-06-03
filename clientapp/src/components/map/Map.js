import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '960px',
    height: '630px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

export default function Map() {
    return (
        <LoadScript
            // temp
            googleMapsApiKey='your api key here'
        >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
}