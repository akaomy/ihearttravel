import React from 'react';
import TextField from '@mui/material/TextField';
import CustomButton from '../uiReusables/CustomButton';


export default function SearchBar () {
    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <CustomButton btnText={'search'}/>
        </>
    );
}