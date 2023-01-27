//  extracted the Mongoose-specific code into its own module

const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI
mongoose.connect(url)
    .then(result => {
        console.log('Connected to MongoDB')

    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
        // these properties are built into mongoose 
    },
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// here, we are exporting the Note model, which can be used in other parts of the 
// application to interact with the collection in the MongoDB database
// 'Note' is a name we give and represents the collection tht we are connected to with the URL in MongoDB

// in Mongoose, models are typically capitalized and use camelCase
module.exports = mongoose.model('NoteCollection', noteSchema)
console.log(module.exports)

