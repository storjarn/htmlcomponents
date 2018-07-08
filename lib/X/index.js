'use strict';

import {Containers, Controls, Inputs} from './elements.js';
import Mixins from '../mixins/index.js';
import Utility from '../utility/index.js';


var namespace = {
    Containers: {},
    Controls: {}
};

function _tag(tag) {
    return 'x-' + tag;
}

function classFactory(baseKlass) {
    return class XElement extends Mixins.Base(
        Mixins.Bindable(
            Mixins.Disposable(
                Mixins.Editable(
                    baseKlass
                )
            )
        )
    ) {
        // constructor() {
        //     super();
        // }
    }
}

const CustomElement = namespace.CustomElement = classFactory(HTMLElement);


Object.keys(Containers).forEach(function(tag) {

    var config = Containers[tag];
    var baseClass = config.baseClass;
    var baseElement = document.createElement(tag);
    var newTag = _tag(tag);

    //

    document.querySelector('head').appendChild(baseElement);

    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = newTag + ', .' + newTag + ' { ' + window.getComputedStyle(baseElement).cssText + ' }';
    style.setAttribute('name', newTag + '-style');
    document.querySelector('head').appendChild(style);

    document.querySelector('head').removeChild(baseElement);

    //

    var internal_ = class extends CustomElement {}

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=

    // customElements.define(newTag, internal_, {
    //     extends: tag
    // });
    var exportClass = Utility.Element.register(newTag, internal_);

    namespace[tag] = exportClass;
    namespace.Containers[config.className] = exportClass;

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=
});

Object.keys(Controls).forEach(function(tag) {

    var config = Controls[tag];
    var baseClass = config.baseClass;
    var newTag = _tag(tag);

    //

    var internal_ = classFactory(baseClass);

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=

    // var proto = Object.create(baseClass.prototype);
    // proto.createdCallback = function() {
    //     this.type = "checkbox";
    // };

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=

    // var exportClass = document.registerElement(newTag, {
    //     prototype: Object.create(internal_.prototype),
    //     extends: tag,
    //     is: newTag
    // });
    var exportClass = Utility.Element.register(newTag, tag, internal_);

    namespace[tag] = exportClass;
    namespace.Controls[config.className] = exportClass;

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=
});

Object.keys(Inputs).forEach(function(inputType) {

    var tag = 'input';
    var config = Inputs[inputType];
    var baseClass = config.baseClass;
    if (!baseClass) {
        baseClass = HTMLInputElement;
    }
    var xtagName = tag + '-' + inputType;       // ex. input-button (easier to find in console ;))
    var newTag = _tag(inputType + '-' + tag);   // ex. x-button-input, x-password-input, etc.
    var topName = inputType[0].toUpperCase() + inputType.slice(1) + 'Input';
    var xpathName = tag + "[type='" + inputType + "']";


    //

    var internal_ = classFactory(class XElement extends Mixins.Base(
        Mixins.Bindable(
            Mixins.Disposable(
                Mixins.Editable(
                    baseClass
                )
            )
        )
    ) {
        constructor() {
            super();
            this._setType();
        }

        createdCallback() {
            this._setType();
        }

        _setType() {
            var $this = this;
            $this.type = inputType;
        }

        get text() {
            return this.value;
        }
    });

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=

    var exportClass = Utility.Element.register(newTag, tag, internal_);

    namespace[xpathName] = exportClass;
    namespace.Controls.Inputs = namespace.Controls.Inputs || {};
    namespace.Controls.Inputs[config.className] = exportClass;

    // -=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=
});


var Base = Object.freeze(namespace);

export default Base;
