

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header/Header';
import Landing from './Landing/Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
//import Routes from './Routes';
import NavBar from "./NavBar";
import LoginForm from './Login/LoginForm';
import Register from './Register';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            
            <NavBar />
             <Route exact path="/" component={Landing} />
             <Route exact path="/login" component={LoginForm} />
             <Route path="/register" component={Register} />
             <Route path="/surveys/new" component={SurveyNew} />
             <Route path="/auth/google" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);




