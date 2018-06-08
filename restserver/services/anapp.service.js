// Gettign the Newly created Mongoose Model we just created 
var AnAppData = require('../models/anappdata.model')
// Saving the context of this module inside the _the variable
_this = this
// Async function to get the To do List
exports.getanappdata = async function(query, page, limit){
    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        var datas = await AnAppData.paginate(query, options)
        // Return the todod list that was retured by the mongoose promise
        return datas;
    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Todos')
    }
}

exports.createAnAppData = async function(anappdata){
    // Creating a new Mongoose Object by using the new keyword
    var newappdata = new AnAppData({
        name: anappdata.name,
        age: anappdata.age,
        sex: anappdata.sex,
        interests: anappdata.interests,
        capable: anappdata.capable,
        whendate: new Date()
    })
    try{
        // Saving the Todo 
        var saveddata = await newappdata.save()
        return saveddata;
    }catch(e){
        // return a Error message describing the reason     
        throw Error("Error while Creating an app data")
    }
}

exports.deleteanapp = async function(id){
    // Delete the Todo
    try{
        var deleted = await AnAppData.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}