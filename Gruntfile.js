/*!
 * Gruntfile
 */

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: 'styles.sass',
          dest: '',
          ext: '.css'
        }]
      }
    },

    slim: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/slim',
            src: ['{,*/}*.slim'],
            dest: '',
            ext: '.html'
          }
        ],
        options: {
          pretty: false
        }
      }
    },

    cssmin: {
      add_banner: {
        src: 'styles.css',
        dest: 'styles.css'
      }
    },

    watch: {
      sass: {
        files: [
          'src/sass/**'
        ],
        tasks: [ 'sass', 'cssmin' ]
      },
      slim: {
        files: [
          'src/slim/*'
        ],
        tasks: [ 'slim' ]
      }
    },

    browserSync: {
      bsFiles: {
        src : 'styles.css'
      },
      options: {
        server: {
          baseDir: "./",
          index: "index.html"
        },
        watchTask: true
      }
    }
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('default', ["browserSync", "watch", "cssmin"]);

};
