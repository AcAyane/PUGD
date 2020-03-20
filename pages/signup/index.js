import React, {useState} from 'react';
import {useMutation} from "@apollo/react-hooks"
import {setToken} from "./token";
import {SIGNUP_USER_Mutation} from "../mutations/user.mutation";


const SingUp = props => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();



    const [signup] = useMutation(SIGNUP_USER_Mutation,{
        onCompleted(data) {
            const {_id} = data
            console.log("id user is:", _id)
            //props.history.push("/");
        }
    });

    const submitRequest = () => {
        if (password !== confirmPassword) {
            alert("Passwords and ConfrimPassword don't match");
        } else {
            console.log("password  matched",password,confirmPassword)
            signup({ variables: { username, email, password }});
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
                                            <h4 className="ml-4">Sign Up</h4>
                                            <div className="flex flex-column">
                                                <div className ="row">
                                                    <div className ="row">
                                                        <div className ="input-field col s5">
                                                            <i className="material-icons prefix pt-2">person_outline</i>
                                                            <input
                                                                value={username}
                                                                onChange={e => setUserName(e.target.value)}
                                                                type="text"
                                                                placeholder="user name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className ="row">
                                                        <div className ="input-field col s5">
                                                            <i className="material-icons prefix pt-2">mail_outline</i>
                                                            <input
                                                                value={email}
                                                                onChange={e => setEmail(e.target.value)}
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

                                                    <div className="row ">
                                                        <div className ="input-field col s12">
                                                            <i className="material-icons prefix pt-2">lock_outline</i>
                                                            <input
                                                                value={confirmPassword}
                                                                onChange={e => setConfirmPassword(e.target.value)}
                                                                type="password"
                                                                placeholder="Choose a safe password"
                                                            />
                                                        </div>
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
                                                        create account
                                                    </button>



                                                    <div className="row">
                                                        <div className="input-field col s6 m6 l6">
                                                            <p className="margin medium-small">

                                                                <a href="/">
                                                                    a ready have a account
                                                                </a>
                                                            </p>
                                                        </div>

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


export default SingUp;
