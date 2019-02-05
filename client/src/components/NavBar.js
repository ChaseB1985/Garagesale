import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";
import { IconButton, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const styles = theme => ({
  open: {
    margin: 0,
    padding: 0
  },
  closed: {
    display: "none"
  },
  appBar: {
    borderBottom: `5px solid skyblue`,
    backgroundColor: `grey`,
    color: `white`
  },
  divFlex: {
    margin: 0,
    paddingRight: 5,
    color: `white`,
    padding: `0 px`,
    display: `flex`,
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  flex: {
    display: `flex`,
    flexGrow: 1
  },
  childFlex: {
    textDecoration: `none`,
    fontSize: `28px`,
    fontWeight: ``
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class NavBar extends Component {
  state = {
    isOpen: false
  };
  openSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" className={classes.menuButton}>
              <Icon>menu</Icon>
            </IconButton>
            <div className={classes.flex}>
              <Typography
                component={Link}
                to="/"
                variant="title"
                color="inherit"
                className={classes.childFlex}
              >
                Garage Sale
              </Typography>
            </div>
            <div>
              <div className={classes.divFlex}>
                <IconButton size="small" color="inherit">
                  <Icon>add</Icon><Payments/>
                </IconButton>
                <IconButton size="small" color="inherit" href="/surveys/new">
                  <Icon >mail</Icon>
                </IconButton>
                <IconButton size="small" color="inherit">
                  <Icon>search</Icon>
                </IconButton>
              </div>
              
              <Button color="inherit" component={Link} to="/register">
                <Icon className={classes.leftIcon}>person</Icon>
                register
              </Button>
              <Button color="inherit" component={Link} to="/login">
                <Icon className={classes.leftIcon}>lock_open</Icon>
                Login
              </Button>
              <Button color="inherit" href="/auth/google">
                <Icon className={classes.leftIcon}>lock_open</Icon>
                Login with Google
              </Button>
              <Button color="inherit" href="/auth/github">
                <Icon className={classes.leftIcon}>lock_open</Icon>
                Login with Github
              </Button>
              <TextField
                className={this.state.isOpen ? classes.open : classes.closed}
              />
              
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
