'use strict';

import IElement from './base/Element.js';

/**
 * @mixin
 */
const IEditable = Sup => class extends IElement(Sup) {

    constructor() {
        super();
        var $this = this;

        // $this.on('edit', function(ev) {
        //     console.log('edit');
        // });

        // $this.on('updated', function(ev) {
        //     console.log('updated');
        // });

        $this.on('save', function(ev) {
            var oldValue = ev.detail[0].oldValue || '';
            var newValue = ev.detail[0].newValue || '';

            if (oldValue !== newValue) {
                $this.emit('updated', ev);

                if (newValue.trim() === '') {
                    $this.emit('empty', ev);
                }
            }
        });
    }

    edit(ev) {
        var $this = this;

        $this.contentEditable = true;

        if (this.text === this.placeholder) {
            this.innerHTML = '';
        } else {
            this.innerHTML = $this.text;
        }

        $this._oldValue = $this.text;

        if ($this.getAttribute('selectOnEdit') === 'true') {
            // $this.setSelectionRange(0, this.innerHTML.length);
            $this.selectAll();
        }

        $this.emit('edit', {
            source: $this,
            oldValue: $this._oldValue,
            newValue: $this.text
        });
    }

    get isEditing() {
        return (this.contentEditable === 'true' || this.contentEditable === true);
    }

    save(ev) {
        var $this = this;

        $this.contentEditable = false;

        if (this.text === '') {
            this.innerHTML = this.placeholder;
        } else {
            this.innerHTML = this.html;
        }

        $this.emit('save', {
            source: $this,
            oldValue: $this._oldValue,
            newValue: $this.text
        });
    }

    get text() {
        if (this.isEditing) {
            return this.innerText.trim();
        }
        return this.innerHTML.trim();
    }

    get html() {
        return this.innerHTML.trim();
    }

    get placeholder() {
        return this.getAttribute('placeholder') || 'Enter some text';
    }

    set placeholder(value) {
        return this.setAttribute('placeholder', value);
    }
};

export default IEditable;

