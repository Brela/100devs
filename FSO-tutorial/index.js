// https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
//here, we are importing the Note model from note.js (where Mongoose connects to MongoDB and verifies that the data matches the schema)
const Note = require('./models/note')

// middleware
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send('<h1>Hellooppppoo World!</h1>')
})

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
})
// supposed to be this now with Monggose -----
app.get('/api/notes/:id', (req, res) => {
    console.log(req.params.id)
    Note.findById(Number(req.params.id)).then(note => {
        res.json(note)
    })
})


app.post('/api/notes', (req, res) => {
    const body = req.body

    if (body.content === undefined) {
        return res.status(400).json({ error: 'content missing' })
    }
    // creates a new instance of the 'Note' model and assigns the 'content' and 'important' fields of the model to 
    //the content field of the request body
    const note = new Note({
        content: body.content,
        important: body.important || false,
    })
    // The response is sent inside of the callback function for the save operation. 
    // This ensures that the response is sent only if the operation succeeded.
    // save the new note instance to the database and return the saved note in the response
    note.save().then(savedNote => {
        res.json(savedNote)
    })
})

//working on getting put to work
app.put('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Note.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(updatedNote => {
            res.json(updatedNote);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'malformatted id' });
        });
});

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(() => {
            res.status(204).end();
        })
        .catch(error => {
            res.status(400).send({ error: 'malformatted id' });

        });
});






// centralized error handling middleware to remove error handling in every endpoint
app.use((err, req, res, next) => {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)