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
        root.TableCellElement = factory(root.IElement, root.IEventUpgrade, root.IIdentifiable, root.IDataBindable, root.IDisposable, root.IEditable);
    }
}(this, function(IElement, IEventUpgrade, IIdentifiable, IDataBindable, IDisposable, IEditable) {
    'use strict';

    class TableCellElement_ extends IEditable( IDisposable( IDataBindable( IIdentifiable( IEventUpgrade( IElement( HTMLTableCellElement ) ) ) ) ) ) {}

    // customElements.define('x-td', TableCellElement, {
    //     extends: 'td'
    // });

    var TableCellElement = document.registerElement('x-td', {
        prototype: Object.create(TableCellElement_.prototype),
        extends: 'td'
    });

    return TableCellElement;
}));
