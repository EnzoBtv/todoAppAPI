const mongoose = require('mongoose');
const _ = require('lodash');

const todoModel = mongoose.model('todo.todo');

module.exports = {
    async createTodo(req, res){
        const allTodos = await todoModel.find({});
        const duplicates = _.find(allTodos, {'title': req.body.title});
        if(!duplicates || duplicates.length > 0) {
            const created = await todoModel.create(req.body);
            res.status(200).json(created);
        }
        else{
            res.status(500).json({title: "There's already a Todo with this name"});
        }
    },

    async getTodos(req, res) {
        const todos = await todoModel.find({'userId': req.params.userId});
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
        const edit = await todoModel.findOneAndUpdate({'_id': req.body.todoId, 'userId': req.body.userId}, {'title': req.body.todo}, {new: true, upsert: true});
        if(edit) {
            res.status(200).json(edit);
        }
        else{
            res.status(500).json({title: "Wasn't possible to edit your todos"});
        }
    },

    async removeTodo(req, res) {
        const remove = await todoModel.findOneAndDelete({'_id': req.params.todoId, 'userId': req.params.userId});
        if(remove) {
            res.status(200).json(remove);
        }
        else{
            res.status(500).json({title: "Wasn't possible to delete your todos"});
        }
    },

    async editTodoEnabled(req, res) {
        const edit = await todoModel.findOneAndUpdate({'_id': req.body.todoId, 'userId': req.body.userId}, {'isEnabled': req.body.isEnabled}, {new: true, upsert: true});

        if(edit) {
            res.status(200).json(edit);
        }
        else{
            res.status(500).json({title: "Wasn't possible to edit your todos"});
        }
    }
}