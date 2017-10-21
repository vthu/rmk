'use strict';

const mongoose = require('mongoose');


const prodModel = function() {
    const prodSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        orgAddress: {
            type: String,
            required: true,
            index: true
        },
        _user: {
            type: String,
            required: true,
            index: true
        },
        date: { type: Date, default: Date.now }
    });

   
    return mongoose.model('Product', prodSchema);
}

module.exports =  prodModel();