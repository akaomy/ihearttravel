import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import SearchBar from '../uiReusables/SearchBar';
import './map.css';

export default function Map({ locations, zoomLevel }) {
    // location is an array of locations
    // todo: 
    // rename Map to MapBoard
    // display list of locations with comments and buttons (delete, edit, copy) on the left
    //
    return (
        <div className="google-map">
            <SearchBar/>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={locations}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={locations.lat}
                    lng={locations.lng}
                    text={locations.address}
                />
            </GoogleMapReact>
        </div>
    );
}