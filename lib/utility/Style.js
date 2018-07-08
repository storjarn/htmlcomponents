'use strict';

var Style = {

    copyNodeStyle: function copyNodeStyle(sourceNode, targetNode) {
        const computedStyle = window.getComputedStyle(sourceNode);
        Array.from(computedStyle).forEach(key => targetNode.style.setProperty(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key)))
    },

    nodeStyleToString: function nodeStyleToString(sourceNode) {
        var ret = [];
        const computedStyle = window.getComputedStyle(sourceNode);
        Array.from(computedStyle).forEach(key => ret.push(key + ': "' + computedStyle.getPropertyValue(key) + '"'));
        return ret.join('; ');
    }
};

export default Style;
