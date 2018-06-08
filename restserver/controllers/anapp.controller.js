// Accessing the Service that we just created
var anappService = require('../services/anapp.service')
// Saving the context of this module inside the _the variable
_this = this
// Async Controller function to get the To do List
exports.getanapp = async function(req, res, next){
    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 
    try{    
        var anappdata = await anappService.getanappdata({}, page, limit)        
        // Return the todos list with the appropriate HTTP Status Code and Message.        
        return res.status(200).json({status: 200, data: anappdata, message: "Succesfully anappdata Recieved"});        
    }catch(e){        
        //Return an Error Response Message with Code and the Error Message.        
        return res.status(400).json({status: 400, message: e.message});        
    }
}

exports.createanapp = async function(req, res, next){
    // Req.Body contains the form submit values.
    var anappdata = {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        interests: req.body.interests,
        capable: req.body.capable
    }
    try{
        // Calling the Service function with the new object from the Request Body
        var createdappdata = await anappService.createAnAppData(anappdata)
        return res.status(201).json({status: 201, data: createdappdata, message: "Succesfully Created anapp"})
    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "anapp Creation was Unsuccesfull"})
    }
}

exports.removeanapp = async function(req, res, next){
    var id = req.params.id;
    try{
        var deleted = await anappService.deleteanapp(id)
        return res.status(204).json({status:204, message: "Succesfully anapp Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}