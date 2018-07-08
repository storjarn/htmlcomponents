'use strict';

import {
    Base
}
from '../base/index.js';

class EditableListItemElement extends Base.li {}

customElements.define('editable-li', EditableListItemElement, {
    extends: 'x-li'
});

export {
    EditableListItemElement as EditableListItemElement
};
