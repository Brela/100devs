const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

app.use(cors());
app.use(express.json())

let people = [
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
    res.send('<h1>Hellootttttttoooo!</h1>')
})

app.get('/api/people', (req, res) => {
    res.json(people)
})
app.get('/api/people/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const person = people.find(person => person.id === id)
    if (!person) {
        res.status(404).json({ error: 'Person not found' });
        return;
    }
    res.json(person)
})
app.get('/info', (req, res) => {

    // Get the current date and time
    const date = new Date();

    // Get the number of entries in the phonebook
    const count = people.length;

    // Send a response with the date and count
    res.send(`Phonebook has info for ${count} people<br><br>${date}`);
});


app.post('/api/people', (req, res) => {
    const body = req.body

    if ((!body.name) || (!body.number)) {
        return res.status(400).json({
            error: 'name or number missing from POST request properties <br> send request in JSON fromat like this {"name": "", "number": ""}'
        })
    }
    let existingPerson = people.find(p => p.name === body.name)
    if (existingPerson) {
        return res.status(400).json({
            error: 'database contains that name already; name must be unique'
        })
    }
    const generateId = () => {
        const maxId = people.length > 0
            ? Math.max(...people.map(n => n.id))
            : 0
        return maxId + 1
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    people = people.concat(person)
    console.log(people)
    res.json(people)
});


app.delete('/api/people/:id', (req, res) => {
    const id = Number(req.params.id)
    people = people.filter(p => p.id !== id)
    console.log(people)
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