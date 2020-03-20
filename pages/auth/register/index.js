import React, { useState } from 'react';
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';
 
import { FaCircle } from 'react-icons/fa'; 
import { useMutation } from '@apollo/react-hooks'
import Router from 'next/router'
import { REGISTER_QUERY } from '../../../queries/user.query';
export  function signup() {

  const [register] = useMutation(REGISTER_QUERY);

  const [username,setUsername] = useState('');
  const [password,setPassword]  = useState(''); 
  const [password2,setPassword2]  = useState(''); 

  return (
    <div className="register-container" >

      <div className="card animate">
        <div className="card-content " >
          <FaCircle size="14px" color="#8e24aa" />
          <h5 className="uk-icon">Add user</h5>
        </div>
      </div>

      <div className="card animate">
        <div className="card-content " >

       <form  onSubmit={e => {
          e.preventDefault();
          if(password === password2){
            register({ variables: { username: username,
              password:password } }).then(()=>{
                alert("User created succefully")
                Router.push('/auth/login')
              }).catch(ss=>  alert(ss)    
                  
              );
             
              
          }else{
            alert(" PAsswords don't match ")
          }
        }}>
       <TextField
           
           margin="normal"
           required
           fullWidth
           label="Username"  
           autoFocus
           onChange={event => {setUsername(event.target.value)}}
           value={username}
         />
         <TextField
           margin="normal"
           required
           fullWidth
           type="password"
           label="password" 
           onChange={event => setPassword(event.target.value)}
           value={password}
         />
         <TextField
           margin="normal"
           required
           fullWidth
           type="password"
           label="password" 
           onChange={event => setPassword2(event.target.value)}
           value={password2}
         />
          <Button
           type="submit" 
           variant="contained"
           color="primary" 
         >
           Sign Up
         </Button>
       </form>

        </div>
      </div>


      <style jsx >
        {`
        
        .register-container{
            height:100vh
        }
        .uk-icon { 
          margin-left:10px;
        display:inline-block;
      }
        `}
      </style>
    </div>


  );
}

 


export default signup;