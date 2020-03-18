import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const login = ()=>{ 

   

return(
    <div  className="login-container d-flex justify-content-md-center align-items-center vh-100" >
    <div className="login-form">
    <form  noValidate autoComplete="off">
        
        <TextField id="standard-secondary" label="Username" color="secondary" />
        <TextField id="standard-secondary" label="Password" color="secondary" />
     
        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
      
      </form>
    </div>
    <style jsx >
        {`
        
        .login-container{
            height:100vh
        }
        .login-form{
            width:400px;
        }
        `}
    </style>
</div>
)
}
export default login