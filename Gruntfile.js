module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'main.css':'sass/main.scss'
        }
      }

    },
    watch: {
      sass : {
        files: "sass/*.scss", //sass source goes here
        tasks: ["sass"],
        options: {
          livereload: true //browser will live reload on change
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['watch']);
}