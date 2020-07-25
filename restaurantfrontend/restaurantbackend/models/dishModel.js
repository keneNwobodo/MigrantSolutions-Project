const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },

    dishOrdered: {
        type: String,
        required: true
    },
    
    timeOrdered: {
        type: Number,
        required: true
    },

    deliveryType: {
        type: String,
        require: true
    },

    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('dishdb', dishSchema);