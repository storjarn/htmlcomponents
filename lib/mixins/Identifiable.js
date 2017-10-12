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
        root.Identifiable = factory();
    }
}(this, function() {
    'use strict';

    /**
     * @mixin
     */

    const Identifiable = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;
            var GUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });

            Object.defineProperty(this, 'UniqueID', {
                get: function() {
                    return GUID;
                }
            });
        }
    };

    return Identifiable;
}));
