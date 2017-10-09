/* istanbul ignore next */ ;
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../base/UnorderedListElement'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.EditableListElement = factory(root.UnorderedListElement);
    }
}(this, function(UnorderedListElement) {
    'use strict';

    class EditableListElement extends UnorderedListElement {}

    customElements.define('editable-ul', EditableListElement, {
        extends: 'ul'
    });

    return EditableListElement;
}));
