var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// data for celebrity friends as array of objects
var friends = require('./app/data/friends');

var app = express();

// define the server port location if remote host or 3000 if localhost
app.set('port', process.env.PORT || 3000);

//  set up static middleware
// Serve static content for the app
// from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// this when req is made to the root
app.get('/', function(req, res) {
    console.log('Rendering the home page');
    res.sendFile('home.html', {root: path.join(__dirname, 'app/public')});
//    res.end('welcome to express on the client');
});

// this when req is made to the root
app.get('/survey', function(req, res) {
    console.log('Rendering the survey');
    res.sendFile('survey.html', {root: path.join(__dirname, 'app/public')});
});

// this req is made to obtain a listings of the celebrity friends
// first listing women then men on same page
// checks the array of objects we have created
app.get('/friends', function(req, res) {
    console.log('Executing req for celebrity friends:');
    console.log(friends.friends);
    for (i = 0; i < friends.friends.length; i++) {
       console.log(friends.friends[i].name);
    };

    var friendsHTML = '<h3>Celebrity Friends </h3>';
    friendsHTML += '<h4>Women</h4>';
    friendsHTML += '<ul>';
    for (i = 0; i < friends.friends.length; i++) {
        if (friends.friends[i].gender === 'female')
            friendsHTML += '<li><p>' + friends.friends[i].name + '</p></li>';
    };
    friendsHTML += '</ul>'

    friendsHTML += '<h4>Men</h4>';
    friendsHTML += '<ul>';
    for (i = 0; i < friends.friends.length; i++) {
        if (friends.friends[i].gender === 'male')
            friendsHTML += '<li><p>' + friends.friends[i].name + '</p></li>';
    };
    friendsHTML += '</ul>'
    res.send(friendsHTML);
});

app.get('/found', function(req, res) {
    res.end('welcome to express result of friend finding result');
});

// custom 404 page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next) {
   console.error(err.stack);
   res.type('text/plain');
   res.status(500);
   res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log('Express web server started on http://localhost: ', 'port',
    '... press Control-C to terminate web server');
    console.log('Celebrity friends in the system in array of objects friends');
    console.log('Use browser to see them:  localhost:3000/friends');
});
