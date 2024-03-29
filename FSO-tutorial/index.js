// https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

// importing the Note model from note.js (where Mongoose connects to MongoDB)
// This model is used to interact with the MongoDB database and perform CRUD operations on the notes collection.
const NotesCollection = require('./models/db')

// tells express to use ejs as the engine
app.set('view engine', 'ejs')

// middleware
app.use(cors());
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {     // req request & res response  
    // retrieving all notes from the database
    NotesCollection.find({}).then(Notes => {
        console.log(Notes)
        // we are responding to the home page request with the index.ejs file loaded with the DB notes
        res.render('index.ejs', { Notes })
    })
        .catch(error => console.error(error))
})
/* app.get('/', (req, res) => {     // req request & res response  
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
    Notes.collection('quotes').find().toArray()
        .then(results => {
            res.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))
}) */


app.get('/api/notes', (req, res) => {
    // again, retrieve all notes
    NotesCollection.find({}).then(notes => {
        res.json(notes)
    })
})
// supposed to be this now with Monggose -----
app.get('/api/notes/:id', (req, res) => {
    console.log(req.params.id)
    // retrieve specific note with 'findById() method, the param.id should be the object ID
    NotesCollection.findById(req.params.id).then(note => {
        res.json(note)
    })
})


app.post('/api/notes', (req, res) => {
    const body = req.body

    if (body.content === undefined) {
        return res.status(400).json({ error: 'content missing' })
    }
    // creates a new instance of the 'NotesCollection' model and assigns the 'content' and 'important' fields of the model to 
    //the content field of the request body
    const note = new NotesCollection({
        content: body.content,
        important: body.important || false,
    })
    // The response is sent inside of the callback function for the save operation. 
    // This ensures that the response is sent only if the operation succeeded.
    // save the new note instance to the database and return the saved note in the response
    note.save()
        .then(savedNote => {
            res.json(savedNote)
        })
        .catch(error => next(error))
})



//working on getting put to work
app.put('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    NotesCollection.findByIdAndUpdate(id, { $set: body }, { new: true })
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
    NotesCollection.findByIdAndDelete(id)
        .then(() => {
            res.status(204).end();
        })
        .catch(error => {
            res.status(400).send({ error: 'malformatted id' });

        });
});






// centralized error handling middleware to remove error handling in every endpoint
const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }

    next(error)
}

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)