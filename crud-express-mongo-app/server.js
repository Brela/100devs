const express = require('express');
const bodyParser = require('body-parser')// express can't read form data, so we install body-parser to do this
const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {     // req = request & res = response  
    res.sendFile(__dirname + '/index.html')      // res and req have built in methods
})
app.post('/quotes', (req, res) => { console.log('Helloooo') })