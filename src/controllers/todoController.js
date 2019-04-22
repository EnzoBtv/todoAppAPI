const mongoose = require('mongoose');

const todoModel = mongoose.model('todoModel');

module.exports = {
    async createTodo(req, res){
        const created = await todoModel.create(req.body);
        res.status(200).json(created);
    }
}