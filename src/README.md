LESS boilerplate
================

Creating awesome LESS CSS boilerplate.

### How to start?

Simply:

    git clone https://github.com/Yaneraz/less.git <project name>

To remove unnecessary  .git folder type:

    rm -rf <project name>/.git

or

    rm -rf !$/.git

`!$` is for previous argument right after git clone has been completed.

Alternatively you can always download as `zip`.

Reference
---------

TODO: Describe main variables, code style, principles of codding.

Directory layout
----------------

    ├── projectName/             --> all of the files to be used in production
      ├── css/                   --> css files
        ├── PIE.htc              --> css3pie library for IEs < 10
        └── style.css            --> compiled stylesheet
      ├── img/                   --> image files
      ├── js/                    --> javascript files
        ├── main.js              --> elements' cross page behavior
        └── <plugins/libs>       --> other necessary libs and plugins
      ├── less/                  --> angular and 3rd party javascript libraries
        ├── lib/
          ├── _grid.less         --> modular grid constructor (currently not used)
          ├── _mediaQueries.less --> media queries, includes retina detection
          └── _mixins.less       --> LESS mixins (see file for function reference)
        ├── _base.less           --> contains libs includes
        ├── _buttons.less        --> buttons constructor
        ├── _common.less         --> reset, normalize, basic page styles, link behavior, user generated
                                 content styles
        ├── _forms.less          --> forms and forms' elements constructor
        ├── _icons.less          --> icon constructor (no automation yet)
        ├── _layout.less         --> only layout blocks styles, no appearance blocks
        ├── _variables.less      --> global variables: colors, url, rounds, font-family etc.
        ├── style.less           --> file that collects all includes/modules
        ├── main.less            --> blocks, styles, but no layout blocks
        └── <other>.less         --> other styles for plugins, site sections or event different
                                 developers working files.
                                 Don't forget to import them in style.less
      └── index.html             --> index file with only /css/style.css included

Watchers/Compilers
------------------

### Using Webstorm (or other JetBrains IDE) - *recommended*
-----------------------------------------------------

See Webstorm file watcher settings.
![alt tag][1]

##### Scope
Scope should contain all less files we want to work with. For most projects should be enough
to include all files in /less folder (better with file extension)

##### Program
Path to less executable file

##### Arguments
File(s) or directory that will be passed to the transpiler. For now we should specify only style.less.

Later files with "_" in the beginning will be imported to main (style.less), others will create css file with theirs filename, like this was done in SASS/SCSS.

##### Working directory
Specify the directory to which the transpiler will be applied. If not specified - working directory is the directory of the current file.

##### Output path to refresh
Specify the files where the transpiler stores its output. For now we should specify only style.css.\

### Using Koala (Cross platform)
--------------------------

[Download][2] Koala application, add project directory to program, choose only style.less file to autocompile, others will be watched automatically. Enjoy!

Feature: doesn't display less files that starts with "_" but watches them correctly.

### Using WinLESS (Windows only)
--------------------------

[Download][3] WinLESS, add project directory to program, check only style.less file to compile, others will be watched automatically. Enjoy!


[0]: https://www.dropbox.com/s/nnd0852697faae3/webstorm-file-watcher.png
[1]: http://z-index.com.ua/Content/img/webstorm-file-watcher.png
[2]: http://koala-app.com/
[3]: http://winless.org/
