'use strict';

import IElement from './base/Element.js';

/**
 * @mixin
 */
const IDisposable = Sup => class extends IElement(Sup) {

    constructor() {
        super();
        var $this = this;
    }

    /**
     * Event to unlock all references, including weak.  Passed whatever you want when calling, use whatever you want when setting.  It's flexible but highly-designed.  Please use this to release resources!!!
     * @param  {CustomElement}    $caller - element that is the event source
     * @param  {Arguments} args - the stuffz, whatever you definez
     * @return {CustomElement}         - compulsory fluent interface
     * @example
     * var $this = this;            // typeof HigherCustomElement
     * $this.on('dispose', function($caller, $items) {
     *     $this.removeChild($caller);        // Not such a jump.  Easy scoped GC.
     * });
     * // OR
     * var x = new CustomElement();
     * x.on('dispose', function($caller, $args) {
     *     var index = -1;
     *     if (Array.isArray($args)) {
     *         index = $args.indexOf(x);
     *     }
     *     console.log('order [Object CustomElement]:', index);
     *     if ($caller instanceof HigherCustomElement) {
     *         $caller.removeChild(x);    // right off a cliff
     *     }
     *     if ($caller.otherObject) { // Release some other reference
     *         if (typeof $caller.otherObject.dispose === 'function') {
     *             $caller.otherObject.dispose(x);
     *         }
     *         delete $caller.otherObject;
     *     }
     * });
     * $this.addChild(x);
     * $this.on('dispose_child', function($caller, $args){
     *     //  .. do stuff with x ($caller) ..
     *     $this.releaseThings($caller);
     * });
     * // .... later
     * $this = this;
     * $this.find(query, function(items) {
     *     items.forEach(function(item) {
     *         $this.removeChild(item);
     *         if (typeof item.dispose === 'function') {
     *             item.dispose($this, items);      // Fire the events......
     *         }
     *     });
     * });
     */
    dispose($caller, ...args) {
        var $this = this;
        if ($caller && typeof $caller.emit === 'function') {
            $caller.emit('dispose_child', $this, args);
        }
        $this.emit('dispose', $caller, args);
        return $this;
    }
};

export default IDisposable;
