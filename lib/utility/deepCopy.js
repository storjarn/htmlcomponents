/* istanbul ignore next */
;(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.deepCopy = factory();
    }
}(this, function() {
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

    return deepCopy;
}));
