// https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

//-------------------------------------------------------------------------
// const password = process.env.db_password



mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI
console.log('connecting to', url)
mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const noteSchema = new mongoose.Schema({
    pName: String,
    pNumber: Number,
})
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)

const Note = mongoose.model('Note', noteSchema)

// const Note = require('./models/note')

//-------------------------------------------------------------------------

// middleware
app.use(cors());
app.use(express.json())

let notes = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hellooppppoo World!</h1>')
    console.log(notes)
})

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
        console.log(notes)
    })
})

app.get('/api/notes/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const note = notes.find(note => note.id === id)
    if (!note) {
        res.status(404).json({ error: 'Person not found' });
        return;
    }
    res.json(note)
})

app.post('/api/people', (req, res) => {
    const body = req.body

    if ((!body.name) || (!body.number)) {
        return res.status(400).json({
            error: 'name or number missing from POST request properties <br> send request in JSON fromat like this {"name": "", "number": ""}'
        })
    }
    let existingPerson = notes.find(p => p.name === body.name)
    if (existingPerson) {
        return res.status(400).json({
            error: 'database contains that name already; name must be unique'
        })
    }
    const generateId = () => {
        const maxId = notes.length > 0
            ? Math.max(...notes.map(n => n.id))
            : 0
        return maxId + 1
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    notes = notes.concat(person)
    console.log(notes)
    res.json(notes)
});


app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(p => p.id !== id)
    console.log(notes)
    res.status(204).end()
})








// centralized error handling middleware to remove error handling in every endpoint
app.use((err, req, res, next) => {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)