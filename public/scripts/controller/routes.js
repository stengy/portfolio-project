'use strict'

var app = app || {};

page('/', app.homeController.init);

page('/projects', app.projectController.init);

page('/about', app.aboutController.init);


page();
