const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const todoModel = new Schema({
    isEnabled: {type: Boolean, trim: true, default: false, required: true},
    title: {type: String, trim: false, default: 'Nothing', required: true},
    userId: {type: String, trim: true, required: true}
});

todoModel.plugin(mongoosePaginate);

mongoose.model('todo.todo', todoModel);