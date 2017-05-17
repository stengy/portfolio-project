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
