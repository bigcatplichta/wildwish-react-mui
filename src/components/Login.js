import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Container, Paper, Typography, TextField, Grid, Link, Button } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { loginUser } from '../actions/userActions'

import { Formik, Form, Field } from 'formik';


// Temp secret key while building login form
const GOOGLE_OAUTH_ID = process.env.REACT_APP_DEV_GOOGLE_OAUTH_ID;
const GOOGLE_OAUTH_KEY = process.env.REACT_APP_DEV_GOOGLE_OAUTH_KEY
const FACEBOOK_APP_ID = "554005682058138"

// styles copied from example form to play with
const useStyles = makeStyles((theme) => ({
    
    login: {
      marginTop: theme.spacing(5),
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
      alignItems: 'center',
    }
  }));


function Login(props) {
    const classes = useStyles();

    // React hooks for state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailChange = (event) => {
        setEmail(
            event.target.value
        );
    }
            
    const handlePasswordChange = (event) => {
        setPassword(
            event.target.value
        );
    }

    // Or use state with class component
    // handleInputChange = (event) => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    
    // componentDidMount() {
    //     // Request access token from server
    //     // Make GET request to /users/sign_in
    //     // Grab CSRF token from response header
    //     // Include in header of POST request to /users/sign_in
    // }
                    
    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        
        if (email && password) {
            props.loginUser(email, password);
        }
    }


    return (
        <Container>
            <Paper elevation={1} >
                <div className={classes.login}>
                <GoogleLogin 
                    clientId={GOOGLE_OAUTH_ID}
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <br />
                <FacebookLogin
                    appId={FACEBOOK_APP_ID}
                    textButton="Continue with Facebook"
                    size="medium"
                    fields="name,email"
                    callback={responseFacebook} 
                />
                <br />
                <Typography>Or continue with email:</Typography>
                <form name="login" onSubmit={handleSubmit}>
                    <TextField 
                        fullWidth 
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        required onChange={handleEmailChange}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        required
                        onChange={handlePasswordChange}
                        style={{ marginTop: 10 }}
                    />
                    <Button type="submit" color="primary" variant="outlined">
                        Submit
                    </Button>
                </form>
                <br />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Create an account
                        </Link>
                    </Grid>
                </Grid>
                </div>
            </Paper>
        </Container>
    )
}

export default connect(null, { loginUser })(Login);

// class Login extends Component {
   
//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.id]: event.target.value
//         });
//     }
    
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.dispatch({type: 'ADD_USER', user: this.state})
//     }
    
//     render() {
//         return(
//             <form className={classes.form} onSubmit={this.handleOnSubmit}>
//             <h1>This is the login page.</h1>
//             <p>It's not hooked up yet...</p>
//             <p>
//                 <input
//                 type="text"
//                 id="username"
//                 onChange={this.handleInputChange}
//                 placeholder="username"
//                 />
//             </p>
//             <p>
//                 <input
//                 type="text"
//                 id="hometown"
//                 onChange={this.handleInputChange}
//                 placeholder="hometown"
//                 />
//             </p>
//             <input type="submit" />
//             </form>
//         )
//     }
// }

// export default connect(Login);

// import React from 'react';
// import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
// import { Face, Fingerprint } from '@material-ui/icons'
// const styles = theme => ({
//     margin: {
//         margin: theme.spacing.unit * 2,
//     },
//     padding: {
//         padding: theme.spacing.unit
//     }
// });

// class Login extends React.Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <Paper className={classes.padding}>
//                 <div className={classes.margin}>
//                     <Grid container spacing={8} alignItems="flex-end">
//                         <Grid item>
//                             <Face />
//                         </Grid>
//                         <Grid item md={true} sm={true} xs={true}>
//                             <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
//                         </Grid>
//                     </Grid>
//                     <Grid container spacing={8} alignItems="flex-end">
//                         <Grid item>
//                             <Fingerprint />
//                         </Grid>
//                         <Grid item md={true} sm={true} xs={true}>
//                             <TextField id="username" label="Password" type="password" fullWidth required />
//                         </Grid>
//                     </Grid>
//                     <Grid container alignItems="center" justify="space-between">
//                         <Grid item>
//                             <FormControlLabel control={
//                                 <Checkbox
//                                     color="primary"
//                                 />
//                             } label="Remember me" />
//                         </Grid>
//                         <Grid item>
//                             <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
//                         </Grid>
//                     </Grid>
//                     <Grid container justify="center" style={{ marginTop: '10px' }}>
//                         <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
//                     </Grid>
//                 </div>
//             </Paper>
//         );
//     }
// }

// export default withStyles(styles)(Login);