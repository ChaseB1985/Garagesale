// import React from 'react';

// const Landing = () => {
//     return (
//         <div style={{ textAlign: 'center'}}>
//             <h1>
//             Garage Sale!
//             </h1>
//             Collect feedback from your users
//         </div>
//     );
// };

// export default Landing;

import React, { Component, Fragment } from "react";
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
  typo: {
    marginBottom: `10px`,
    color: `white`
  },
  paralax: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    justifyContent: "center"
  },
  Grid: {
    margin: 20
  },
  heroButton: {
    margin: 3
  },
  buttonTwo: {
    margin: 3
  },
  Typo: {
    padding: 15,
    backgroundColor: `darkgreen`
  }
});

class Home extends Component {
  state = {
    url:
      "https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?cs=srgb&dl=bags-business-commerce-1087727.jpg&fm=jpg",
    show: [
      {
        id: 1,
        url:
          "https://images.pexels.com/photos/461830/pexels-photo-461830.jpeg?cs=srgb&dl=boxes-britain-city-461830.jpg&fm=jpg"
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/375903/pexels-photo-375903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        id: 2,
        url:
          "https://images.unsplash.com/photo-1507525475752-ed223abbfff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/375892/pexels-photo-375892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        id: 4,
        url:
          "https://images.pexels.com/photos/896018/pexels-photo-896018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      }
    ]
  };
  changing = () => {
    const num = Math.floor(Math.random() * 5);
    this.setState({ url: this.state.show[num].url });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div
          className={classes.paralax}
          onClick={this.changing}
          style={{
            backgroundImage: `url(${this.state.url})`,
            minHeight: 200
          }}
        >
          <Typography className={classes.typo} variant="title">
            Sell Your stuff though email!
          </Typography>
          <div>
            <Grid container justify="center">
              <Button
                className={classes.heroButton}
                variant="contained"
                fullWidth
                color="primary"
                onClick={this.change}
              >
                button 1
              </Button>
            </Grid>
            <Grid container>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 2
              </Button>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 3
              </Button>
            </Grid>
            <Grid container justify="center">
              <IconButton
                onClick={this.changing}
                size="large"
                style={{ color: "white", fontSize: 200 }}
              >
                <Icon size="large">keyboard_arrow_left</Icon>
              </IconButton>
              <IconButton
                onClick={this.changing}
                style={{ color: "white", fontSize: 200 }}
              >
                <Icon>keyboard_arrow_right</Icon>
              </IconButton>
            </Grid>
          </div>
        </div>
        <Grid container justify="center" className={classes.Typo}>
          <Typography style={{ color: "white" }} variant="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <div
          className={classes.paralax}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=light-landscape-nature-326055.jpg&fm=jpg')`,
            minHeight: 200
          }}
        >
          <Typography className={classes.typo} variant="title">
            THIS IS THE LANDING PAGE OF THIS WEBSITE
          </Typography>
          <div>
            <Grid container justify="center">
              <Button
                className={classes.heroButton}
                variant="contained"
                fullWidth
                color="primary"
              >
                button 1
              </Button>
            </Grid>
            <Grid container>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 2
              </Button>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 3
              </Button>
            </Grid>
          </div>
        </div>
        <Grid container justify="center" className={classes.Typo}>
          <Typography style={{ color: "white" }} variant="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
      </Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
