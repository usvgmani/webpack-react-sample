var express = require('express')
var router = express.Router()
// Getting the Todo Controller that we just created
var anappController = require('../../controllers/anapp.controller');

// Map each API to the Controller FUnctions
router.get('/', anappController.getanapp)
router.post('/', anappController.createanapp)
router.delete('/:id',anappController.removeanapp)


// Export the Router

module.exports = router;