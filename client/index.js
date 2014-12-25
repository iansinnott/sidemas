var $   = require('jquery')
    app = require('./app');

// Run the app
$(app.initialize.bind(app));

window.app = app;


