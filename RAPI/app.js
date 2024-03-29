require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const staffsRouter = require('./routes/staffs')
const formsRouter = require('./routes/forms')
const clientsRouter = require('./routes/clients')
app.use('/staffs', staffsRouter)
app.use('/forms', formsRouter)
app.use('/clients', clientsRouter)

app.listen(3000, () => console.log('Server Started'))