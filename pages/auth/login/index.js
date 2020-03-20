import React, { useState } from 'react'; 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link'; 
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container'; 
import { useLazyQuery } from '@apollo/react-hooks'
import { LOGIN_QUERY } from '../../../queries/user.query';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router'
import Link from '@material-ui/core/Link';
import { Alert } from 'reactstrap';

function SignIn() {

 
  const [login, {  error, data }] = useLazyQuery(LOGIN_QUERY);
  
  
  const [username,setUsername] = useState('');
  const [password,setPassword]  = useState(''); 
  
  
    if(data && data.login){
      localStorage.setItem('token',data.login.token);
      Router.push('/')
    } 
   
 

 
  return (
    <div  className="login-container d-flex justify-content-md-center align-items-center vh-100" >
    <div className="login-form">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
     
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" noValidate
         onSubmit={e => {
          e.preventDefault();
          login({ variables: { username: username,
          password: password } });   
        }}
        >
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
            label="Password"
            type="password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary" 
          >
            Sign In
          </Button>
     {  error ? <Alert color="danger">{String(error)}</Alert> :null }
          

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/auth/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
  
    </Container>
    </div>
    <style jsx >
        {`
        
        .login-container{
            height:100vh
        }
        .login-form{
            width:400px;
            background:white;
            padding:50px 0;
        }
        .login-container{
          background-image: url(/images/flat-bg.jpg);
          background-repeat: no-repeat;
          background-size: cover;
       } 

       .paper {
        display: flex;
        // margin-top: 64px;
        align-items: center;
        flex-direction: column;
      },

      
      .form {
        width: 100%;
        // margin-top: 8px;
      },
      
    
    
        `}
    </style>
</div>

    
  );
}

export default SignIn;