'use strict';

import IEventUpgrade from './EventUpgrade.js';
import IDOMUpgrade from './DOMUpgrade.js';

/**
 * @mixin
 */
const IElement = Sup => class extends IEventUpgrade(IDOMUpgrade(Sup)) {

    constructor() {
        super();
    }

    args(args) {
        return Array.prototype.slice.apply(args);
    }

    get UniqueID() {
        let _id = this._id;
        if (!_id) {
            this._id = _id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        return _id;
    }

    get text() {
        return this.innerText;
    }

    set text(val) {
        this.innerText = (val || '').trim();
    }

    get html() {
        return this.innerHTML.trim();
    }

    set html(val) {
        this.innerHTML = (val || '').trim();
    }

    selectAll() {
        this.focus();
        document.execCommand('selectAll', false, null);
    }

    toString() {
        return this.cloneNode(true).outerHTML;
    }
};

// Element.prototype.insertAfter = function(element) {
//     element.parentNode.insertBefore(this, element.nextSibling);
// };

export default IElement;
