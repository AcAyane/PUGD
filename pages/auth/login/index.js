import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks'
import { LOGIN_QUERY } from '../../../graphql/queries/user.query';
import Router from 'next/router'
import { withApollo } from '../../../shared/apollo';
import Head from 'next/head';
import TextBox from '../../../components/ui/TextBox';
import Button from '../../../components/ui/Button';
function SignIn() {

  const [login, { error, data }] = useLazyQuery(LOGIN_QUERY);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onSubmitHandler = (e) => {
 
    e.preventDefault();
    login({
      variables: {
        username: username,
        password: password
      }
    });
  }


  if (data && data.login) {
    localStorage.setItem('token', data.login.token);
    Router.push('/')
  }

  return (

    <React.Fragment>
      <Head>
        <link rel="stylesheet" type="text/css" href="/app-assets/css/pages/login.css"></link>
      </Head>
      <div style={{ height: "100vh" }} className="login-bg">
        <div className="col s12 ">
          <div className="container">
            <div id="login-page" className="row">
              <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                <form className="login-form">
                  <div className="row">
                    <div className="input-field col s12">
                      <h5 className="ml-4">Sign in</h5>
                    </div>
                  </div>
                  <div className="row margin">
                    <TextBox icon="person_outline" type="text" label="Username"
                      onChange={event => { setUsername(event.target.value) }}
                      value={username} />
                  </div>
                  <div className="row margin">

                    <TextBox icon="lock_outline" type="password" label="Password"
                      onChange={event => { setPassword(event.target.value) }}
                      value={password} /> 

                  
                  </div>
                  <div className="row">
                    <div className="col s12 m12 l12 ml-2 mt-1">
                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>Remember Me</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{ margin: "20px 0" }}>
                    <Button rounded fullwidth onClick={onSubmitHandler}>Login</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="content-overlay"></div>
        </div>


      </div>

    </React.Fragment>



    //  <div className="login-container float-right" >
    //       <div className="float-right login-form">
    //         <div className="margin-auto">
    //           <div className="col-sm-12 my-auto">
    //             <Container component="main" maxWidth="xs">
    //               <CssBaseline />
    //               <div className="paper">

    //                 <Typography component="h1" variant="h5">
    //                   Sign in
    //                 </Typography>
    //                 <form className="form" noValidate
    //                   onSubmit={onSubmitHandler}
    //                 >
    //                   <TextField
    //                     margin="normal"
    //                     required
    //                     fullWidth
    //                     label="Username"
    //                     autoFocus
    //                     onChange={event => { setUsername(event.target.value) }}
    //                     value={username}
    //                   />
    //                   <TextField
    //                     margin="normal"
    //                     required
    //                     fullWidth
    //                     label="Password"
    //                     type="password"
    //                     onChange={event => setPassword(event.target.value)}
    //                     value={password}
    //                   />
    //                   <FormControlLabel
    //                     control={<Checkbox value="remember" color="primary" />}
    //                     label="Remember me"
    //                   />
    //                   <Button
    //                     type="submit"
    //                     fullWidth
    //                     variant="contained"
    //                     color="primary"
    //                   >
    //                     Sign In
    //                   </Button>
    //                   {error ? <div  >{String(error.message)}</div> : null}
    //                 </form>
    //               </div>

    //             </Container>
    //           </div>
    //         </div>
    //       </div>
    //       <style jsx >
    //         {`

    //         .login-form{
    //             width:400px;
    //             background:white;
    //             padding:50px 0;
    //             height:100%;
    //             float:right;
    //             display:flex;
    //         }
    //         .margin-auto{
    //            margin:auto
    //         }
    //         .login-container{
    //           height:100vh;
    //           background-image: url(/images/flat-bg.jpg);
    //           background-repeat: no-repeat;
    //           background-size: cover;
    //        } 
    //        .paper {
    //         display: flex;
    //         // margin-top: 64px;
    //         align-items: center;
    //         flex-direction: column;
    //       }
    //       .form {
    //         width: 100%;
    //         // margin-top: 8px;
    //       },
    //         `}
    //       </style>
    //     </div>

  );
}
export default withApollo({ ssr: true })(SignIn);