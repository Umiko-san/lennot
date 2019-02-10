'use strict';
var express = require('express');
var router = express.Router();

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/airport', function (req, res) {
    res.render('contact');
});

router.get('/airline', function (req, res) {
    res.render('contact');
});

router.get('/departure', function (req, res) {

});

module.exports = router;