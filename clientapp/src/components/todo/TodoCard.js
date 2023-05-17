import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TodoCard ({ cardName, cardContent }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cardName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cardContent}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Copy</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
        
    )
}