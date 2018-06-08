var express = require('express')
var router = express.Router()
// Getting the Todo Controller that we just created
var ToDoController = require('../../controllers/todo.controller');

// Map each API to the Controller FUnctions
router.get('/', ToDoController.getTodos)
router.post('/', ToDoController.createTodo)
router.put('/', ToDoController.updateTodo)
router.delete('/:id',ToDoController.removeTodo)


// Export the Router

module.exports = router;