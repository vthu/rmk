/**
 * Library to hold crypto specific properties
 */
'use strict';

const crypto = function () {
    let cryptLevel = -1;
    this.getCryptLevel = function() {
        return cryptLevel;
    }

    this.setCryptLevel = function(level) {
        if (cryptLevel === -1) {
            cryptLevel = level;
        }
    }
}

module.exports = new crypto();