/**
 * Created by mariuspatru on 8/1/16.
 */

var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('hello world', done);
    });
});