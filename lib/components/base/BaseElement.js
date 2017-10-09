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
        module.exports = factory(require('../../interfaces/EventUpgrade'));
    } else {
        // Browser globals (root is window)
        root.BaseElement = factory(root.EventUpgrade);
    }
}(this, function(EventUpgrade) {
    'use strict';

    // Standard custom element that Extends HTMLElement
    class BaseElement extends EventUpgrade(HTMLElement) {
        constructor() {
            super();
        }

        static get observedAttributes() {return [/* 'class', 'name', 'contenteditable', etc */]; }

        /**
         * Called when the element is instantiated
         * @return {[type]} [description]
         */
        createdCallback() {}

        /**
         * Called when the element is inserted into a document, including into a shadow tree
         * @return {[type]} [description]
         */
        connectedCallback() {}

        /**
         * Called when the element is removed from a document
         * @return {[type]} [description]
         */
        disconnectedCallback() {}

        /**
         * Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes.
         * @param  {[type]} attributeName [description]
         * @param  {[type]} oldValue      [description]
         * @param  {[type]} newValue      [description]
         * @param  {[type]} namespace     [description]
         * @return {[type]}               [description]
         */
        attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

        /**
         * Called when the element is adopted into a new document
         * @param  {[type]} oldDocument [description]
         * @param  {[type]} newDocument [description]
         * @return {[type]}             [description]
         */
        adoptedCallback(oldDocument, newDocument) {}
    }

    return BaseElement;
}));
