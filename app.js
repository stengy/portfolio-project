'use strict'

var projects = [];

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.collaborators = rawDataObj.collaborators;
  this.dateCompleted = rawDataObj.dateCompleted;
  this.body = rawDataObj.body;
}
