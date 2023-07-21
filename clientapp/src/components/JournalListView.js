
import React from 'react';
import JournalListItem from './JournalListItem';
import CustomButton from './uiReusables/CustomButton';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    justifyContent: 'space-around'
}));

const JournalListView  = ({journals}) => {
    // console.log(journals.map(i => console.log(i.journal_name)));
    return (
        <Container>
            <StyledContainer>
                <CustomButton btnText={'+'}/>
            </StyledContainer>
            {journals.map((i) => 
                <JournalListItem 
                    key={i.journal_name}
                    name={i.journal_name}
                />
            )}
        </Container>
    );
};


export default JournalListView;