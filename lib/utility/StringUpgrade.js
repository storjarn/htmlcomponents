'use strict';

String.prototype.toBoolean = function() {
    var acceptedTypes = ['Y', 'YES', 'TRUE', '1'];
    return acceptedTypes.indexOf(this.valueOf().toString().toUpperCase()) > -1;
};
String.prototype.toInteger = function() {
    return parseInt(this.valueOf());
};
String.prototype.toFloat = function() {
    return parseFloat(this.valueOf());
};
String.prototype.toObject = function() {
    return JSON.parse(this.valueOf());
};
String.prototype.toFunction = function() {
    try {
        return new Function(this.valueOf());
    } catch (ex) { // throw???
        console.error(ex);
        return null;
    }
};
