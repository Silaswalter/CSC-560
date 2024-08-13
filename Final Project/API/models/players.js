const mongoose = require('mongoose')

const playersSchema = new mongoose.Schema({
    First_Name:{
        type: String,
        required: true
    },

    Last_Name:{
        type: String,
        required: true
    },

    Average_Points:{
        type: Number,
        required: true
    },

    Average_Assists:{
        type: Number,
        required: true
    },

    Average_Steals:{
        type: Number,
        required: true
    },

    Average_Blocks:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('players', playersSchema)