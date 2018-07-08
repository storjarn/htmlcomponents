/* istanbul ignore next */ ;
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.KeyCode = factory();
    }
}(this, function() {
    'use strict';

    var KeyCode = Object.freeze({
        "Backspace": 8,
        "Tab": 9,
        "Enter": 13,
        "Shift": 16,
        "Ctrl": 17,
        "Alt": 18,
        "PauseBreak": 19,
        "CapsLock": 20,
        "Escape": 27,
        "PageUp": 33,
        "PageDown": 34,
        "end": 35,
        "Home": 36,
        "LeftArrow": 37,
        "UpArrow": 38,
        "RightArrow": 39,
        "DownArrow": 40,
        "Insert": 45,
        "Delete": 46,
        "0": 48,
        "1": 49,
        "2": 50,
        "3": 51,
        "4": 52,
        "5": 53,
        "6": 54,
        "7": 55,
        "8": 56,
        "9": 57,
        "a": 65,
        "b": 66,
        "c": 67,
        "d": 68,
        "e": 69,
        "f": 70,
        "g": 71,
        "h": 72,
        "i": 73,
        "j": 74,
        "k": 75,
        "l": 76,
        "m": 77,
        "n": 78,
        "o": 79,
        "p": 80,
        "q": 81,
        "r": 82,
        "s": 83,
        "t": 84,
        "u": 85,
        "v": 86,
        "w": 87,
        "x": 88,
        "y": 89,
        "z": 90,
        "LeftWindowKey": 91,
        "RightWindowKey": 92,
        "SelectKey": 93,
        "Numpad0": 96,
        "Numpad1": 97,
        "Numpad2": 98,
        "Numpad3": 99,
        "Numpad4": 100,
        "Numpad5": 101,
        "Numpad6": 102,
        "Numpad7": 103,
        "Numpad8": 104,
        "Numpad9": 105,
        "Multiply": 106,
        "Add": 107,
        "Subtract": 109,
        "DecimalPoint": 110,
        "Divide": 111,
        "F1": 112,
        "F2": 113,
        "F3": 114,
        "F4": 115,
        "F5": 116,
        "F6": 117,
        "F7": 118,
        "F8": 119,
        "F9": 120,
        "F10": 121,
        "F11": 122,
        "F12": 123,
        "NumLock": 144,
        "ScrollLock": 145,
        "SemiColon": 186,
        "EqualSign": 187,
        "Comma": 188,
        "Dash": 189,
        "Period": 190,
        "ForwardSlash": 191,
        "GraveAccent": 192,
        "OpenBracket": 219,
        "Backlash": 220,
        "CloseBraket": 221,
        "SingleQuote": 222,
    });

    return KeyCode;
}));