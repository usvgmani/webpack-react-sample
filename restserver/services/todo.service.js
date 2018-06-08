// Gettign the Newly created Mongoose Model we just created 
var ToDo = require('../models/todo.model')
// Saving the context of this module inside the _the variable
_this = this
// Async function to get the To do List
exports.getTodos = async function(query, page, limit){
    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        var todos = await ToDo.paginate(query, options)
        // Return the todod list that was retured by the mongoose promise
        return todos;
    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Todos')
    }
}

exports.createTodo = async function(todo){
    // Creating a new Mongoose Object by using the new keyword
    var newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    })
    try{
        // Saving the Todo 
        var savedTodo = await newTodo.save()
        return savedTodo;
    }catch(e){
        // return a Error message describing the reason     
        throw Error("Error while Creating Todo")
    }
}

exports.updateTodo = async function(todo){
    var id = todo.id
    try{
        //Find the old Todo Object by the Id
        var oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }
    // If no old Todo Object exists return false
    if(!oldTodo){
        return false;
    }
    console.log(oldTodo)
    //Edit the Todo Object
    oldTodo.title = todo.title
    oldTodo.description = todo.description
    oldTodo.status = todo.status
    console.log(oldTodo)
    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deleteTodo = async function(id){
    // Delete the Todo
    try{
        var deleted = await ToDo.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}