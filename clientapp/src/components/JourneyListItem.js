

import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';

 const JourneysListItem = ({name}) => {
    return (
        <Container maxWidth="md">
            <ListItemButton component="a" href="#simple-list">
                <ImageListItem>
                    <img src='https://placehold.co/100x100' alt=''/>
                </ImageListItem>
                <Container maxWidth="md">
                    <ListItemText>
                        {name}
                    </ListItemText>
                </Container>
            </ListItemButton>
        </Container>
        );
}

export default JourneysListItem;