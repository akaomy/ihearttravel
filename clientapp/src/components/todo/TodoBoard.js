import React from 'react';
import TodoCard from './TodoCard';
import Grid from '@mui/material/Grid';
import CustomButton from '../uiReusables/CustomButton';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';


const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
}));

export default function TodoBoard ({ journalInfo }) {
    const todosData = journalInfo[0].todos;

    return (
        <StyledContainer>
            <CustomButton btnText={'+'}/>
            <Grid container spacing={4}>
                {todosData.map(i => 
                    <Grid item xs={12} sm={4} md={3}>
                        <TodoCard
                            key={i.card_id}
                            cardName={i.card_name}
                            cardContent={i.card_content}
                        />
                    </Grid>
                )}
            </Grid>
        </StyledContainer>
    );
}