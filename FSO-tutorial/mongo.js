// this is a practice file for setting up mongoose



if (process.argv.length < 3) {
    console.log('add pName and pNumber as an argument')
    process.exit(1)
}
// const password = process.argv[2]  this is an optional way of entering password for db
const nameEntry = process.argv[2]
const numberEntry = process.argv[3]

const password = process.env.db_password
const url =
    `mongodb+srv://missionAPI:${password}@cluster0.dqb2wy5.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    pName: String,
    pNumber: Number,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    pName: nameEntry,
    pNumber: numberEntry
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})

// notes are retrieved from the DB with the .find method of the Note model
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})