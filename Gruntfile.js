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
        replace:{
            development: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./env/environments/develop.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./env/env_config.js'],
                    dest: './src/js/'
                }]
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
        grunt.task.run(['replace']);
        grunt.task.run(['requirejs']);
        grunt.task.run(['zip']);
    });

    grunt.registerTask('default', ['build']);
};