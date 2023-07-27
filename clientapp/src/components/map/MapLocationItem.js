import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';
import Button from '@mui/material/Button';

const MapLocationItem = ({ locations }) => {
    return (
        <>
            <ListItemButton>
                <ImageListItem>
                    <img src='https://placehold.co/100x100' alt={locations.address}/>
                </ImageListItem>
                <Container maxWidth="md">
                    <ListItemText>
                        {locations.address}
                    </ListItemText>
                    <Button size="small">Delete</Button>
                </Container>
            </ListItemButton>
        </>
    );
};

export default MapLocationItem;