const express = require("express")

const app = express()

app.use(express.json())

app.listen(5000,()=>{
    console.log("Server is running")
})

const notes = []

app.post("/notes", (req, res)=>{

    console.log(req.body)
    res.send("notes created")
})