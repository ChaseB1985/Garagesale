
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
    backgroundColor: `darkgrey`
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
                Change Picture
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
          <Typography style={{ color: "black" }} variant="title">
            This application makes selling your stuff easier. You can login with 
            Google or Github, if you do not have one of those accounts you can still 
            Register and login the old fashioned way. Next click to add some credits,
            for now you can use credit card 42424242424242 to see how it works. Then click 
            on the mail icon and fill out the info for what you would like to sell, follow 
            the steps and the recipient will get you message with what you are trying to sell.
          </Typography>
        </Grid>
        <div
          className={classes.paralax}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525475752-ed223abbfff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')`,
            minHeight: 200
          }}
        >
          <Typography className={classes.typo} variant="title">
            Make Money Selling Old Stuff
          </Typography>
          
        </div>
        <Grid container justify="center" className={classes.Typo}>
          <Typography style={{ color: "black" }} variant="title">
          I hope you enjoy trying to get rid of some of your old junk.
          I bet it would be nice being able to get your car in the garage
          again.         
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
