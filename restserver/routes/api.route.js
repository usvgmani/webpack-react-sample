var express = require('express')

var router = express.Router()
var todos = require('./api/todo.route')
var anapp = require('./api/anapp.route')


router.use('/todos', todos);
router.use('/anapp', anapp);

module.exports = router;