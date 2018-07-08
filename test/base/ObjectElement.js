/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["./ObjectElement"], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("./ObjectElement"));
    } else {
        // Browser globals (root is window)
        factory(root.ObjectElement);
    }
}(this, function(ObjectElement) {
    'use strict';

    describe('base/ObjectElement', function() {

        var instance = null;
        var body = null;

        beforeEach(function(){
            body = document.querySelector('body');
        });

        it('should exist', function() {
            expect(ObjectElement).toBeTruthy();
        });

        it('should be a constructor', function() {
            instance = new ObjectElement();
            expect(instance).toBeTruthy();
        });

        it('should be able to be inserted into the document as a reference and then removed', function() {
            body.appendChild(instance);
            expect(instance.parentElement === body).toBeTruthy();
            body.removeChild(instance);
            expect(instance.parentElement !== body).toBeTruthy();
        });

        describe("IElement", function() {
            it('#text should exist', function() {
                expect('text' in instance).toBeTruthy();
                expect(typeof instance.text === 'string').toBeTruthy();
            });

            it('#html should exist', function() {
                expect('html' in instance).toBeTruthy();
                expect(typeof instance.html === 'string').toBeTruthy();
            });
        });

        describe("IDataBindable", function() {
            it('~dashStyleToCamelCase() should exist', function() {
                expect(ObjectElement.dashStyleToCamelCase).toBeTruthy();
                expect(typeof ObjectElement.dashStyleToCamelCase === 'function').toBeTruthy();
            });

            it('~camelCaseToDashStyle() should exist', function() {
                expect(ObjectElement.camelCaseToDashStyle).toBeTruthy();
                expect(typeof ObjectElement.camelCaseToDashStyle === 'function').toBeTruthy();
            });

            it('#bind() should exist', function() {
                expect(instance.bind).toBeTruthy();
                expect(typeof instance.bind === 'function').toBeTruthy();
            });

            it('#Model should exist', function() {
                expect(instance.Model).toBeTruthy();
                expect(typeof instance.Model === 'object').toBeTruthy();
            });
        });

        describe("IDisposable", function() {
            it('#dispose() should exist', function() {
                expect(instance.dispose).toBeTruthy();
                expect(typeof instance.dispose === 'function').toBeTruthy();
            });
        });

        describe("IIdentifiable", function() {
            it('#UniqueID() should exist', function() {
                expect(instance.UniqueID).toBeTruthy();
                expect(typeof instance.UniqueID === 'string').toBeTruthy();
            });
        });

        describe("IEventUpgrade", function() {
            it('#on() should exist', function() {
                expect(instance.on).toBeTruthy();
                expect(typeof instance.on === 'function').toBeTruthy();
            });

            it('#once() should exist', function() {
                expect(instance.once).toBeTruthy();
                expect(typeof instance.once === 'function').toBeTruthy();
            });

            it('#off() should exist', function() {
                expect(instance.off).toBeTruthy();
                expect(typeof instance.off === 'function').toBeTruthy();
            });

            it('#emit() should exist', function() {
                expect(instance.emit).toBeTruthy();
                expect(typeof instance.emit === 'function').toBeTruthy();
            });

            it('should be able to respond to events with the new API', function(done) {
                instance.on('click', function(ev) {
                    expect(ev).toBeTruthy();
                    done();
                });
                instance.click();
            });
        });
    });
}));
