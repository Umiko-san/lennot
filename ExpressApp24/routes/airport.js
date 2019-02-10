'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get("/", (req, res, next) => {
    res.render('airport', {})
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;