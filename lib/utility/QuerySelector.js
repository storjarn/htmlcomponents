'use strict';

var QuerySelector = {
    $: function $(selector, el) {
        if (!el) {
            el = document;
        }
        return el.querySelector(selector);
    },

    $$: function $$(selector, el, options) {
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

};

export default QuerySelector;
