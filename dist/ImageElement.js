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
        root.ImageElement = factory(root.IElement, root.IEventUpgrade, root.IIdentifiable, root.IDataBindable, root.IDisposable, root.IEditable);
    }
}(this, function(IElement, IEventUpgrade, IIdentifiable, IDataBindable, IDisposable, IEditable) {
    'use strict';

    class ImageElement_ extends IEditable( IDisposable( IDataBindable( IIdentifiable( IEventUpgrade( IElement( HTMLImageElement ) ) ) ) ) ) {}

    // customElements.define('x-img', ImageElement, {
    //     extends: 'img'
    // });

    var ImageElement = document.registerElement('x-img', {
        prototype: Object.create(ImageElement_.prototype),
        extends: 'img'
    });

    return ImageElement;
}));
