module.exports = function(grunt) {

'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: {
        src: ['js/*.js']
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        src: 'css/main.css',
        dest: 'dist/',
        ext: '.min.css'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['img/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['fonts/*'], dest: 'dist/'},
          {expand: true, src: ['js/*'], dest: 'dist/'},
          {expand: true, src: ['*.html'], dest: 'dist/'}
        ]
      }
    },
    notify: {
      sass: {
        options: {
          message: 'SASS finished running.'
        }
      },
      cssmin: {
        options: {
          message: 'CSS minify finished running.'
        }
      },
      imagemin: {
        options: {
          message: 'Minify images finished running.'
        }
      },
      copy: {
        options: {
          message: 'Copy structure finished running.'
        }
      }
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-notify');

  // Default tasks.
  grunt.registerTask('default', ['dev']);

  // Dev tasks.
  grunt.registerTask('dev', ['jshint', 'sass', 'notify']);

  // Dist tasks.
  grunt.registerTask('dist', ['jshint', 'sass', 'cssmin', 'imagemin', 'copy', 'notify']);
};
