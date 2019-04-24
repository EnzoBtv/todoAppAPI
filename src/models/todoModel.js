const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const todoModel = new Schema({
    isEnabled: {type: Boolean, trim: true, default: false},
    title: {type: String, trim: false, default: 'Nothing'}
});

todoModel.plugin(mongoosePaginate);

mongoose.model('todoModel', todoModel);