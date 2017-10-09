/* istanbul ignore next */ ;
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
        root.EventUpgrade = factory();
    }
}(this, function() {
    'use strict';

    /**
     * Upgrades EventTarget classes with a minimal interface for using events, including custom and class-defined events.
     * @interface
     * @example
class BaseElement extends EventUpgrade(HTMLElement) {
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

    const EventUpgrade = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;

            for(var propName in $this) {
                var privPropName = '_' + propName;
                if ($this[privPropName]) {
                    if ($this[propName]) {
                        var oldProp = $this[propName];
                        if (typeof oldProp === 'function') {
                            $this[propName] = function() {
                                oldProp.apply($this, arguments);
                                if (typeof $this[privPropName] === 'function') {
                                    $this[privPropName].apply($this, arguments);
                                }
                            };
                        }
                    } else {
                        $this[propName] = $this[privPropName];
                    }
                }
            }
        }

        on(eventName, ...args) {
            var $this = this;
            Array.prototype.slice.apply(args).forEach(function(arg) {
                $this.addEventListener(eventName, arg);
            });
        }

        once(eventName, ...args) {
            var $this = this;
            Array.prototype.slice.apply(args).forEach(function(arg) {
                $this.addEventListener(eventName, arg, {once : true});
            });
        }

        off(eventName, ...args) {
            var $this = this;
            Array.prototype.slice.apply(args).forEach(function(arg) {
                $this.removeEventListener(eventName, arg);
            });
        }

        emit(eventName, ...args) {
            if (this[eventName]) {
                this[eventName].apply(this, args);
            } else {
                var event = new CustomEvent(eventName, {
                    detail: args,
                    currentTarget: this
                });
                this.dispatchEvent(event);
            }
        }
    };

    return EventUpgrade;
}));
