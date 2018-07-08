'use strict';

import IElement from './base/Element.js';
import IEventUpgrade from './base/EventUpgrade.js';
import IDOMUpgrade from './base/DOMUpgrade.js';

import IDataBindable from './IDataBindable.js';
import IDisposable from './IDisposable.js';
import IEditable from './IEditable.js';

var Mixins = {
    Base: IElement,

    Events: IEventUpgrade,
    DOM: IDOMUpgrade,

    Bindable: IDataBindable,
    Disposable: IDisposable,
    Editable: IEditable
};

export default Mixins;
