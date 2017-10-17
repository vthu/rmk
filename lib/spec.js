'use strict';

const express = require('express');
const passport = require('passport');
const auth = require('./auth');
const db = require('./database');
const crypto = require('./crypto');
const userLib = require('./user')();

module.exports = app => {
    app.on('middleware:after:session', (eventargs) => {
        passport.use(auth.localStrategy());
        passport.serializeUser(userLib.serialize);
        passport.deserializeUser(userLib.deserialize);
        app.use(passport.initialize());
        app.use(passport.session());
    });
    return {
        onconfig: (config, next) => {
            const dbConfig = config.get('databaseConfig');
            const cryptConfig = config.get('bcrypt');

            crypto.setCryptLevel(cryptConfig.difficulty);
            console.log(db, dbConfig);
            db.config(dbConfig);
            setTimeout(() => userLib.addUsers(), 1000);
            next(null, config);
        }
    }
}