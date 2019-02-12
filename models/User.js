const mongoose = require('mongoose');

const { Schema } = mongoose; 

const userSchema = new Schema({
	username: String,
    googleID: String, 
    credits: { type: Number, default: 0 }
});


mongoose.model('users', userSchema);
