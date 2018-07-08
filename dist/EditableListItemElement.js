/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../base/LIElement'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../base/LIElement'));
    } else {
        // Browser globals (root is window)
        root.EditableListItemElement = factory(root.LIElement);
    }
}(this, function(ListItemElement) {
    'use strict';

    class EditableListItemElement extends ListItemElement {

        edit(ev) {
            var $this = this;
            if (typeof super.edit === 'function') {
                super.edit.call($this, ev);
            }
        }

        save(ev) {
            var $this = this;
            if (typeof super.save === 'function') {
                super.save.call($this, ev);
            }

            var value = $this.html;
            if (value) {
                $this.innerHTML = $this.html;
                $this.emit('updated', ev);
            } else {
                $this.emit('remove', $this);
            }
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
    }

    customElements.define('editable-li', EditableListItemElement, {
        extends: 'li'
    });

    return EditableListItemElement;
}));
