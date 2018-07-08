//Browser tests
module.exports = function(grunt) {
    var config = {};
    var configName = 'jasmine';

    config.test = {
        src: [
            'lib/mixins/**/*.js',
            'lib/base/**/*.js'
        ],
        options: {
            keepRunner: true,
            banner: '<a href="./coverage/">Coverage</a>\n',
            specs: ['test/base/*.js'],
            helpers: 'test/helpers/*.js',
            template: require('grunt-template-jasmine-istanbul'),
            templateOptions: {
                coverage: 'test/coverage/coverage.json',
                report: [{
                    type: 'html',
                    options: {
                        dir: 'test/coverage'
                    }
                }, {
                    type: 'lcov',
                    options: {
                        dir: 'test/coverage/lcov-report'
                    }
                }, {
                    type: 'cobertura',
                    options: {
                        dir: 'test/coverage/cobertura'
                    }
                }, {
                    type: 'text-summary'
                }],
                thresholds: {
                    lines: 70,
                    statements: 70,
                    branches: 50,
                    functions: 75
                }
            }
        }
    };

    grunt.config.set(configName, config);
};
