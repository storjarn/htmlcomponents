'use strict';

import IElement from './base/Element.js';

/**
 * Upgrades HTMLElement classes with a minimal interface for binding data, including two-way binding.
 * @mixin
 * @example
class BindableView extends IDataBindable(Object) {
constructor() {
    super();
    this.on('bound', function(ev) {
        console.log('test a final time');
    });
    this.on('data', function(ev) {
        console.log('test a final time');
    });
    this.on('data:propertyName', function(ev) {
        console.log('test a final time');
    });
}

_onclick(ev) {
    console.log('test');
}
}
 */
const IDataBindable = Sup => class extends IElement(Sup) {

    constructor() {
        super();
        var $this = this;

        /**
         * Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes (I got non-observed attributes firing this off too...
         * @param  {CustomEvent} ev [description]
         * @param  {String} ev.detail[0].attributeName [description]
         * @param  {String} ev.detail[0].oldValue      [description]
         * @param  {String} ev.detail[0].newValue      [description]
         * @param  {Object} ev.detail[0].namespace     [description]
         */
        $this.on('attribute', function(ev) {

            var attributeName = ev.detail[0].name;

            if (attributeName.split('-')[0] === 'data') {

                var dataName = attributeName.split('-').slice(1).join('');

                var ev2 = {
                    source: $this,
                    name: ev.detail[0].name,
                    dataName: dataName,
                    oldValue: ev.detail[0].oldValue,
                    newValue: ev.detail[0].newValue,
                    namespace: ev.detail[0].namespace
                };

                $this.emit('data', ev2);
                $this.emit('data:' + dataName, ev2);
            }
        });
    }



    get Model() {
        var $this = this;
        return $this.dataset;
    }

    set Model(val) {
        var $this = this;
        if (typeof val !== 'undefined') {
            $this.bind(val);
        } else {
            for(var key in $this.dataset) {
                $this.dataset[key] = null;
                delete $this.dataset[key];
            }
        }
    }

    /**
     * Creates data attributes on the HTMLElement from a simple data object.
     * @param  {Object}    data - The data to bind to the element
     * @param  {Array} args - Any custom arguments passed to the bind method, for overridden custom applications.
     * @return {IDataBindable}
     */
    bind(data, ...args) {
        var $this = this;

        for (var propName in data) {
            var val = data[propName];
            if (val) {
                switch(typeof val) {
                    case 'function':
                        $this.setAttribute($this.constructor.camelCaseToDashStyle(propName), val(null, $this, data, args));
                        break;
                    case 'object':
                        $this.setAttribute($this.constructor.camelCaseToDashStyle(propName), JSON.stringify(val));
                        break;
                    default:
                        $this.setAttribute($this.constructor.camelCaseToDashStyle(propName), val);
                }
            }
        }

        $this.emit('bound', {data, args});

        return $this;
    }

    createEventedProperty(propName) {
        var $this = this;

        if (!$this.__properties) {

        }
    }

    static dashStyleToCamelCase(str) {
        var ret = (str || '').toString();
        /**
         * the prefix data- is removed (including the dash);
         * for any dash (U+002D) followed by an ASCII lowercase letter a to z, the dash is removed and the letter is transformed into its uppercase counterpart;
         * other characters (including other dashes) are left unchanged.
         */
        if (ret.substring(0, 4) === 'data-') {
            ret = ret.slice(5);
        }
        return ret.replace(/-+(.)/gi, function(match, capture1) {
            return capture1.toUpperCase();
        });
    }

    static camelCaseToDashStyle(str) {
        var ret = (str || '').toString();
        /**
         * Restriction: A dash must not be immediately followed by an ASCII lowercase letter a to z (before the transformation);
         * a prefix data- is added;
         * any ASCII uppercase letter A to Z is transformed into a dash followed by its lowercase counterpart;
         * other characters are left unchanged.
         */
        ret = ret[0].toLowerCase() + ret.substr(1);

        return 'data-' + ret.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }

    get localStorage() {
        return Object.freeze({
            get: function(key, klass) {
                var ret = window.localStorage.getItem(/*this.UniqueID + */key);
                try {
                    ret = JSON.parse(ret);
                } catch(ex) { console.warn("localStorage value at " + key + " is not valid JSON"); }
                if (!!klass) {
                    ret = new klass(ret);
                }
                return ret;
            },
            set: function(key, data, replacer) {
                if (typeof data !== 'string') {
                    data = JSON.stringify(data, replacer);
                }
                window.localStorage.setItem(/*this.UniqueID + */key, data);
            },
            remove: function(key) {
                window.localStorage.removeItem(/*this.UniqueID + */key);
            }
        });
    }
};

export default IDataBindable;
