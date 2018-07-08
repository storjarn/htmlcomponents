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
        root.IDataBindable = factory();
    }
}(this, function() {
    'use strict';

    /**
     * Upgrades EventTarget classes with a minimal interface for using events, including custom and class-defined events.
     * @mixin
     * @example
class BindableView extends IDataBindable(Object) {
    constructor() {
        super();
        this.click();   // 'test'
        this.once('click', function(ev) {
            console.log('test again');
        });
        this.click();   // 'test' 'test again'
        this.on('click', function(ev) {
            console.log('test a final time');
        });
        this.click();   // 'test' 'test a final time'
        this.on('go', function(ev) {
            console.log(ev.detail);
        });
        this.emit('go', { detail: { test: true }});    // { test: true }
    }

    _onclick(ev) {
        console.log('test');
    }
}
     */

    const IDataBindable = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;
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

            $this.emit('data', $this, attributeName, oldValue, newValue, namespace);
            $this.emit('data:' + attributeName, $this, oldValue, newValue, namespace);
        }

        get Model() {
            var $this = this;
            return $this.dataset;
        }

        set Model(val) {
            var $this = this;
            $this.bind(val);
        }

        /**
         * Creates data attributes on the HTMLElement from a simple data object.
         * @param  {Object}    data - The data to bind to the element
         * @param  {Array} args - Any custom arguments passed to the bind method, for overridden custom applications.
         * @return {IDataBindable}
         */
        bind(data, ...args) {
            var $this = this;

            for (var propName in data) {
                var val = data[propName];
                // if (val) {
                    $this.setAttribute($this.constructor.camelCaseToDashStyle(propName), val);
                // }
            }

            $this.emit('bound', data, $this, args);

            return $this;
        }

        createEventedProperty(propName) {
            var $this = this;

            if (!$this.__properties) {

            }
        }

        static dashStyleToCamelCase(str) {
            var ret = (str || '').toString();
            /**
             * the prefix data- is removed (including the dash);
             * for any dash (U+002D) followed by an ASCII lowercase letter a to z, the dash is removed and the letter is transformed into its uppercase counterpart;
             * other characters (including other dashes) are left unchanged.
             */
            if (ret.substring(0, 4) === 'data-') {
                ret = ret.slice(5);
            }
            return ret.replace(/-+(.)/gi, function(match, capture1) {
                return capture1.toUpperCase();
            });
        }

        static camelCaseToDashStyle(str) {
            var ret = (str || '').toString();
            /**
             * Restriction: A dash must not be immediately followed by an ASCII lowercase letter a to z (before the transformation);
             * a prefix data- is added;
             * any ASCII uppercase letter A to Z is transformed into a dash followed by its lowercase counterpart;
             * other characters are left unchanged.
             */
            ret = ret[0].toLowerCase() + ret.substr(1);

            return 'data-' + ret.replace(/([A-Z])/g, function($1) {
                return '-' + $1.toLowerCase();
            });
        }
    };

    return IDataBindable;
}));
