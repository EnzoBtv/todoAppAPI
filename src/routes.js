const router = require('express').Router();
const todoController = require('./controllers/todoController');
const userController = require('./controllers/userController');

//Todo Controller
router.post('/add/todo', todoController.createTodo);
router.get('/get/todos/:userId', todoController.getTodos);
router.get('/get/one/todo', todoController.getTodo);
router.put('/update/todo/title', todoController.editTodoTitle);
router.delete('/delete/todo/:todoId/:userId', todoController.removeTodo);
router.put('/update/todo/enabled', todoController.editTodoEnabled);

//User Controller
router.post('/create/user', userController.registerNewUser);
router.get('/authenticate/:email/:password', userController.login);

module.exports = router;