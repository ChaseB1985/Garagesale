const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; 

const userSchema = new Schema({
	// username: String,
    // googleID: String, 
    credits: { type: Number, default: 0 }
});

//const User = mongoose.model('users', userSchema);
mongoose.model('users', userSchema);
