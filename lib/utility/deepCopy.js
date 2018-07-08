'use strict';

var deepCopy = function deepCopy(src, dest) {
    if (!dest) {
        dest = {};
    }
    for (var key in src) {
        if (Array.isArray(src[key])) {
            dest[key] = src[key];
        } else if (typeof src[key] === 'object') {
            dest[key] = deepCopy(src[key], dest[key]);
        } else {
            dest[key] = src[key];
        }
    }
    return dest;
};

export default deepCopy;
