const passport = require('passport');

module.exports = app => {
    



app.get('/api/logout', (req, res) => {
    req.logout(); 
    res.redirect('/'); 
    //shows user is logged out
});

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    }); 

};
app.get('/google/redirect', (req, res) =>{
        res.send('you reached the callback uri');
    });
app.get('/user/login', (req, res) =>{
    res.send(req.user);
});
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });