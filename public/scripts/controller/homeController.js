'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = function () {
    $('#projects').hide();
    $('#about').hide();


  }

  module.homeController = homeController;
})(app);
