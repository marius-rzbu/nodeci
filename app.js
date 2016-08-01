/**
 * Created by mariuspatru on 8/1/16.
 */

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(process.env.PORT || 5000);

module.exports = app;