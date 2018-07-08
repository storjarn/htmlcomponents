'use strict';

/**
 * Upgrades EventTarget classes with a minimal interface for using events, including custom and class-defined events.
 * @mixin
 * @example
class BaseElement extends IEventUpgrade(HTMLElement) {
constructor() {
    super();
    this.click();   // 'test'
    this.once('click', function(ev) {
        console.log('test again');
    });
    this.click();   // 'test' 'test again'
    this.on('click', function(ev) {
        console.log('test a final time');
    });
    this.click();   // 'test' 'test a final time'
    this.on('go', function(ev) {
        console.log(ev.detail);
    });
    this.emit('go', { detail: { test: true }});    // { test: true }
}

_onclick(ev) {
    console.log('test');
}
}
 */
const IEventUpgrade = Sup => class extends Sup {

    static get observedAttributes() {
        return [ /* 'class', 'name', 'contenteditable', etc */ ];
    }

    constructor() {
        super();
        var $this = this;

        for (var propName in $this) {
            var privPropName = '_' + propName;
            if ($this[privPropName]) {
                if ($this[propName]) {
                    var oldProp = $this[propName];
                    if (typeof oldProp === 'function') {
                        $this[propName] = function() {
                            oldProp.apply($this, arguments);
                            if (typeof $this[privPropName] === 'function') {
                                $this[privPropName].apply($this, arguments);
                            }
                        };
                    }
                } else {
                    $this[propName] = $this[privPropName];
                }
            }
        }
    }

    on(eventName, ...args) {
        var $this = this;
        Array.prototype.slice.apply(args).forEach(function(arg) {
            $this.addEventListener(eventName, arg);
        });
        return $this;
    }

    once(eventName, ...args) {
        var $this = this;
        Array.prototype.slice.apply(args).forEach(function(arg) {
            $this.addEventListener(eventName, arg, {
                once: true
            });
        });
        return $this;
    }

    off(eventName, ...args) {
        var $this = this;
        Array.prototype.slice.apply(args).forEach(function(arg) {
            $this.removeEventListener(eventName, arg);
        });
        return $this;
    }

    emit(eventName, ...args) {
        var $this = this;
        var event = new CustomEvent(eventName, {
            detail: args || [],
            currentTarget: $this,
            source: $this
        });
        $this.dispatchEvent(event);
        return $this;
    }


    /**
     * Called when the element is instantiated.  Nearly useless on paper, but we'll see.  Maybe this is and can be a pre-constructor????
     * @return {[type]} [description]
     */
    // createdCallback() {
    //     var $this = this;
    //     $this.emit('created', {
    //         source: $this
    //     });
    // }

    /**
     * Called when the element is inserted into a document, including into a shadow tree.  Indicates the ability to start talking to the parent.
     * @return {[type]} [description]
     */
    connectedCallback() {
        var $this = this;
        $this.emit('connected', {
            source: $this
        });
    }

    /**
     * Called when the element is removed from a document.  PLEASE use this to release resources!
     * @return {[type]} [description]
     */
    disconnectedCallback() {
        var $this = this;
        $this.emit('disconnected', {
            source: $this
        });
    }

    /**
     * Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes (I got non-observed attributes firing this off too...
     * @param  {[type]} attributeName [description]
     * @param  {[type]} oldValue      [description]
     * @param  {[type]} newValue      [description]
     * @param  {[type]} namespace     [description]
     * @return {[type]}               [description]
     */
    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        var $this = this;

        var ev = {
            source: $this,
            name: attributeName,
            oldValue: oldValue,
            newValue: newValue,
            namespace: namespace
        };
        $this.emit('attribute', ev);
        $this.emit('attribute:' + attributeName, ev);
    }

    /**
     * Called when the element is adopted into a new document.  Similar to connected, but specific to moving across documents.  Cloning and such!
     * @param  {[type]} oldDocument [description]
     * @param  {[type]} newDocument [description]
     * @return {[type]}             [description]
     */
    adoptedCallback(oldDocument, newDocument) {
        var $this = this;
        var ev = {
            source: $this,
            oldDocument: oldDocument,
            newDocument: newDocument
        };
        $this.emit('adopted', ev);
    }
};

export default IEventUpgrade;
