const router = require('express').Router();
const todoController = require('./controllers/todoController')

router.post('/todos', todoController.createTodo);

module.exports = router;