
import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import JournalInfo from './JournalInfo';

 const JournalListItem = ({name}) => {
    const navigate = useNavigate();

    const redirectToPage = () => {
        navigate(`/${name}`);
    }

    console.log(name)
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
            <Routes>
                <Route path={name} element={JournalInfo}/>
            </Routes>
        </Container>
        );
}

export default JournalListItem;