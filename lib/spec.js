'use strict';

const express = require('express');
const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const auth = require('./auth');
const db = require('./database');
const crypto = require('./crypto');

module.exports = app => {
    return {
        onconfig: (config, next) => {
            const { secret, extractFrom } = config.get('jwtOptions');
            const options = {
                secretOrKey: secret,
                jwtFromRequest: ExtractJwt[extractFrom]()
            };
            passport.use(auth.jwtStrategy(options));
            app.use(passport.initialize());
            const dbConfig = config.get('databaseConfig');
            const cryptConfig = config.get('bcrypt');
            crypto.setCryptLevel(cryptConfig.difficulty);
            db.config(dbConfig);
            next(null, config);
        }
    }
}