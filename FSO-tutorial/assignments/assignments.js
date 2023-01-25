

app.get('/info', (req, res) => {
    // Get the current date and time
    const date = new Date();
    // Get the number of entries in the phonebook
    const count = notes.length;
    // Send a response with the date and count
    res.send(`Phonebook has info for ${count} people<br><br>${date}`);
});
