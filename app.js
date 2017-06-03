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
  var $newProject = $('projects.template').clone();
  $newProject.removeClass('template');
  if (!this.dateCompleted) {
    $newProject.addClass('In progress');
  }
  $newProject.find('h1 a').attr('href', this.projectUrl).html(this.title);
  $newProject.find('img').attr('src', this.projectImg);

  if (this.collaborators !== '') {
    $newProject.find('div').html(this.collaborators);
  }
  $newProject.find('section').html(this.body);
  $newProject.append('<hr>');
  return $newProject;
}

rawData.forEach(function (projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
