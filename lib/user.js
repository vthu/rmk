'use strict';

const User = require('../models/user');

const UserLibrary = () => ({
    addUsers() {
        const u1 = new User({
            name: 'Vishal',
            login: 'vthu',
            password: 'password',
            role: 'admin'
        });

        const u2 = new User({
            name: 'Garima',
            login: 'garima',
            password: 'password',
            role: 'user'
        });

        u1.save();
        u2.save();
    },
    serialize(user, done) {
        done(null, user.id);
    },
    deserialize(id, done) {
        User.findOne({
            _id: id
        }, (err, user) => {
            if (err) {
                console.log(err);
                done(err);
                return;
            }
            done(null, user);
        })
    }
});

module.exports = UserLibrary;