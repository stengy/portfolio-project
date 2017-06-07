'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function() {
    $('.tab-content').hide();
    $('#about').hide();

    $('#portfolio').fadeIn(500);
  };

  module.projectController = projectController;
})(app);
