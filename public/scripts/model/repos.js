'use strict';

var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];



  repos.fetchRepos = function (cb) {

    $.get('/github/users/repos').then(
      data => repos.all = data, err => console.error(err)
    ).then(cb)

  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app);
