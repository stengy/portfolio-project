'use strict'

var app = app || {};

(function(module) {

  function Project(rawDataObj){
    this.title = rawDataObj.title;
    this.projectUrl = rawDataObj.projectUrl;
    this.projectImg = rawDataObj.projectImg;
    this.collaborators = rawDataObj.collaborators;
    this.dateCompleted = rawDataObj.dateCompleted;
    this.body = rawDataObj.body;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    const projectRender = Handlebars.compile($('.projects-template').html());
    return projectRender(this);
  }

  Project.loadAll = function(rawData){
    Project.all = rawData.map(function(project) {
      return new Project(project);
    })
  }

  Project.fetchAll = function(){
    if (localStorage.projects) {
      Project.loadAll(JSON.parse(localStorage.projects));
      app.displayView.initIndex();
    } else {
      $.getJSON('data/projectData.json').then(function(rawData){
        Project.loadAll(rawData);
        localStorage.projects = JSON.stringify(rawData);
        // Project.all.forEach(function(project){
        //   // $('#projects').append(project.toHtml());
        // });
      },
      function(err){
        console.log(err);
      }
    )
    }
  }



  // Creating temporary word count function//
  // Will replace when I figure out what to do with map and reduce//

  Project.descriptionWordCount = function() {
    let totalCount = Project.all.map((data) => {
      return data.body.split(' ').length;
    })
    .reduce((t, c) => t + c);
    console.log(`Developer wrote a total of ${totalCount} words in the description of all projects.`);
  }

  module.Project = Project;
})(app);
