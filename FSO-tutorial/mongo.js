// this is a practice file for setting up mongoose
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${process.env.db_password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is Easy',
    important: true,
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
