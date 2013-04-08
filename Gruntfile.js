/* globals module */

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['src/js/*'],
        tasks: ['jshint', 'concat']
      },
      lib: {
        files: ['src/lib/*'],
        tasks: ['copy']
      },
      html: {
        files: ['src/html/*'],
        tasks: ['copy:html']
      },
      style: {
        files: ['src/style/*'],
        tasks: ['less']
      },
      templates: {
        files: ['src/templates/**/*.html'],
        tasks: ['jst']
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['dest/<%= pkg.name %>.js'],
        dest: 'dest/<%= pkg.name %>.min.js'
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/app.js' ], // must be last
        dest: 'dest/<%= pkg.name %>.js'
      }
    },

    copy: {
      main: {
        files: [
          {src: ['src/html/*'], dest: 'dest/', expand: true, flatten: true},
          {cwd: 'src/lib', src: ['**'], dest : 'dest/lib', expand:true },
          {src: ['src/img/*'], dest: 'dest/img', expand: true, flatten: true},
          {src: ['src/img/cakes/*'], dest: 'dest/img/cakes', expand: true, flatten: true},
          {src: ['favicon.ico'], dest: 'dest/'}
        ]
      },
      html: {
        files: [
          {src: ['src/html/*'], dest: 'dest/', expand: true, flatten: true}
        ]
      },
      data: {
        files: [
          { cwd: 'src/data', src: ['**'], dest : 'dest/data', expand:true }
        ]
      }
    },

    less: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'dest/style.css' : 'src/style/main.less'
        }
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 3000,
          base: 'dest'
        }
      }
    },

    jst: {
      options: {
        processName: function(filename) {
          return filename.substring(4); //chop off src/
        }
      },
      compile: {
        files: {
          'dest/mugcakes-templates.js': ['src/templates/**/*.html']
        }
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task
  grunt.registerTask('production', ['jshint', 'concat', 'uglify', 'less', 'copy', 'jst']);
  grunt.registerTask('default', ['jshint' , 'concat', 'less', 'copy', 'jst']);

};