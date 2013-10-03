Basic Front-end Boilerplate
===========================

Description
-----------

Basic front-end boilerplate, based on [LESS][-1], with `compiler` and `sprite generator`.
Later here will much more features.

Requirements
------------

You need to have [npm][0] installed now, as well as a [grunt][1], and **one of** sprite engine:
 - [phantomjs][2]
 - [node-canvas][3]
 - gm ([Graphics Magick][4] / [Image Magick][5])

Recommended to use [Image Magick][5] (tested only x86 versions), but you must specify it in engineOpts

    {
      'engineOpts': {
        'imagemagick': true
      }
    }


Usage
-----

Type `npm install` in project folder to download all dependencies.
`src` folder - is working folder.

Sprites images are located on `/src/img/icons/` folder, less files in `/src/less/`

Type `grunt` to compile sprites and less files.

Type `grunt watch` to watch them automatically.

[-1]: http://lesscss.org/
[0]: http://nodejs.org/download/
[1]: http://gruntjs.com/getting-started
[2]: http://phantomjs.org/
[3]: https://github.com/learnboost/node-canvas
[4]: http://www.graphicsmagick.org/
[5]: http://imagemagick.org/script/index.php
