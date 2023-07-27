import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import SearchBar from '../uiReusables/SearchBar';
import CustomButton from '../uiReusables/CustomButton';
import { Container } from '@mui/material';
import MapLocationsList from './MapLocationsList';
import { styled } from '@mui/material/styles';
import './map.css';


const StyledContainer = styled(Container)(() => ({
    display: 'flex',
}));

export default function Map({ journalInfoMapLocations, locations, zoomLevel }) {
    // location is an array of locations
    // todo: 
    // rename Map to MapBoard
    // display list of locations with comments and buttons (delete, edit, copy) on the left
    //
    console.log(journalInfoMapLocations)
    return (
        <StyledContainer>
            <Container maxWidth='md' className='google-map'>
                <SearchBar/>
                <CustomButton btnText={'search'}/>
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

            </Container>
            <MapLocationsList />
        </StyledContainer>
    );
}