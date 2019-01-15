const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const app = express(); 
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
//for heroku to pass runtime config or assign to default port 

app.listen(PORT); 