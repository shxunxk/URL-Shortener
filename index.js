const express = require("express")

const urlRoute = require('./routes/url')

const {connectToMongoDB} = require('./connect')

const port = 8000

const app = express()

connectToMongoDB('mongodb://localhost:27027/short-url').then(
    console.log("MongoDB connected")
)

app.use('/url', urlRoute);

app.listen(port, ()=>{
    console.log("Server started")
})