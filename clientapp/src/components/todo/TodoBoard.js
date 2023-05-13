import React from 'react';
import TodoCard from './TodoCard';
import Grid from '@mui/material/Grid';


export default function TodoBoard () {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={3}>
                <TodoCard />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <TodoCard />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <TodoCard />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <TodoCard />
            </Grid>
        </Grid>
    )
}