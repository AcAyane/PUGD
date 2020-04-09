import React from 'react'
import { Select, InputLabel, FormControl } from '@material-ui/core';

const SelectBox = ({children,label,...props}) => {
  return (

    <FormControl
      fullWidth
      size="small"
      variant="outlined">
      <InputLabel  style={
        { background: "white" }
      }>
        {label}
        </InputLabel>
      <Select 
        {...props}
      >
       {children}
      </Select>
    </FormControl>

  )
}

export default SelectBox