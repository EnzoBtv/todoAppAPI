const router = require('express').Router();
const todoController = require('./controllers/todoController')

router.post('/todos', todoController.createTodo);
router.get('/get/todos', todoController.getTodos);
router.get('/get/one/todo', todoController.getTodo);
router.put('/update/todo', todoController.editTodo);
router.delete('/delete/todo', todoController.removeTodo);

module.exports = router;