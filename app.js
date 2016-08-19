/**
 * Created by mariuspatru on 8/1/16.
 */

var express = require('express');

var app = express();

// send a simple message
app.get('/', function (req, res) {
    res.send('hello world, this is development');
});

app.get('/env', function (req, res) {
    res.send('env: ' + process.env.NODE_ENV);
});

app.get('/other', function (req, res) {
    res.send(JSON.stringify(process.env));
});

app.listen(process.env.PORT || 5000);

module.exports = app;