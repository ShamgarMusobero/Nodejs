const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
//database name
mongoose.connect('mongodb://localhost:27017/News', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT)

})
