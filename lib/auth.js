/**
 * Module that will handle our authentication tasks
 */
'use strict';

const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


exports.jwtStrategy = (opts) => {
    return new JwtStrategy(opts, (jwtPayload, done) => {
        User.findOne({
            _id: jwtPayload.id
        }, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, { message: 'User not found' });
            }

            done(null, user);
        })
    });
}


exports.isAuthenticated = () => {
    return (req, res, next) => {
        const auth = {
            '/api/products': true
        };
        const route = req.url;
        if (!auth.route) {
            next();
            return;
        } else if (!req.isAuthenticated()) {
            res.redirect('/');
        } else {
            next();
        }
    } 
}