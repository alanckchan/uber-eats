'use strict';

module.exports = function(grunt) {
  grunt.loadTasks('tasks');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
};
