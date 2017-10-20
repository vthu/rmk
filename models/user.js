'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('../lib/crypto');


const userModel = function() {
    const userSchema = mongoose.Schema({
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    userSchema.pre('save', function (next) {
        const user = this;

        if (!user.isModified('password')){
            next();
            return;
        }

        const hashedPwd = bcrypt.hashSync(user.password, crypto.getCryptLevel());

        user.password = hashedPwd;
        
        next();
    });


    userSchema.methods.passwordMatches = function (plainText) {
        var user = this;
        return bcrypt.compareSync(plainText, user.password);
    }

    return mongoose.model('User', userSchema);
}

module.exports =  userModel();