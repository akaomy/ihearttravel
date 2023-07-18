import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const AddButton = styled(Button)(() => ({
    width: 35,
    height: 35,
}));

export default function CustomButton({ btnText }) {
    return (
        <AddButton
            variant="outlined"
            defaultValue={50}>{btnText}
        </AddButton>
    );
}
