const passport = require('passport');

module.exports = (app) => {
app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
        //options obj, what kind of access user has(prof and email)
        })
);
app.get('/auth/google/callback', 
    passport.authenticate('google'));
};