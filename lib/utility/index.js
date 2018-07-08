'use strict';

import './StringUpgrade.js';
import './DateUpgrade.js';

import deepCopy from './deepCopy.js';
import Event from './Event.js';
import Element from './Element.js';
import QuerySelector from './QuerySelector.js';
import KeyCode from './KeyCode.js';
import Style from './Style.js';

var Utility = Object.freeze({
    QuerySelector: QuerySelector,
    KeyCode: KeyCode,
    deepCopy: deepCopy,
    Event: Event,
    Style: Style,
    Element: Element
});

export default Utility;
