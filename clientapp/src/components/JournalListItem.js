
import React from 'react';
import { ListItemButton, ListItemText, ImageListItem, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import JournalButton from './uiReusables/JournalButton';
import { styled } from '@mui/material/styles';


const StyledContainer = styled(Container)(() => ({
    display: 'flex',
}));

const JournalListItem = ({name}) => {

    return (
        <StyledContainer maxWidth="md">
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
            <JournalButton btntext={'delete'}/>
        </StyledContainer>
    );
};

export default JournalListItem;