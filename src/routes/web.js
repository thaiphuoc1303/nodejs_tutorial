var express = require('express');
var router = express.Router();
const newsController = require('../app/controllers/NewsController.js');
const user = require('./user');

// router.get('/', newsController.index);

function route(app){
    app.use('/user', user)
}

module.exports = route;
