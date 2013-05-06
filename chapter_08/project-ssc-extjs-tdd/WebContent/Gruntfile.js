// Generated by CoffeeScript 1.6.1
var _this = this;

module.exports = function(grunt) {
  'use strict';  grunt.initConfig({
    sencha_jasmine: {
      keepRunner: false,
      options: {
        specs: 'test/spec/**/*.js',
        extControllers: ['Donate'],
        extFramework: 'ext',
        extLoaderPaths: {
          'SSC': 'app',
          'Test': 'test'
        },
        template: 'SpecRunner.template'
      }
    }
  });
  grunt.loadNpmTasks('grunt-sencha-jasmine');
  return grunt.registerTask('test', 'sencha_jasmine');
};
