const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/TodoRoute')

require('dotenv').config()

const app = express()

const PORT = process.env.port || 8000

app.use(express.json());
app.use(cors())



app.use('/',routes)



mongoose
.connect(process.env.MONGODB_URL)
.then( () => console.log(`Connected to MongoDB.....`))
.catch((err) => console.log("Couldnt connected to MongoDB"))
app.listen(PORT,() => console.log(`Listening on : ${PORT}`))

