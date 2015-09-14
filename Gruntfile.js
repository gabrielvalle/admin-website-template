module.exports = function (grunt) {
    'use strict';

    //load task require npm lib
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-replace');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            build: {
                src: [ "dist", "dist.zip"]
            }
        },
        rev:{
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            files: {
                src: [
                    'dist/**/*.css',
                    'dist/**/*.js',
                    'dist/**/*.{jpg,jpeg,gif,png}'
                ]
            }
        },
        zip:{
            "long-format": {
                "src": ["dist/**"],
                "dest": "dist.zip"
            }
        },
        requirejs: {
            "requirejs": {
                "options": {
                    "appDir": "src/",
                    "optimizeCss": "standard",
                    "optimize": "uglify2",
                    "generateSourceMaps": true,
                    "preserveLicenseComments": false,
                    "mainConfigFile": "src/config.js",
                    "dir": "dist",
                    "removeCombined": "true",
                    "modules": [
                        {
                            "name": "main",
                            "include": [
                                "uiRouter",
                                "uiMetronic",
                                "uxWms"
                            ]
                        }
                    ]
                }
            }
        }
    });

    /**
     * build src directory to dist-ecw
     */
    grunt.registerTask('build', 'requirejs web project', function () {
        grunt.task.run(['clean']);
        grunt.task.run(['requirejs']);
        grunt.task.run(['zip']);
    });

    grunt.registerTask('default', ['build']);
};