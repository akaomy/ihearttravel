
import React from 'react';
import JournalListItem from './JournalListItem';
import JournalDialog from './uiReusables/JournalDialog';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    justifyContent: 'space-around'
}));

const JournalListView  = ({journals}) => {

    return (
        <Container>
            <StyledContainer>
                <JournalDialog/>
            </StyledContainer>
            {journals.map((journal, index) => 
                <JournalListItem 
                    key={index}
                    name={journal.JournalName}
                />
            )}
        </Container>
    );
};


export default JournalListView;