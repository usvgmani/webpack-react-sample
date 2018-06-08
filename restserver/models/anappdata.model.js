var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var anAppDataSchema = new mongoose.Schema({    
    name: String,
    age: String,
    sex: String,
    interests: String,
    capable: String,
    whendate: Date
})

anAppDataSchema.plugin(mongoosePaginate)
const AnAppData = mongoose.model('AnAppData', anAppDataSchema)

module.exports = AnAppData;