const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    lastLogin: {type: Date, required: false},
    registered: {type: Date, required: false},
    token: {type: String, required: false}
});

mongoose.model('todo.user', userModel);