 'use strict';

import {
    Base
}
from '../base/index.js';

class ResizableImageElement_ extends Base.img {

    constructor() {
        super();

        var $this = this;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    // connectedCallback() {
    //     this.emit('connected', {
    //         source: this
    //     });
    // }
}

// var ResizableImageElement = document.registerElement('resizable-img', {
//     prototype: Object.create(ResizableImageElement_.prototype),
//     extends: 'img'
// });

customElements.define('resizable-img', ResizableImageElement_, {
    extends: 'x-img'
});

export {
    ResizableImageElement_ as ResizableImageElement
};

