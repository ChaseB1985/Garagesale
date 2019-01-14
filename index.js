const express = require('express');
const app = express(); 

app.get('/', (req, res) =>{
    res.send({ bye: 'friend' });
});

const PORT = process.env.PORT || 5000;
//for heroku to pass runtime config or assign to default port 

app.listen(PORT); 