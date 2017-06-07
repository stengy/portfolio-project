'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('#portfolio').hide();
    $('.tab-content').hide();
    $('#about').fadeIn(500);
    app.repos.fetchRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
