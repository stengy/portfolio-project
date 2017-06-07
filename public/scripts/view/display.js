'use strict';

var app = app || {};

(function(module){
  const displayView = {};
  displayView.initIndex = function() {
    $('#about').hide();
    $('#portfolio').hide();
    $('#home').show();
  }

  module.displayView = displayView;
})(app);
