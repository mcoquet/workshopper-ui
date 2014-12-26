module.exports = function(grunt) {

  grunt.initConfig({
    wiredep: {
      app: {
        src: 'index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['wiredep']);



}
