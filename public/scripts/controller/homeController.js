'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = function () {
    $('#portfolio').hide();
    $('#about').hide();

    $('#home').fadeIn(500);

  }

  module.homeController = homeController;
})(app);
