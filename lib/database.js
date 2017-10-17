'use strict';

const mongoose = require('mongoose');


const db = () => ({
    config: conf => {
        mongoose.connect(`mongodb://${conf.host}/${conf.database}`, { useMongoClient: true });
        const db = mongoose.connection;
        db.on('error', (err) => {
            console.error(err);
        });
        db.once('open', () => {
            console.log('db connection open');
        });
    }
})

module.exports = db();
