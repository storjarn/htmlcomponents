/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../mixins/IElement', '../mixins/IEventUpgrade', '../mixins/IDataBindable', '../mixins/IDisposable', '../mixins/IIdentifiable'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../mixins/IElement'), require('../mixins/IEventUpgrade'), require('../mixins/IDataBindable'), require('../mixins/IDisposable'), require('../mixins/IIdentifiable'));
    } else {
        // Browser globals (root is window)
        root.CustomElement = factory(root.IElement, root.IEventUpgrade, root.IDataBindable, root.IDisposable, root.IIdentifiable);
    }
}(this, function(IElement, IEventUpgrade, IDataBindable, IDisposable, IIdentifiable) {
    'use strict';

    class CustomElement extends IIdentifiable( IDisposable( IDataBindable( IEventUpgrade( IElement( HTMLElement ) ) ) ) ) {}

    return CustomElement;
}));
