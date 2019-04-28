const mongoose = require('mongoose');

const todoModel = mongoose.model('todoModel');

module.exports = {
    async createTodo(req, res){
        const created = await todoModel.create(req.body);
        res.status(200).json(created);
    },

    async getTodos(req, res) {
        const todos = await todoModel.find({});
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

    async editTodoTitle(req, res) {
        const edit = await todoModel.findByIdAndUpdate(req.body.todoId, {'title': req.body.todo}, {new: true, upsert: true});
        if(edit) {
            res.status(200).json(edit);
        }
        else{
            res.status(500).json({title: "Wasn't possible to edit your todos"});
        }
    },

    async removeTodo(req, res) {
        const remove = await todoModel.findByIdAndDelete(req.params.todoId);
        if(remove) {
            res.status(200).json(remove);
        }
        else{
            res.status(500).json({title: "Wasn't possible to delete your todos"});
        }
    },

    async editTodoEnabled(req, res) {
        const edit = await todoModel.findByIdAndUpdate(req.body.todoId, {'isEnabled': req.body.isEnabled}, {new: true, upsert: true});

        if(edit) {
            res.status(200).json(edit);
        }
        else{
            res.status(500).json({title: "Wasn't possible to edit your todos"});
        }
    }
}