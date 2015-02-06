
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var find_vibes = require('./routes/find_vibes');
var write_vibes = require('./routes/write_vibes');
var FAQ = require('./routes/FAQ');
var login = require('./routes/login');
var help = require('./routes/help');
var company = require('./routes/company');

var project = require('./routes/project');
// Example route
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

app.get('/', index.view);
app.get('/find_vibes', find_vibes.view );
app.get('/write_vibes', write_vibes.view);
app.get('/login', login.view);
app.get('/help', help.view);
app.get('/company', company.view);

app.get('/FAQ', FAQ.view);

app.get('/project/:name', project.viewProject);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
