
import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';
import { Link } from 'react-router-dom';


 const JournalListItem = ({name}) => {

    return (
        <Container maxWidth="md">
            <ListItemButton component={Link} to={name}>
                <ImageListItem>
                    <img src='https://placehold.co/100x100' alt={name}/>
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

export default JournalListItem;