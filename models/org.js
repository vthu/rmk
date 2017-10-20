'use strict';

const mongoose = require('mongoose');


const orgModel = function() {
    const orgSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        _user: {
            type: String,
            required: true,
            index: true
        },
        address: {
            type: String,
            required: true
        },
        date: { type: Date, default: Date.now }
    });

   
    return mongoose.model('Org', orgSchema);
}

module.exports =  orgModel();