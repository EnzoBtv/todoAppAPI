const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoModel = new Schema({
    isEnabled: {type: Boolean, trim: true, default: false},
    title: {type: String, trim: false, default: 'Nothing'}
});

mongoose.model('todoModel', todoModel);