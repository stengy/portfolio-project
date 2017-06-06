'use strict';

var app = app || {};

(function(module){
  const displayView = {};
  displayView.initIndex = function() {

    app.Project.all.forEach(function(project){
      $('#projects').append(project.toHtml())
    });
  }

  module.displayView = displayView;
})(app);
