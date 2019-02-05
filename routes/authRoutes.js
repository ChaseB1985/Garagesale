const passport = require('passport');

module.exports = app => {
    
// app.get('/auth/google', 
//     passport.authenticate('google', {
//         scope: ['profile', 'email']
//         //options obj, what kind of access user has(prof and email)
//         })
// );
// app.get(
//     '/auth/google/callback', 
//     passport.authenticate('google'),
//     (req, res) => {
//         res.redirect('/surveys');
//         }
//     );
app.get('/auth/google',
  passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ] }
));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/surveys');
  });

app.get('/api/logout', (req, res) => {
    req.logout(); 
    res.redirect('/'); 
    //shows user is logged out
});

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    }); 




    app.get('/auth/github',
      passport.authenticate('github'),
      function(req, res){});
    app.get('/auth/github/callback',
      passport.authenticate('github', { failureRedirect: '/' }),
      function(req, res) {
        res.redirect('/surveys');
      });
};
    // app.get('/google/redirect', (req, res) =>{
    //         res.send('you reached the callback uri');
    //     });
// app.get('/user/login', (req, res) =>{
//     res.send(req.user);
// });
// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });