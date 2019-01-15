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

app.get('/api/logout', (req, res) => {
    req.logout(); 
    res.send(req.user); 
    //shows user is logged out
});

app.get('/api/current_user', (req, res) =>{
    res.send(req.user);
    }); 
};