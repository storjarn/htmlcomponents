/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../mixins/IElement', '../mixins/IEventUpgrade', '../mixins/IIdentifiable', '../mixins/IDataBindable', '../mixins/IDisposable', '../mixins/IEditable'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../mixins/IElement'), require('../mixins/IEventUpgrade'), require('../mixins/IIdentifiable'), require('../mixins/IDataBindable'), require('../mixins/IDisposable'), require('../mixins/IEditable'));
    } else {
        // Browser globals (root is window)
        root.FrameSetElement = factory(root.IElement, root.IEventUpgrade, root.IIdentifiable, root.IDataBindable, root.IDisposable, root.IEditable);
    }
}(this, function(IElement, IEventUpgrade, IIdentifiable, IDataBindable, IDisposable, IEditable) {
    'use strict';

    class FrameSetElement_ extends IEditable( IDisposable( IDataBindable( IIdentifiable( IEventUpgrade( IElement( HTMLFrameSetElement ) ) ) ) ) ) {}

    // customElements.define('x-frameset', FrameSetElement, {
    //     extends: 'frameset'
    // });

    var FrameSetElement = document.registerElement('x-frameset', {
        prototype: Object.create(FrameSetElement_.prototype),
        extends: 'frameset'
    });

    return FrameSetElement;
}));
