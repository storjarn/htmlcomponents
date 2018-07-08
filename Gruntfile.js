module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            lib: {
                files: [{
                    expand: true,
                    src: ['./lib/**/*.js'],
                    dest: 'dist/',
                    filter: 'isFile',
                    flatten: true
                }]
            }
        },
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: [
                    'lib/utility/**/*.js',
                    'lib/mixins/**/*.js',
                    'lib/base/**/*.js',
                    'lib/components/**/*.js'
                ],
                dest: 'dist/index.js',
            },
        },
        connect: {
            test: {
                options: {
                    port: 8010,
                    keepAlive: true
                }
            }
        }
    });

    //Build
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Tests
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['build', 'test']);

    grunt.registerTask('browserTest', '', function() {
        console.log("Test server can be found at: (requirejs) http://%s, (script-tag) http://%s", "localhost:" + 8010 + "/test/", "localhost:" + 8010 + "/test/_SpecRunner.html");
        grunt.task.run(['connect:test:keepalive']);
    });

    // <!-- GO -->

    grunt.registerTask('build', [ 'copy', 'concat'/*, 'uglify',  'jasmine:test:build', 'build'*/]);

    grunt.registerTask('test', [ /*'build', */ 'browserTest']);


};
