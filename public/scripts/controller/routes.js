'use strict'

var app = app || {};

page('/about', app.aboutController.init);

page('/', app.displayView.initIndex);

page();
