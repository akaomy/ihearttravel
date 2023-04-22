

import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';

export default function JourneysListItem () {
    return (
        <Container maxWidth="md">
            <ListItemButton component="a" href="#simple-list">
                <ImageListItem>
                    <img src='https://placehold.co/100x100' alt=''/>
                </ImageListItem>
                <Container maxWidth="md">
                    <ListItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ultrices in iaculis nunc sed augue lacus. 
                    </ListItemText>
                </Container>
            </ListItemButton>
        </Container>
        );
}