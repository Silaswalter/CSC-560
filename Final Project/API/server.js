require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors');
app.use(cors());
/*
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));*/

mongoose.connect(process.env.DATABASE_URL/*process.env.DATABASE_URL/*,{useNewUrlParser: true}*/)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const playersRouter = require('./routes/players')
app.use('/players', playersRouter)



app.listen(3000, () => console.log('Server Started'))


//
