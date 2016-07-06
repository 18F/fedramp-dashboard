Array.prototype.includes = Array.prototype.includes || function (value) {
    'use strict';
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

Array.prototype.find = Array.prototype.find || function (predicate) {
    'use strict';
    if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
    }

    if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
    }

    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
            return value;
        }
    }

    return undefined;
};

// Array.prototype.reduce = function (callback) {
//     'use strict';
//     if (this === null) {
//         throw new TypeError('Array.prototype.reduce called on null or undefined');
//     }

//     if (typeof callback !== 'function') {
//         throw new TypeError(callback + ' is not a function');
//     }

//     var t = Object(this), len = t.length >>> 0, k = 0, value;
//     if (arguments.length == 2) {
//         value = arguments[1];
//     } else {
//         while (k < len && !(k in t)) {
//             k++; 
//         }
//         if (k >= len) {
//             throw new TypeError('Reduce of empty array with no initial value');
//         }
//         value = t[k++];
//     }

//     for (; k < len; k++) {
//         if (k in t) {
//             value = callback(value, t[k], k, t);
//         }
//     }

//     return value;
// };
