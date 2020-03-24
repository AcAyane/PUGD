import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import {useMutation} from "@apollo/react-hooks";
import {Brrowers_MUTATION} from "../../../graphql/mutations/brrowers.mutation";
import {withApollo} from "../../../shared/apollo";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Brrowers = () => {

    const [abbBrrowers] = useMutation(Brrowers_MUTATION);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [YearOfBirth, setYearOfBirth] = useState('');
    const [Gender, setGender] = useState('');



    const onSubmitHandler = (e)=>{
        e.preventDefault();
        abbBrrowers({
            variables: {
                FirstName: FirstName,
                LastName: LastName,
                Address: Address,
                Phone: Phone,
                YearOfBirth: YearOfBirth,
                Gender: Gender,
            }
        });
    }

    // eslint-disable-next-line no-unused-vars
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            margin :3,

        },}));
    const classes = useStyles();

    return (
        <div className="login-container" >
            <div className="center login-form">
                <div className="row h-100">
                    <div className="col-sm-12 my-auto">
                        <Container component="main" maxWidth="xs">
                            <div className="paper">

                                <Typography component="h1" variant="h5">
                                    New Brrower
                                </Typography>
                                    <form className="form" noValidate onSubmit={ onSubmitHandler}>
                                        <div className={"row"}>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <TextField
                                                        margin="normal" required  fullWidth variant="filled"
                                                        label="First Name" autoFocus value={FirstName}
                                                        onChange={event => { setFirstName(event.target.value) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <TextField
                                                        margin="normal" required fullWidth variant="filled"
                                                        label="Last Name" value={LastName}
                                                        onChange={event => setLastName(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <TextField
                                            margin="normal" required fullWidth label="Address" variant="filled"
                                            onChange={event => setAddress(event.target.value)} value={Address}
                                        />
                                        <TextField
                                            margin="normal" required fullWidth label="phone" variant="filled"
                                            onChange={event => setPhone(event.target.value)} value={Phone}
                                        />
                                        <TextField
                                            margin="normal" required fullWidth label="Yers of Brithday" variant="filled"
                                            onChange={event => setYearOfBirth(event.target.value)} value={YearOfBirth}
                                        />
                                        <TextField
                                            margin="normal" required fullWidth label="Gender" variant="filled"
                                            onChange={event => setGender(event.target.value)} value={Gender}
                                        />
                                        <Button type="submit" fullWidth variant="contained" color="primary">SAVE</Button>
                                </form>
                            </div>

                        </Container>
                    </div>
                </div>
            </div>
            <style jsx >
                {`
     
        .login-form{       
            background:white;
            padding:50px 0;
            height:100%;
        }
        .login-container{
          height:100vh;
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
        display: center;
        width: 100%;
        // margin-top: 8px;
      },
        `}
            </style>
        </div>
    )
}




export default withApollo({ssr:true})(Brrowers)
