'use strict';

import { EditableListElement } from './EditableListElement';
import { EditableListItemElement } from './EditableListItemElement';
import { ResizableImageElement } from './ResizableImageElement';

var Components = {
    EditableListElement: EditableListElement,
    EditableListItemElement: EditableListItemElement,
    ResizableImageElement: ResizableImageElement
};

// Object.keys(ElementDefinitions).forEach(function(tag) {

//     var baseClass = ElementDefinitions[tag];

//     class internal_ extends IEditable( IDisposable( IDataBindable( BaseElementMixin( baseClass ) ) ) ) {}

//     var exportClass = document.registerElement('x-' + tag, {
//         prototype: Object.create(internal_.prototype),
//         extends: tag
//     });

//     Components[tag] = exportClass;
// });

export { Components };
