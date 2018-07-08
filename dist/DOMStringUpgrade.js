/**
 * https://developer.mozilla.org/en-US/Add-ons/Code_snippets/QuerySelector
 */
/* istanbul ignore next */
(function(root, factory) {
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
        root.QuerySelector = factory();
    }
}(this, function() {
    'use strict';

    if (typeof DOMString === 'function') {
        DOMString.prototype.asBool = function() {
            var acceptedTypes = ['Y', 'YES', 'TRUE', '1'];
            return ~acceptedTypes.indexOf(this.valueOf().toString().toUpperCase());
        };
        DOMString.prototype.asInt = function() {
            return parseInt(this.valueOf());
        };
        DOMString.prototype.asFloat = function() {
            return parseFloat(this.valueOf());
        };
        DOMString.prototype.asObject = function() {
            return JSON.parse(this.valueOf());
        };
        DOMString.prototype.asFunction = function() {
            try{
                return new Function(this.valueOf());
            } catch(ex) {  // throw???
                console.error(ex);
                return null;
            }
        };
    }
}));
