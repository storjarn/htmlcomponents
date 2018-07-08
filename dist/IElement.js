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
        root.IElement = factory();
    }
}(this, function() {
    'use strict';

    /**
     * @mixin
     */

    const IElement = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;
        }

        args(args) {
            return Array.prototype.slice.apply(args);
        }

        insertAfter(element) {
            element.parentNode.insertBefore(this, element.nextSibling);
        }

        // get opts(args) {
        //     return Array.prototype.slice.apply(args);
        // }

        createdCallback() {
            var $this = this;

            $this.emit('created');

            if (typeof super.createdCallback === 'function') {
                super.createdCallback.call($this);
            }

            if (typeof $this.Styles === 'object') {
                Object.assign($this.style, $this.Styles);
            }
        }

        get text() {
            return this.innerText;
        }

        set text(val) {
            this.innerText = (val || '').trim();
        }

        get html() {
            return this.innerHTML;
        }

        set html(val) {
            this.innerHTML = (val || '').trim();
        }

        selectAll() {
            this.focus();
            document.execCommand('selectAll', false, null);
        }

        static get observedAttributes() {
            return [ /* 'class', 'name', 'contenteditable', etc */ ];
        }

        /**
         * Called when the element is instantiated.  Nearly useless on paper, but we'll see.  Maybe this is and can be a pre-constructor????
         * @return {[type]} [description]
         */
        createdCallback() {
            var $this = this;
            $this.emit('created', $this);
        }

        /**
         * Called when the element is inserted into a document, including into a shadow tree.  Indicates the ability to start talking to the parent.
         * @return {[type]} [description]
         */
        connectedCallback() {
            var $this = this;
            $this.emit('connected', $this);
        }

        /**
         * Called when the element is removed from a document.  PLEASE use this to release resources!
         * @return {[type]} [description]
         */
        disconnectedCallback() {
            var $this = this;
            $this.emit('disconnected', $this);
        }

        /**
         * Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes (I got non-observed attributes firing this off too...
         * @param  {[type]} attributeName [description]
         * @param  {[type]} oldValue      [description]
         * @param  {[type]} newValue      [description]
         * @param  {[type]} namespace     [description]
         * @return {[type]}               [description]
         */
        attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
            var $this = this;

            $this.emit('attribute', $this, attributeName, oldValue, newValue, namespace);
            $this.emit('attribute:' + attributeName, $this, oldValue, newValue, namespace);
        }

        /**
         * Called when the element is adopted into a new document.  Similar to connected, but specific to moving across documents.  Cloning and such!
         * @param  {[type]} oldDocument [description]
         * @param  {[type]} newDocument [description]
         * @return {[type]}             [description]
         */
        adoptedCallback(oldDocument, newDocument) {
            var $this = this;
            $this.emit('adopted', $this, oldDocument, newDocument);
        }
    };

    Element.prototype.insertAfter = function(element) {
        element.parentNode.insertBefore(this, element.nextSibling);
    };

    return IElement;
}));
