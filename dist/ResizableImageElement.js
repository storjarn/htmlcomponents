/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../base/ImageElement'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../base/ImageElement'));
    } else {
        // Browser globals (root is window)
        root.ResizableImageElement = factory(root.ImageElement);
    }
}(this, function(ImageElement) {
    'use strict';

    class ResizableImageElement_class extends ImageElement {}

    var ResizableImageElement = customElements.define('resizable-img', ResizableImageElement_class, {
        extends: 'img'
    });

    return ResizableImageElement;
}));
