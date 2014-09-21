module.exports = function(grunt) {

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
          'tmp/style.css': 'sass/style.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['img/*.{png,jpg,gif}'],
          dest: 'prod'
        }]
      }
    },
    notify: {
      sass: {
        options: {
          message: 'SASS and Uglify finished running.'
        }
      },
      imagemin: {
        options: {
          message: 'Minify images finished running.'
        }
      }
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass', 'imagemin', 'notify']);

};
