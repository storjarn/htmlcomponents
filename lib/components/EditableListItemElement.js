/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../base/ListItemElement'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../base/ListItemElement'));
    } else {
        // Browser globals (root is window)
        root.EditableListItemElement = factory(root.ListItemElement);
    }
}(this, function(ListItemElement) {
    'use strict';

    class EditableListItemElement extends ListItemElement {

        edit(ev) {
            var $this = this;

            console.log('editing %s', JSON.stringify($this));
            $this.contentEditable = true;
            this.innerHTML = this.text;
        }

        save(ev) {
            var $this = this;

            console.log('saving %s', JSON.stringify($this));
            $this.contentEditable = false;
            this.innerHTML = this.html;
        }

        get text() {
            return this.innerHTML
                .replace(/<s\>/ig, '-')
                .replace(/<\/s\>$/ig, '')
                .replace(/\&nbsp\;/ig, ' ')
                .trim();
        }

        get html() {
            var text = this.text;
            if (text.charAt(0) === '-') {
                text = text.replace(/^\-/ig, '<s>') + '</s>';
            }
            return text.trim();
        }

        get placeholder() {
            return this.getAttribute('placeholder') || 'Enter some text';
        }

        set placeholder(value) {
            return this.setAttribute('placeholder', value);
        }

        selectAll() {
            this.focus();
            document.execCommand('selectAll', false, null);
        }
    }

    customElements.define('editable-li', EditableListItemElement, {
        extends: 'li'
    });

    return EditableListItemElement;
}));
