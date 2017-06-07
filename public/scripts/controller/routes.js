'use strict';

var app = app || {};

page('/', app.homeController.init);
page('/portfolio', app.projectController.init);
page('/about', app.aboutController.init);

page();
