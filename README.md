Basic Front-end Boilerplate
===========================

Basic front-end boilerplate, based on [LESS][l], with `compiler` and `sprite generator`.
Later here will much more features.

Requirements
------------

You need to have [npm][0] installed now, [grunt][1] and **one of** sprite engine:
 - [phantomjs][2]
 - [node-canvas][3]
 - gm ([Graphics Magick][4] / [Image Magick][5])

Recommended to use gm [Graphics Magick][4] and [Image Magick][5] (need to install both, Image Magick tested only x86 versions), but you must specify it in engineOpts

    {
      'engineOpts': {
        'imagemagick': true
      }
    }


Usage
-----

- Type `git clone --recursive https://github.com/Yaneraz/frontend-boilerplate.git <projectName>` to clone with submodule.
`src` folder - is a working folder, standalone repo of mine [LESS template][less], presented as git submodule.

- Type `npm install` in project folder to download all dependencies.

- [optional] type `grunt clean` to get rid of .git files and READMEs, including submodules.

- Type `grunt` to compile sprites and less files.
Sprites images are located on `/src/img/icons/` folder, less files in `/src/less/`.
Type `grunt watch` to watch them automatically.

**Build option.** Type `grunt build` to compress css, optimise images in `build` folder. Source files, and files named with "_" character
 in the beginning won't be copied.

[less]: https://github.com/Yaneraz/less
[l]: http://lesscss.org/
[0]: http://nodejs.org/download/
[1]: http://gruntjs.com/getting-started
[2]: http://phantomjs.org/
[3]: https://github.com/learnboost/node-canvas
[4]: http://www.graphicsmagick.org/
[5]: http://imagemagick.org/script/index.php
