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
        root.DataBindable = factory();
    }
}(this, function() {
    'use strict';

    /**
     * Upgrades EventTarget classes with a minimal interface for using events, including custom and class-defined events.
     * @mixin
     * @example
class BindableView extends DataBindable(Object) {
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

    const DataBindable = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;
        }

        bind(data, ...args) {
            var $this = this;

            for (var propName in data) {
                var privPropName = '_' + propName;

                var prop = data[propName];
                var privProp = data[privPropName];

                (function(data, propName, prop, privPropName, privProp) {
                    switch (typeof prop) {
                        case 'string':
                        case 'number':
                        case 'boolean':
                            Object.defineProperty($this, propName, {
                                enumerable: true,
                                configurable: false,
                                get: function() {
                                    return data[propName];
                                },
                                set: function(value) {
                                    data[propName] = value;
                                }
                            });
                            break;
                        case 'function':
                            Object.defineProperty($this, propName, {
                                enumerable: true,
                                configurable: false,
                                value: data[propName].bind($this)
                            });
                            break;
                        case 'symbol':
                            break;
                        case 'object':
                        default:
                            Object.defineProperty($this, propName, {
                                enumerable: true,
                                configurable: false,
                                get: function() {
                                    // return new DataBindable().bind(data[propName]);
                                },
                                set: function(value) {
                                    data[propName] = value;
                                }
                            });
                            break;
                    }
                })(data, propName, prop, privPropName, privProp);
            }

            return $this;

            // $this.emit('bound', data, $this, args);
        }
    };

    return DataBindable;
}));
