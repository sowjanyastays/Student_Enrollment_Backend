require('dotenv').config()
const express = require('express')
const app = express()
const studentRouter = require('./routes/students')
const PORT = 3500
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', errorMessage =>console.log(errorMessage))
db.once('open',()=>console.log("Connected to db"))


app.get('/',(request,response)=>{
    response.send("Home page")
})
app.use('/api/v1/students',studentRouter)

app.listen(PORT || 3500,()=>{
    console.log(`Listening to port ${PORT}`)
})