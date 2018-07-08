'use strict';

/**
 * @mixin
 */

const IDOMUpgrade = Sup => class extends Sup {

    insertAfter(element) {
        element.parentNode.insertBefore(this, element.nextSibling);
        return element;
    }

    push(el) {
        return this.appendChild(el);
    }

    setAttributes(attrs) {
        attrs = attrs || {};
        for (var idx in attrs) {
            if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                for (var prop in attrs[idx]) {
                    this.style[prop] = attrs[idx][prop];
                }
            } else if (idx === 'html') {
                this.innerHTML = attrs[idx];
            } else {
                this.setAttribute(idx, attrs[idx]);
            }
        }
        return this;
    }

    hide() {
        this._style = this._style || {};
        this._style.display = this.style.display;
        this.style.display = 'none';
    }

    show() {
        this._style = this._style || {};
        this.style.display = this._style.display || 'block';
    }

    addClass(...args) {
        var className = this.getAttribute('class').split(' ');
        if (args.length) {
            var tmp = [];
            args.forEach(function(arg) {
                if (className.indexOf(arg) === -1) {
                    tmp.push(arg.trim());
                }
            });
            className = className.concat(tmp);
        }
        this.setAttribute('class', className.join(' ').trim());
    }

    removeClass(...args) {
        var className = this.getAttribute('class').split(' ');
        if (args.length) {
            args.forEach(function(arg) {
                var idx = className.indexOf(arg.trim());
                if (idx > -1) {
                    className.splice(idx, 1);
                }
            });
        }
        this.setAttribute('class', className.join(' ').trim());
    }
};

export
default IDOMUpgrade;
