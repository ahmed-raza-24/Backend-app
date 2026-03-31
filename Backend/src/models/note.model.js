const mongooose = require('mongoose')
const { title } = require('node:process')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongooose.model("notes", noteSchema)