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

    function $(selector, el) {
        if (!el) {
            el = document;
        }
        return el.querySelector(selector);
    }

    // var $ = function( selector, context ) {

    //     // The jQuery object is actually just the init constructor 'enhanced'
    //     // Need init if jQuery is called (just allow error to be thrown if not included)
    //     return new jQuery.fn.init( selector, context );
    // };

    function $$(selector, el, options) {
        if (!el) {
            el = document;
        }
        options = options || {};
        if (options.asArray === true) {
            // convert it to a Array for convenience:
            return Array.prototype.slice.call(el.querySelectorAll(selector)) || [];
        } else {
            return el.querySelectorAll(selector) || new NodeList();
        }
    }

    return {
        $: $,
        $$: $$
    };
}));
