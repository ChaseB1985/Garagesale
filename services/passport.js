const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy; 
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
//const User = require('../models/User');

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
    clientID: keys.googleClientID, 
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    //callbackURL: 'http://localhost:3000/auth/google/callback',
    proxy: true,
    passReqToCallback   : true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne(
            { googleId: profile.id });
            //console.log(profile.id);
            //console.log(profile);
            //console.log(googleId);
            //console.log("profile fired");
            
            if (existingUser){
                return done(null, existingUser);
            } 
                const user = await new User({ googleId: profile.id }).save();
                done(null, user);               
        }
    )  
);
    // (accessToken, refreshToken, profile, done) => {
    //     //console.log(profile.id);
    //     console.log(profile);
    //     //console.log(googleId);
    //     console.log("profile fired");
    // }
// ));


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));
