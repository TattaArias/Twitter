var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// IMPORT ROUTES
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');
var postsRouter = require('./routes/posts.route');
var tweetsRouter = require('./routes/tweets.route');
var followersRouter = require('./routes/followers.route');


// IMPORT DB CONNECTION MANAGER
const dbManager = require ("./database.config/db.manager");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set the routing routes to the each script
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/tweets', tweetsRouter);
app.use('/followers', followersRouter);


/**
 * Testing the connection to the database and recreate the models if the tables doesn´t exists  
 */
dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    // recreate the models if the tables doesn´t exists
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("Database Synced");
      });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
