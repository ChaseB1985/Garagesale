const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy; 
const GithubStrategy = require('passport-github2').Strategy;

const mongoose = require('mongoose');
const keys = require('../keychain/keys');

const User = mongoose.model('users');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
    {
    clientID: keys.google.clientID, 
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
    passReqToCallback   : true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne(
            { googleID: profile.id });
                        
            if (existingUser){
                return done(null, existingUser);
            } 
                const user = await new User({ googleID: profile.id }).save();
                done(null, user);               
        }
    )  
);


  passport.use(new GithubStrategy({
    clientID: keys.githubClientID,
    clientSecret: keys.githubClientSecret,
    callbackURL: '/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
  ));

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
