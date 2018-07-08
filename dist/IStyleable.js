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
        root.IIdentifiable = factory();
    }
}(this, function() {
    'use strict';

    /**
     * @mixin
     */

    const IStyleable = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;
        }

        createdCallback() {
            var $this = this;

            if (typeof super.createdCallback === 'function') {
                super.createdCallback.call($this);
            }

            if (typeof this.Styles === 'object') {
                Object.assign(this.style, this.Styles);
            }
        }
    };

    return IIdentifiable;
}));
