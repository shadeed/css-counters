module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
          dist: {
              files: {
                  'css/style.css': 'css/style.scss'
              }
          },
          options: {
            sourcemap: true
          }
    },
    watch: {
      styles: {
        files: ['css/*.scss',
                'web/assets/scss/style.scss'], // which files to watch
        tasks: ["sass", "autoprefixer", "cssmin"],
        options: {
          livereload: 35729
          // using google chrome extention
        }
      }
    },
    autoprefixer: {
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'css/style.css'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default',['watch', 'sass','cssmin','autoprefixer']);
};
