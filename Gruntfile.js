module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        eslintrc:'./.eslintrc'
      },
      src:['*.js']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('default',['eslint']);
};
