'use strict';

import IEventUpgrade from '../mixins/base/EventUpgrade.js';
import IDisposable from '../mixins/IDisposable.js';

var Event = {};

var Custom = class Custom extends CustomEvent {

    constructor (eventName, data, context, source) {

        var evtData = {
            detail: data,
            currentTarget: context,
            source: source,
            target: context
        };

        context = (context || null);
        source = (source || this);

        super(eventName, data);

        if (source) {
            source.dispatchEvent(this);
        }
    }
};
Event.Custom = Custom;

const EventEmitter = class extends IDisposable(IEventUpgrade(EventTarget)) {};
Event.Emitter = EventEmitter;

Event = Object.freeze(Event);

export default Event;
