'use strict'

var projects = [];

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.projectUrl = rawDataObj.projectUrl;
  this.projectImg = rawDataObj.projectImg;
  this.collaborators = rawDataObj.collaborators;
  this.dateCompleted = rawDataObj.dateCompleted;
  this.body = rawDataObj.body;
}

Project.prototype.toHtml = function() {
  const projectPopulate = Handlebars.compile($('.projects-template').html());
  return projectPopulate(this);
}

rawData.forEach(function (projectObj){
  projects.push(new Project(projectObj));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
