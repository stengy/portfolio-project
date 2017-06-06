'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('#projects').hide();
    $('.tab-content').hide();
    $('#about').fadeIn(500);
    app.repos.fetchRepos(app.repoView.index);
  }

  module.aboutController = aboutController;
})(app);
