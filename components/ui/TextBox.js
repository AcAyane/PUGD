import React from 'react'
import { TextField } from '@material-ui/core';

const TextBox =  (props) =>{

    return(
        <TextField 
        fullWidth 
        size="small"
        variant="outlined"
        {...props}
    />
    )
}

export default TextBox