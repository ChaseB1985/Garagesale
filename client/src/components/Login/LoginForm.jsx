// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// // import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
// import axios from 'axios';
// class LoginForm extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			username: '',
// 			password: '',
// 			redirectTo: null
// 		}
// 		// this.googleSignin = this.googleSignin.bind(this)
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 		this.handleChange = this.handleChange.bind(this)
// 	}

// 	handleChange(event) {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		})
// 	}

// 	handleSubmit(event) {
// 		event.preventDefault()
// 		console.log('handleSubmit')
// 		// this.props._login(this.state.username, this.state.password)
// 		// this.setState({
// 		// 	redirectTo: '/'
// 		// })
//         axios
//             //.post('/user/login', {
//             .post('/login', {
//                 username: this.state.username,
//                 password: this.state.password
//             })
//             .then(response => {
//                 console.log('login response: ')
//                 console.log(response)
//                 if (response.status === 200) {
//                     // update App.js state
//                     this.props.updateUser({
//                         loggedIn: true,
//                         username: response.data.username
//                     })
//                     // update the state to redirect to home
//                     this.setState({
//                         redirectTo: '/'
//                     })
//                 }
//             }).catch(error => {
//                 console.log('login error: ')
//                 console.log(error);
                
//             })


// 	}

// 	render() {
// 		if (this.state.redirectTo) {
// 			return <Redirect to={{ pathname: this.state.redirectTo }} />
// 		} else {
// 			return (
// 				<div className="LoginForm">
// 					<h1>Login form</h1>
// 					<form>
// 						<label htmlFor="username">Username: </label>
// 						<input
// 							type="text"
// 							name="username"
// 							value={this.state.username}
// 							onChange={this.handleChange}
// 						/>
// 						<label htmlFor="password">Password: </label>
// 						<input
// 							type="password"
// 							name="password"
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 						/>
// 						<button onClick={this.handleSubmit}>Login</button>
// 					</form>
// 					<a href="/auth/google">
// 						{/* <GoogleButton /> */}
// 						<img src={googleButton} alt="sign into Google Button" />
// 					</a>
// 				</div>
// 			)
// 		}
// 	}
// }

// export default LoginForm

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  FormHelperText,
  TextField,
  Paper,
  Input,
  Grid,
  IconButton,
  Icon,
  FormControl,
  Card,
  InputLabel,
  CardActionArea,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.type === "dark",
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  div: {
    display: "flex",
    justifyContent: "center"
  },
  cardHeader: {
    backgroundColor: "#FF1744",
    color: "#FAFAFA"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  textfield: {
    width: "90%",
    marginTop: 10
  },
  item: {
    margin: 15
  },
});

function Login(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Grid container justify='center' style={{ marginTop: 20 }} >
        <Grid item xs={12} sm={10} md={8} className={classes.item} >
          <Paper style={{backgroundColor: ''}} >
            <Grid container justify='center' >
              <Typography color='secondary' style={{ marginTop: 15 }} variant='headline' align='center' >LOGIN FORM</Typography>
            </Grid>
            <Grid container justify='center' className={classes.item} >
              <TextField
              variant='outlined'
              className={classes.textfield}
              label='ENTER YOUR NAME HERE'
             />
            </Grid>
            <Grid container justify='center' className={classes.item} >
              <TextField
              variant='outlined'
              className={classes.textfield}
              label='ENTER YOUR EMAIL HERE'
              />
            </Grid>
            <Grid container justify='center' className={classes.item} >
              <TextField
              variant='outlined'
              className={classes.textfield}
              label='ENTER YOUR PASSWORD HERE'
             />
            </Grid>
            <Grid container justify='center' >
              <Button style={{ marginBottom: 15 }} variant='contained' color='secondary' >login</Button>
            </Grid>
          </Paper>  
        </Grid>
      </Grid>
    </Fragment>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
