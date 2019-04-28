const router = require('express').Router();
const todoController = require('./controllers/todoController')

router.post('/todos', todoController.createTodo);
router.get('/get/todos', todoController.getTodos);
router.get('/get/one/todo', todoController.getTodo);
router.put('/update/todo/title', todoController.editTodoTitle);
router.delete('/delete/todo/:todoId', todoController.removeTodo);
router.put('/update/todo/enabled', todoController.editTodoEnabled);

module.exports = router;