const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express(); 

passport.use(new GoogleStrategy());
//creates a new instance of google strat 


//client id:
//secret:
const PORT = process.env.PORT || 5000;
//for heroku to pass runtime config or assign to default port 

app.listen(PORT); 