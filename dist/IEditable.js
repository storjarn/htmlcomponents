/* istanbul ignore next */
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
        root.IEditable = factory();
    }
}(this, function() {
    'use strict';

    /**
     * @mixin
     */

    const IEditable = Sup => class extends Sup {

        constructor() {
            super();
            var $this = this;
        }

        edit(ev) {
            var $this = this;

            $this.contentEditable = true;

            if (this.text === this.placeholder) {
                this.innerHTML = '';
            } else {
                this.innerHTML = this.text;
            }

            if ($this.getAttribute('selectOnEdit') === 'true') {
                // $this.setSelectionRange(0, this.innerHTML.length);
                $this.selectAll();
            }
        }

        save(ev) {
            var $this = this;

            $this.contentEditable = false;

            if (this.text === '') {
                this.innerHTML = this.placeholder;
            } else {
                this.innerHTML = this.html;
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
    };

    return IEditable;
}));
