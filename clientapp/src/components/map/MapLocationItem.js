import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';

const MapLocationItem = () => {
    return (
        <>
            <ListItemButton>
                <ImageListItem>
                    <img src='https://placehold.co/100x100' alt={'location name'}/>
                </ImageListItem>
                <Container maxWidth="md">
                    <ListItemText>
                        {'location name'}
                    </ListItemText>
                </Container>
            </ListItemButton>
        </>
    );
};

export default MapLocationItem;