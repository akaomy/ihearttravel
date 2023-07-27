import React from 'react';
import MapLocationItem from './MapLocationItem';
import {Container } from '@mui/material';


const MapLocationsList = () => {

    return (
        <Container maxWidth='sm'>
            <MapLocationItem />
            <MapLocationItem />
            <MapLocationItem />
            <MapLocationItem />
            <MapLocationItem />
            <MapLocationItem />
            <MapLocationItem />
        </Container>
    );
};

export default MapLocationsList;
