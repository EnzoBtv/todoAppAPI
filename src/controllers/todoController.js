const mongoose = require('mongoose');

const todoModel = mongoose.model('todoModel');

module.exports = {
    async createTodo(req, res){
        const created = await todoModel.create(req.body);
        res.status(200).json(created);
    },

    async getTodos(req, res) {
        const todos = await todoModel.paginate({}, {page: req.body.page, limit: 10});
        if(todos) {
            res.status(200).json(todos);
        }
        else{
            res.status(500).json({title: "Wasn't possible to get your todos"});
        }
    },

    async getTodo(req, res) {
        const todo = await todoModel.findById(req.body.todoId);
        if(todo) {
            res.status(200).json(todo);
        }
        else{
            res.status(500).json({title: "Wasn't possible to get your todo"});
        }
    },

    async editTodo(req, res) {
        const edit = await todoModel.findByIdAndUpdate(req.body.todoId, req.body.todo, {new: true, upsert: true});
        if(edit) {
            res.status(200).json(edit);
        }
        else{
            res.status(500).json({title: "Wasn't possible to edit your todos"});
        }
    },

    async removeTodo(req, res) {
        const remove = await todoModel.findByIdAndDelete(req.body.todoId);
        if(remove) {
            res.status(200).json(remove);
        }
        else{
            res.status(500).json({title: "Wasn't possible to get your todos"});
        }
    }
}