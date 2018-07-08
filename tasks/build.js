//Browser tests
module.exports = function(grunt) {
    var config = {};
    var configName = 'build';

    config.paths = {
        lib: 'lib/${namespace}/**/*.js'
    };

    config.all = {
        // src: [
        //     'lib/mixins/**/*.js',
        //     'lib/base/**/*.js'
        // ],
        // options: {
        //     keepRunner: true,
        //     banner: '<a href="./coverage/">Coverage</a>\n',
        //     specs: ['test/base/*.js'],
        //     helpers: 'test/helpers/*.js',
        //     template: require('grunt-template-jasmine-istanbul'),
        //     templateOptions: {
        //         coverage: 'test/coverage/coverage.json',
        //         report: [{
        //             type: 'html',
        //             options: {
        //                 dir: 'test/coverage'
        //             }
        //         }, {
        //             type: 'lcov',
        //             options: {
        //                 dir: 'test/coverage/lcov-report'
        //             }
        //         }, {
        //             type: 'cobertura',
        //             options: {
        //                 dir: 'test/coverage/cobertura'
        //             }
        //         }, {
        //             type: 'text-summary'
        //         }],
        //         thresholds: {
        //             lines: 70,
        //             statements: 70,
        //             branches: 50,
        //             functions: 75
        //         }
        //     }
        // }
    };

    config.mixins = {};

    config.base = {};

    config.components = {};

    config.baseClasses = {
        // src: [
        //     'lib/mixins/**/*.js',
        //     'lib/base/**/*.js'
        // ],
        // options: {
        //     keepRunner: true,
        //     banner: '<a href="./coverage/">Coverage</a>\n',
        //     specs: ['test/base/*.js'],
        //     helpers: 'test/helpers/*.js',
        //     template: require('grunt-template-jasmine-istanbul'),
        //     templateOptions: {
        //         coverage: 'test/coverage/coverage.json',
        //         report: [{
        //             type: 'html',
        //             options: {
        //                 dir: 'test/coverage'
        //             }
        //         }, {
        //             type: 'lcov',
        //             options: {
        //                 dir: 'test/coverage/lcov-report'
        //             }
        //         }, {
        //             type: 'cobertura',
        //             options: {
        //                 dir: 'test/coverage/cobertura'
        //             }
        //         }, {
        //             type: 'text-summary'
        //         }],
        //         thresholds: {
        //             lines: 70,
        //             statements: 70,
        //             branches: 50,
        //             functions: 75
        //         }
        //     }
        // }
    };

    grunt.config.set(configName, config);

    grunt.registerTask('build', function() {

        var Tag = process.env.Tag || 'div',
            ParentTag = process.env.ParentTag,
            ClassName = (process.env.ClassName),
            BaseClassName = (process.env.BaseClassName),
            ClassBody = (process.env.ClassBody),
            IPaths = [],
            IPathsRequired = [],
            DepsNames = [],
            DepsRefs = [];

        var classDefinitionTemplate = function() {
            return `/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([${IPaths}], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(${IPathsRequired});
    } else {
        // Browser globals (root is window)
        root.${ClassName} = factory(${DepsRefs});
    }
}(this, function(${DepsNames}) {
    'use strict';

    class ${ClassName}_ extends ${BaseClassName} ${ClassBody}

    // customElements.define('x-${Tag}', ${ClassName}, {
    //     extends: '${ParentTag}'
    // });

    var ${ClassName} = document.registerElement('x-${Tag}', {
        prototype: Object.create(${ClassName}_.prototype),
        extends: '${ParentTag}'
    });

    return ${ClassName};
}));
`;
        };

        var classTestTemplate = function() {
            return `/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["./${ClassName}"], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("./${ClassName}"));
    } else {
        // Browser globals (root is window)
        factory(root.${ClassName});
    }
}(this, function(${ClassName}) {
    'use strict';

    describe('base/${ClassName}', function() {

        var instance = null;
        var body = null;

        beforeEach(function(){
            body = document.querySelector('body');
        });

        it('should exist', function() {
            expect(${ClassName}).toBeTruthy();
        });

        it('should be a constructor', function() {
            instance = new ${ClassName}();
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
                expect(${ClassName}.dashStyleToCamelCase).toBeTruthy();
                expect(typeof ${ClassName}.dashStyleToCamelCase === 'function').toBeTruthy();
            });

            it('~camelCaseToDashStyle() should exist', function() {
                expect(${ClassName}.camelCaseToDashStyle).toBeTruthy();
                expect(typeof ${ClassName}.camelCaseToDashStyle === 'function').toBeTruthy();
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
`;
        };


        var NativeBaseClasses = require('./shared/NativeBaseClasses');

        for (var parentTag in NativeBaseClasses) {

            ClassBody = '{}';
            IPaths = [];
            IPathsRequired = [];
            DepsNames = [];
            DepsRefs = [];

            ParentTag = parentTag;

            var definition = NativeBaseClasses[parentTag];

            BaseClassName = [definition.baseClass];

            ClassName = definition.className || definition.baseClass.replace(/HTML/ig, '');

            if (!definition.tag) {
                Tag = parentTag;
            } else {
                Tag = definition.tag;
            }

            if (definition.classBody) {
                ClassBody = definition.classBody;
            }

            if (ClassName !== 'Element') {
                if (Array.isArray(definition.interfaces)) {
                    definition.interfaces.forEach(function(interface) {
                        BaseClassName.unshift(interface + '( ');
                        BaseClassName.push(' )');
                        var mixinPath = "'../mixins/" + interface + "'";
                        IPaths.push(mixinPath);
                        IPathsRequired.push('require(' + mixinPath + ')');
                        DepsNames.push(interface);
                        DepsRefs.push('root.' + interface);
                    });
                }
                BaseClassName = BaseClassName.join('');
                IPaths = IPaths.join(', ');
                IPathsRequired = IPathsRequired.join(', ');
                DepsNames = DepsNames.join(', ');
                DepsRefs = DepsRefs.join(', ');

                console.log(classTestTemplate());

                var fs = require('fs');
                var Path = require('path');
                fs.writeFileSync(Path.join(__dirname, '../lib/base/' + ClassName + '.js'), classDefinitionTemplate());
                fs.writeFileSync(Path.join(__dirname, '../test/base/' + ClassName + '.js'), classTestTemplate());
            }
        }

    });
};
