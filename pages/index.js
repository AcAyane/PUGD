import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useMutation} from "@apollo/react-hooks"
import {setToken} from "./token";
import Router from 'next/router'
import {LOGIN_USER_Mutation, SIGNUP_USER_Mutation} from "../mutations/user.mutation";

const Login = props => {
    const [isLogin, setLogin] = useState(true);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const [signup] = useMutation(SIGNUP_USER_Mutation,{
        onCompleted(data) {
            const {login} = data
            console.log("token is:", login.token)
            setToken(login.token)

        }
    });

    const [signin] = useMutation(LOGIN_USER_Mutation, {
        onCompleted(data) {
            const {login} = data
            console.log("Login sucess => token is:", login.token)
            setToken(login.token)
            props.history.push("/book");
        }
    })

    const submitRequest = () => {
        if (isLogin) {
            signin({variables: { username, password }})
        }
        else {
            signup({ variables: { username, password }});
        }
    };

    return (

        <div className="login-container d-flex justify-content-md-center align-items-center vh-100" >

            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div id="login-page" className="row">
                            <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                                <form className="login-form">
                                    <div className="row margin">
                                        <div className={"input-field col s12"}>
                                            <h4 className="ml-4">{isLogin ? "Login" : "Sign Up"}</h4>
                                            <div className="flex flex-column">
                                                {!isLogin && (
                                                    <input
                                                        value={username}
                                                        onChange={e => setUserName(e.target.value)}
                                                        type="text"
                                                        placeholder="Your name is her"
                                                    />
                                                )}
                                                <div className ="row">
                                                    <div className ="input-field col s5">
                                                        <i className="material-icons prefix pt-2">person_outline</i>
                                                        <input
                                                            value={username}
                                                            onChange={e => setUserName(e.target.value)}
                                                            type="text"
                                                            placeholder="Your email address"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row ">
                                                    <div className ="input-field col s12">
                                                        <i className="material-icons prefix pt-2">lock_outline</i>
                                                        <input
                                                            value={password}
                                                            onChange={e => setPassword(e.target.value)}
                                                            type="password"
                                                            placeholder="Choose a safe password"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col s12 m12 l12 ml-2 mt-1">
                                                    <p>
                                                        <label>
                                                            <input type="checkbox"/>
                                                            <span>Remember Me</span>
                                                        </label>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <div >

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex mt3">
                                                <button
                                                    type="button"
                                                    className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                                                    onClick={ submitRequest }

                                                >
                                                    {isLogin ? "login" : "create account"}
                                                </button>

                                                <div className="row">
                                                    <div className="input-field col s6 m6 l6">
                                                        <p className="margin medium-small">
                                                            <a href="/signup">
                                                                Register now
                                                            </a>
                                                            {/*<span onClick={() => Router.push("/signup")}>
                                                                Register now plz</span>*/}

                                                        </p>
                                                    </div>
                                                    <div className="input-field col s6 m6 l6">
                                                        <p className="margin right-align medium-small"><a
                                                            href="user-forgot-password.html">Forgot password ?</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>

                {`

                    body{
                        background-image: url("../images/flat-bg.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    /!*----------------------------------------
                        Login Page
                    ------------------------------------------*!/
                    .container {
                        width: 450px;
                    }
                    .login-bg {
                        background-image: url("../images/gallery/flat-bg.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                    }

                    #login-page {
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-pack: center;
                        -webkit-justify-content: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        height: 100vh;

                    }

                    #login-page .card-panel.border-radius-6.login-card {
                        margin-left: 0 !important;
                    }

                    .login-container{
                                height:100vh
                            }
                    .login-form{
                        width:400px;
                    }

                `}
            </style>
        </div>


    );
}


export default Login;
