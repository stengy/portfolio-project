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
    rawData.forEach(function(ele){
      Project.all.push(new Project (ele));
    })
  }

  Project.fetchAll = function(){
    if (localStorage.projects) {
      Project.loadAll(JSON.parse(localStorage.projects));
      Project.initIndex();
    } else {
      $.getJSON('data/projectData.json').then(function(rawData){
        localStorage.projects = JSON.stringify(rawData);
        Project.loadAll(rawData);
        Project.all.forEach(function(project){
          $('#projects').append(project.toHtml());
        });
      },
      function(err){
        console.log(err);
      }
    )
    }
  }

  Project.initIndex = function() {
    Project.all.forEach(function(project){
      $('#projects').append(project.toHtml())
    });
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
