'use strict';

const express = require('express');
const kraken = require('kraken-js');
const path = require('path');

const app = express();
const spec = require('./lib/spec');

app.use(kraken(spec(app)));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening @ PORT ${PORT}`);
});