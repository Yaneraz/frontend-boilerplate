/*
 * Gruntfile.js: task definitions for grunt
 * http://gruntjs.com/
 *
 */
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        // task: sprite
        sprite: {
            all: {
                src: 'src/img/icons/*.png',
                destImg: 'src/img/icons.png',
                destCSS: 'src/less/_sprites.less',
                'cssFormat': 'css',
                'engineOpts': {
                    'imagemagick': true
                },
                'cssOpts': {
                    // Some templates allow for skipping of function declarations
                    'functions': false,

                    // CSS template allows for overriding of CSS selectors
                    'cssClass': function (item) {
                        return '.ico_' + item.name;
                    }
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['src/less/**/*.less']
                },
                files: {
                    'src/css/style.css': 'src/less/style.less'
                }
            }
        },
        watch: {
            img: {
                files: 'src/img/icons/*.png',
                tasks: ['sprite']
            },
            lesscss: {
                files: 'src/less/**/*.less',
                tasks: ['less:development']
            },
            options: {
                spawn: false
            }
        }
    });

    // Load task definitions and grunt plugins
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sprite','less:development']);
};