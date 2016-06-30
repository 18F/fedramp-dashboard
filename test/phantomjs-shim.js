Array.prototype.includes = Array.prototype.includes || function (value) {
    'use strict';
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};
