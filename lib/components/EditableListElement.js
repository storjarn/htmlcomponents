'use strict';

import {
    Base
}
from '../base/index.js';

class EditableListElement extends Base.ul {}

customElements.define('editable-ul', EditableListElement, {
    extends: 'x-ul'
});

export {
    EditableListElement
};
