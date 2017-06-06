'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('#projects').hide();
    $('#about').fadeIn(500);
  }

  module.aboutController = aboutController;
})(app);
