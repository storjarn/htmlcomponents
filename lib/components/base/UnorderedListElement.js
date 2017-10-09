/* istanbul ignore next */ ;
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../interfaces/EventUpgrade'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../interfaces/EventUpgrade'));
    } else {
        // Browser globals (root is window)
        root.UnorderedListElement = factory(root.EventUpgrade);
    }
}(this, function(EventUpgrade) {
    'use strict';

    class UnorderedListElement extends EventUpgrade(HTMLUListElement) {}

    customElements.define('x-ul', UnorderedListElement, {
        extends: 'ul'
    });

    return UnorderedListElement;
}));
