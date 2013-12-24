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
                //destImg: 'src/img/icons-2x.png',
                //'imgPath': '../img/icons.png',
                destCSS: 'src/less/_sprites.less',
                'cssFormat': 'css',
                'algorithm': 'binary-tree',
                'padding': 4,
                'engineOpts': {
                    'imagemagick': true
                },
                'cssVarMap': function (sprite) {
                    // `sprite` has `name`, `image` (full path), `x`, `y`
                    //   `width`, `height`, `total_width`, `total_height`
                    // EXAMPLE: Prefix all sprite names with 'sprite-'

                    // retina sprites
                    //sprite.height = Math.ceil(sprite.height/2);
                    //sprite.width = Math.ceil(sprite.width/2);
                    //sprite.x = Math.ceil(sprite.x/2);
                    //sprite.y = Math.ceil(sprite.y/2);
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
        image_resize: {
            resize: {
                options: {
                    width: '50%'
                },
                files: {
                    'src/img/icons.png': 'src/img/icons-2x.png'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['src/less/**/*.less'],
                    yuicompress: true,
                    sourceMap: true
                    //sourceMapFilename: 'assets/css/main.min.css.map',
                    //sourceMapRootpath: '/app/themes/roots/'
                },
                files: {
                    'src/css/style.css': 'src/less/style.less'
                }
            },
            production: {
                options: {
                    paths: ['src/less/**/*.less'],
                    yuicompress: true
                },
                files: {
                    'build/css/style.css': 'src/less/style.less'
                }
            }
        },
        watch: {
            img: {
                files: 'src/img/icons/*.png',
                tasks: ['sprite', 'less:development'] // 'image_resize'
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
                    var dayOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][date.getDay()-1];

                    if (hours < 10) {hours = '0' + hours;}
                    if (mins < 10) {mins = '0' + mins;}
                    if (secs < 10) {secs = '0' + secs;}

                    var hms = hours + ':' + mins + ':' + secs;
                    var dateMonthYear =  [date.getDate(),month,date.getFullYear()].join('/');

                    grunt.log.writeln('The watch finished in ' + time + 's at ' + hms + ' ' + dayOfWeek + ' ' + dateMonthYear);
                }
            }
        },
        clean: {
            git: [
                '**/.git',
                '**/.gitignore',
                '!.gitignore',
                '**/.gitmodules',
                '**/README.md',
                '!node_modules/**'
            ]
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'src/*.js',
                dest: 'build//js/app.js'
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**.{png,jpg,gif}','!icons/*', '!**/_*.{png,jpg,gif}'],
                    dest: 'build/img'
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: ['*.html', '!_*.html','css/PIE.htc','js/*.js', '!js/_*.js'],
                dest: 'build/'
            }
        }
    });

    // Load task definitions and grunt plugins
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['sprite','less:development']); // 'image_resize'
    grunt.registerTask('build', ['less:production','imagemin','copy']);
};