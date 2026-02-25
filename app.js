const express = require("express")

const app = express()

app.use(express.json())

app.listen(5000,()=>{
    console.log("Server is running")
})

const notes = []

app.post("/notes", (req, res)=>{

    console.log(req.body)

    notes.push(req.body)

    res.send("notes created")
})

app.get("/notes", (req, res)=>{
    res.send(notes)
    console.log(req.body)
})

app.delete("/notes/:index", (req, res)=>{
    delete notes [req.params.index]

    res.send("note deleted successfully")
})

app.patch("/notes/:index", (req, res)=>{
    notes [req.params.index].description = req.body.description

    res.send("Notes update successfully")
})