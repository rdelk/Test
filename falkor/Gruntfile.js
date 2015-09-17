'use strict';
 
var
  LIVERELOAD_PORT = 35730,
  lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT }),
  mountFolder = function( connect, dir ) {
    return connect.static(require('path').resolve(dir));
  };
  
module.exports = function( grunt ) {
 
  // Load all Grunt Tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: {
      dist: {
        src: ['dist']
      },
    },

    concat: {
      js: {
        files: {
          'src/js/scripts.min.js': [
            'src/components/jquery/dist/jquery.min.js',
            'src/assets/js/scripts.js'
          ]
        }
      }
    },

    uglify: {
      modernizr: {
        files: {
          'src/components/modernizr/modernizr.min.js': ['src/components/modernizr/modernizr.js']
        }
      },
      js: {
        src: ['src/js/scripts.min.js'],
        dest: 'src/js/scripts.min.js'
      }
    },

    connect: {
      options: {
        port: 9001,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function( connect ) {
            return [
              lrSnippet,
              mountFolder(connect, './src')
            ];
          }
        }
      }
    },

    copy: {
      dist: {
        files: [
          { expand: true, cwd: 'src', src: ['*'], dest: 'dist' },
          { expand: true, cwd: 'src', src: ['css/style.min.css'], dest: 'dist' },
          { expand: true, cwd: 'src', src: ['img/**'], dest: 'dist' },
          { expand: true, cwd: 'src', src: ['js/scripts.min.js'], dest: 'dist' },
          { expand: true, cwd: 'src', src: ['util/**'], dest: 'dist' },
          { expand: true, cwd: 'src', src: ['components/modernizr/modernizr.min.js'], dest: 'dist' },
          { expand: true, cwd: 'src', src: ['content/**'], dest: 'dist' },
        ],
      },
    },

    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'src/css/style.min.css': 'src/css/style.scss'
        }
      },
      dev: {
        src: ['src/css/style.scss'],
        dest: 'src/css/style.css',
      },
    },

    watch: {
    	sass: {
    		files: ['src/css/{,*/}*.scss'],
    		tasks: ['sass:dev'],
    	},
      js: {
        files: ['src/js/{,*/}*.js'],
        tasks: ['concat', 'uglify'],
      },
      livereload: {
        files: [
          'src/{,*/}*.html',
          'src/{,*/}*.{css,js,png,jpg,gif,svg}'
        ],
        options: {
          livereload: LIVERELOAD_PORT
        }
      }
    }

  });

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copied the files to the dist directory.',
    ['sass:dist', 'concat', 'uglify', 'clean', 'copy']
  );

  grunt.registerTask('server', function() {
    grunt.task.run([
      'connect:livereload',
      'open',
      'watch'
    ]);
  });
 
  grunt.registerTask('default', [ 'server' ]);
};