import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)(() => ({
    width: 35,
    height: 35,
}));

export default function JournalButton({ btntext, onClick }) {
    return (
        <CustomButton
            variant="outlined"
            defaultValue={50}
            onClick={onClick}
        >
                {btntext}
        </CustomButton>
    );
}
