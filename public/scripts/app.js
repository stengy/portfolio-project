'use strict'


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
