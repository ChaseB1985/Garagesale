import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Icon,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";

const styles = theme => ({
  icon: {
    marginLeft: theme.spacing.unit
  },
  button: {
    marginBottom: 10
  },
  typography: {
    marginTop: 20
  },
  container: {
    marginTop: 25
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  textField: {
    width: "80%",
    marginBottom: 20,
    marginTop: 10
  }
});

class Register extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <Typography
                color="secondary"
                variant="headline"
                className={classes.typography}
              >
                REGISTER HERE PLEASE
              </Typography>
              <TextField
                placeholder="your vaild email"
                className={classes.textField}
                label="type in your email"
              />
              <TextField
                placeholder="your vaild password"
                className={classes.textField}
                label="type in your password"
              />
              <Button
                className={classes.button}
                color="secondary"
                variant="contained"
              >
                click
                <Icon className={classes.icon}>done</Icon>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
