module.exports = function (grunt) {
    'use strict';

    //load task require npm lib
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-replace');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    var taskConfig = grunt.file.readJSON('task-config.json');
    grunt.registerTask("rev-build", "build dist rev", function(){
        grunt.config.set("rev",{
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
        });
        grunt.task.run(['rev']);
    });

    /**
     * environments configuration replace task
     */
    grunt.registerTask("env-dev-replace","replace environments configuration",function(){
        grunt.config.set("replace",{
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
        });
        grunt.task.run(['replace']);
    });

    /**
     * zip dist-ecw directory
     */
    grunt.registerTask("zip-dist","build dist project to zip file",function(){
        grunt.config.set("zip",taskConfig.zip);
        grunt.task.run(['zip']);
    });
    /**
     * build src directory to dist-ecw
     */
    grunt.registerTask('build-dev', 'requirejs web project', function () {
        grunt.config.set('requirejs', taskConfig.requirejs );
        grunt.task.run(['clean-zip']);
        grunt.task.run(['env-dev-replace']);
        grunt.task.run(['requirejs']);
        grunt.task.run(['zip-dist']);
    });
    /**
     * clean dist-ecw directory task
     */
    grunt.registerTask('clean-zip', 'clean dist web project', function () {
        grunt.config.set('clean', taskConfig.clean);
        grunt.task.run(['clean']);
    });

    grunt.registerTask('default', ['build-dev']);
};