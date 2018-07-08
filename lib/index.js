'use strict';

import Utility from './utility/index.js';
import Mixins from './mixins/index.js';
import X from './X/index.js';
// import { Components } from './components/index.js';

var HTMLComponents_LIB = Object.freeze({
    Utility, X, /* Components,*/ Mixins
});

var CustomElement = X.CustomElement;

var createElement = Utility.Element.create;
var registerElement = Utility.Element.register;

var HTMLComponents = Object.freeze(Object.assign({
    CustomElement, createElement, registerElement
}, HTMLComponents_LIB));

export default HTMLComponents;

