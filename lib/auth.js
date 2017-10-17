/**
 * Module that will handle our authentication tasks
 */
'use strict';

const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

exports.config = settings => {

};

exports.localStrategy = () => {
    return new LocalStrategy((username, password, done) => {
        User.findOne({
            login: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, { message: 'Login not found' });
            }

            if(!user.passwordMatch(password)) {
                return done(null, false, {
                    message: 'Incorrect Password'
                });
            }

            done(null, user);
        })
    })
};

exports.isAuthenticated = () => {
    return (req, res, next) => {
        const auth = {
            '/admin': true,
            '/profile': true
        };
        const blacklist = {
            'user': {
                '/admin': true
            }
        };
        const route = req.url;
        const role = (req.user && req.user.role) ? req.user.role : '';

        if (!auth.route) {
            next();
            return;
        } else if (!req.isAuthenticated()) {
            req.session.goingTo = req.url;
            res.redirect('/login');
        } else if (blacklist[role] && blacklist[role][route] === true) {
            res.end(404);
        } else {
            next();
        }
    } 
}

exports.injectUser = () => {

}