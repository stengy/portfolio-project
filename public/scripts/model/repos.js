'use strict';

var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.fetchRepos = function (cb) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {Authorization: `token ${gitToken}`}
    }).then(data => {
      repos.all = data;
      })
      if(cb) {cb()}
    });

  };

  module.repos = repos;
})(app);
