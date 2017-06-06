'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function() {
    $('#about').hide();
    $('.tab-content').hide();

    $('#projects').fadeIn(500);
  }

  module.projectController = projectController;
})(app);
