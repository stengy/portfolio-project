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
  var $newProject = $('project.template').clone();
  $newProject.removeclass('template');
  if (!this.dateCompleted) {
    $newProject.addClass('In progress');
  }
  $newProject.find('#').html(this.title);
  $
}
