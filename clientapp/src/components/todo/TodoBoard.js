import React, { useContext, createContext } from 'react';
import TodoCard from './TodoCard';
import Grid from '@mui/material/Grid';
import { JournalInfoContext } from './../Contexts';


export default function TodoBoard () {

    const cardInfo = useContext(JournalInfoContext);

    return (
        <Grid container spacing={4}>
            {cardInfo.journal_info[0].todos.map(i => 
                    <Grid item xs={12} sm={4} md={3}>
                        {console.log('i', i.card_id)}
                        <TodoCard
                            key={i.card_id}
                            cardName={i.card_name}
                            // cardContent={i.card_content}
                        />
                    </Grid>
            )}
        </Grid>
    )
}