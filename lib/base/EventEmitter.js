/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../mixins/EventUpgrade'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../mixins/EventUpgrade'));
    } else {
        // Browser globals (root is window)
        root.BaseElement = factory(root.EventUpgrade);
    }
}(this, function(EventUpgrade) {
    'use strict';

    // Standard custom element that Extends EventTarget
    class EventEmitter extends EventUpgrade(EventTarget) {
        constructor() {
            super();
        }
    }

    return EventEmitter;
}));
