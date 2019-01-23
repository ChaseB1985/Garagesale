const passport = require('passport');

module.exports = app => {
    //removed() around app
app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
        //options obj, what kind of access user has(prof and email)
        })
);
app.get(
    '/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');
        }
    );

app.get('/api/logout', (req, res) => {
    req.logout(); 
    res.redirect('/'); 
    //shows user is logged out
});

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    }); 
};

// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });