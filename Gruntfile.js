module.exports = function(grunt) {

  grunt.initConfig({
    // load our main definition package
    pkg: grunt.file.readJSON('package.json'),

    /*
    * url: http://assemble.io/
    * description: Assemble is a templating tools. it compile the handlebars files from src to generate the dist
    */
    assemble: {
      options: {
        pkg: '<%= pkg %>',
        data: ['package.json'],
        flatten: true,
        helpers: 'src/templates/helpers/*.js',
        layout: 'layout.hbs',
        layoutdir: 'src/templates/dist/layouts',
        assets: 'dist/assets',
        partials: ['src/templates/dist/pages/*.hbs', 'src/templates/dist/parts/**/*.hbs']
      },
      dist: {
        options: {
          data: ['src/data/en/layout.json'],
        },
        files: {
          'dist/': ['src/templates/dist/pages/*.hbs']
        }
      },
      fr: {
        options: {
          data: ['src/data/fr/layout.json'],
        },
        files: {
          'fr/': ['src/templates/dist/pages/*.hbs']
        }
      }
    },

    /*
    * url: https://github.com/ai/autoprefixer
    * description: Autoprefixer uses the data on current browser popularity and properties support to apply prefixes for you:
      a { transition: transform 1s }
      become
      a {
        -webkit-transition: -webkit-transform 1s;
        transition: -ms-transform 1s;
        transition: transform 1s
      }
    */
    autoprefixer: {
      build: {
        options: {
          browsers: ['last 2 versions', '> 1%']
        },
        files: [
          {
            src : ['**/*.css', '!**/*autoprefixed.css'],
            cwd : 'css',
            dest : 'css',
            ext : '.autoprefixed.css',
            expand : true
          }
        ]
      }
    },

    /*
    * url: https://github.com/gruntjs/grunt-contrib-concat
    * description: concat all js plugin into one js file and concat the css prefixed with the icon and font css
    */
    concat: {
      options: {
        separator: ';',
        stripBanners: true,
        banner: '/*!\n<%= pkg.name %>\nv<%= pkg.version %>\n<%= grunt.template.today("mm-dd-yyyy") %>\nMade at <%= pkg.author.name %> - <%= pkg.author.url %>\n*/'
      },
      css: {
        src: ['icon/style.css', 'css/style.autoprefixed.css'],
        dest: 'dist/assets/css/style.css'
      }
    },

    /*
    * url: https://github.com/gruntjs/grunt-contrib-connect
    * description: start a server on port 8000 for the documentation
    */
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 8000,
          base: 'dist/'
        }
      },
      serverfr: {
        options: {
          hostname: '*',
          port: 7000,
          base: 'fr/'
        }
      }
    },

    /*
    * url: https://github.com/gruntjs/grunt-contrib-copy
    * description: copy icon, js and vendors into the documentation
    */
    copy: {
      fonts: {
        files: [
          { expand: true, cwd: './icon/fonts', src: ['./**/*.*'], dest: 'dist/assets/css/fonts' }
        ]
      },
      js: {
        files: [
          { expand: true, cwd: './js', src: ['./*.js'], dest: 'dist/assets/js' }
        ]
      },
      vendors: {
        files: [
          { expand: true, cwd: './vendors', src: ['./**/*.*', '!./modernizr/*'], dest: 'dist/vendors' }
        ]
      },
      fr: {
        files: [
          { expand: true, cwd: './dist', src: ['./**/*.*'], dest: 'fr/' }
        ]
      }
    },

    /*
    * url: https://github.com/gruntjs/grunt-contrib-cssmin
    * description: minify the css
    */

    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/assets/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/assets/css/',
        ext: '.min.css'
      }
    },

    /*
    * https://github.com/gruntjs/grunt-contrib-sass
    * description: compile sass to css
    */
    sass: {
      build: {
        files : [
          {
            src : ['style.scss'],
            cwd : 'scss',
            dest : 'css',
            ext : '.css',
            expand : true
          }
        ],
        options : {
          style : 'expanded'
        }
      },
      dist: {
        files : [
          {
            src : ['dist.scss', 'dist_*.scss', 'examples.scss'],
            cwd : 'scss',
            dest : 'dist/assets/css/',
            ext : '.css',
            expand : true
          }
        ],
        options : {
          style : 'expanded'
        }
      }
    },

    /*
    * url: https://github.com/gruntjs/grunt-contrib-uglify
    * description: Minify files with UglifyJS.
    */
    uglify: {
      options: {
        report: true
      },
      js: {
        files: {
          'dist/assets/js/aau.min.js': ['dist/assets/js/aau.js']
        }
      }
    },

    /*
    * url: https://github.com/gruntjs/grunt-contrib-watch
    * description: Run predefined tasks whenever watched file patterns are added, changed or deleted.
    */
    watch: {
      scss: {
        files: ['scss/**/*.scss'],
        tasks: 'scss'
      },
      html: {
        files: ['src/**/*.hbs'],
        tasks: 'html'
      },
      vendors: {
        files: ['vendors/dist/*.js'],
        tasks: 'vendors'
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'dist/**/*.html',
          'dist/assets/css/{,*/}*.css',
          'dist/assets/js/{,*/}*.js',
          'dist/vendors/dist/{,*/}*.js'
        ]
      }
    }

  });

  grunt.registerTask('scss', ['sass', 'autoprefixer', 'concat:css', 'cssmin:minify', 'sass:dist']);
  grunt.registerTask('html', ['assemble:dist']);
  grunt.registerTask('vendors', ['copy:vendors']);

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'concat:css',
    'assemble:dist',
    'copy:vendors',
    'cssmin:minify',
    'sass:dist',
    'copy:fr',
    'assemble:fr'
  ]);
  grunt.registerTask('dev', ['connect', 'watch']);

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  require('matchdep').filterDev('grunt-contrib*').forEach(grunt.loadNpmTasks);
};
