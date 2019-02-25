'use strict';
var express = require('express');
var router = express.Router();

router.get('/arrival', function (req, res) {

});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/airport', function (req, res) {
    res.render('airport');
});

router.get('/airline', function (req, res) {
    res.render('airline');
});

module.exports = router;