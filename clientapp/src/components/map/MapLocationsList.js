import React from 'react';
import MapLocationItem from './MapLocationItem';
import {Container } from '@mui/material';


const MapLocationsList = ({ locations }) => {

    return (
        <Container maxWidth='sm'>
            <MapLocationItem locations={locations} />
            <MapLocationItem locations={locations} />
            <MapLocationItem locations={locations} />
            <MapLocationItem locations={locations} />
            <MapLocationItem locations={locations} />
            <MapLocationItem locations={locations} />
            <MapLocationItem locations={locations} />
        </Container>
    );
};

export default MapLocationsList;
