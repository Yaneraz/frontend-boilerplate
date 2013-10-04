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
                'algorithm': 'binary-tree',
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
                spawn: false,
                dateFormat: function(time) {
                    var date = new Date(),
                        hours = date.getHours(),
                        mins = date.getMinutes(),
                        secs = date.getSeconds();

                    var month = ['Jan', 'Feb', 'Mar', 'Ap', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
                    var dayOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][date.getDay()];

                    if (hours < 10) {hours = '0' + hours;}
                    if (mins < 10) {mins = '0' + mins;}
                    if (secs < 10) {secs = '0' + secs;}

                    var hms = hours + ':' + mins + ':' + secs;
                    var dateMonthYear =  [date.getDate(),month,date.getFullYear()].join('/');

                    grunt.log.writeln('The watch finished in ' + time + 'ms at ' + hms + ' ' + dayOfWeek + ' ' + dateMonthYear);
                }
            }
        },
        clean: {
            git: [
                '**/.git',
                '**/.gitignore',
                '**/.gitmodules',
                '**/README.md',
                '!node_modules/**/README.md'
            ]
        }
    });

    // Load task definitions and grunt plugins
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['sprite','less:development']);
};