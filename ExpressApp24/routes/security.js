'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');

var headers = {
    'Accept': 'text/plain',
    'app_id': '1b9580e2',
    'app_key': '773a9c625f76ea664afd4a19ed7924aa'
};

var a1 = "";
var b1 = "";
var c1 = "";
var d1 = "";
var a2 = "";
var b2 = "";
var c2 = "";
var d2 = "";
var a3 = "";
var b3 = "";
var c3 = "";
var d3 = "";
var open = "";
var orangeCheck = "";

function security_callback(error, response, body) {

        try {
            var z = body;
            var y = JSON.parse(z);
            console.log(y.data.securityQueues);
            a1 = time(y.data.securityQueues[0].dwellTimeInSeconds);
            b1 = time(y.data.securityQueues[1].dwellTimeInSeconds);
            c1 = time(y.data.securityQueues[2].dwellTimeInSeconds);
            d1 = time(y.data.securityQueues[3].dwellTimeInSeconds);

            a2 = y.data.securityQueues[0].lastUpdate;
            b2 = y.data.securityQueues[1].lastUpdate;
            c2 = y.data.securityQueues[2].lastUpdate;
            d2 = y.data.securityQueues[3].lastUpdate;

            var temp11 = new Date(a2);
            var date11 = temp11.setHours(temp11.getHours() + 2);
            date11 = new Date(date11).toString().slice(16, 21);
            a2 = date11;

            var temp22 = new Date(b2);
            var date22 = temp22.setHours(temp22.getHours() + 2);
            date22 = new Date(date22).toString().slice(16, 21);
            b2 = date22;

            var temp33 = new Date(c2);
            var date33 = temp33.setHours(temp33.getHours() + 2);
            date33 = new Date(date33).toString().slice(16, 21);
            c2 = date33;

            var temp44 = new Date(d2);
            var date44 = temp44.setHours(temp44.getHours() + 2);
            date44 = new Date(date44).toString().slice(16, 21);
            d2 = date44;

            a3 = y.data.securityQueues[0].sampleCount;
            b3 = y.data.securityQueues[1].sampleCount;
            c3 = y.data.securityQueues[2].sampleCount;
            d3 = y.data.securityQueues[3].sampleCount;

            console.log(a1);
            console.log(b1);
            console.log(c1);
            console.log(d1);
            console.log(a2);
            console.log(b2);
            console.log(c2);
            console.log(d2);

        }
        catch (error) {
            try {
                z = body;
                y = JSON.parse(z);
                console.log(y.data.securityQueues);
                a1 = time(y.data.securityQueues[0].dwellTimeInSeconds);
                b1 = time(y.data.securityQueues[1].dwellTimeInSeconds);
                c1 = time(y.data.securityQueues[2].dwellTimeInSeconds);
                d1 = time(y.data.securityQueues[3].dwellTimeInSeconds);

                a2 = y.data.securityQueues[0].lastUpdate;
                b2 = y.data.securityQueues[1].lastUpdate;
                c2 = y.data.securityQueues[2].lastUpdate;
                d2 = y.data.securityQueues[3].lastUpdate;

                temp11 = new Date(a2);
                date11 = temp11.setHours(temp11.getHours() + 2);
                date11 = new Date(date11).toString().slice(16, 21);
                a2 = date11;

                temp22 = new Date(b2);
                date22 = temp22.setHours(temp22.getHours() + 2);
                date22 = new Date(date22).toString().slice(16, 21);
                b2 = date22;

                temp33 = new Date(c2);
                date33 = temp33.setHours(temp33.getHours() + 2);
                date33 = new Date(date33).toString().slice(16, 21);
                c2 = date33;

                temp44 = new Date(d2);
                date44 = temp44.setHours(temp44.getHours() + 2);
                date44 = new Date(date44).toString().slice(16, 21);
                d2 = date44;

                a3 = y.data.securityQueues[0].sampleCount;
                b3 = y.data.securityQueues[1].sampleCount;
                c3 = y.data.securityQueues[2].sampleCount;
                d3 = y.data.securityQueues[3].sampleCount;

                console.log(a1);
                console.log(b1);
                console.log(c1);
                console.log(d1);
                console.log(a2);
                console.log(b2);
                console.log(c2);
                console.log(d2);
            } catch (error) {
                console.log("Error 2 " + error);
            }
        }
}


function convertLocal(d) { 
    var temp = new Date(d);
    var date = temp.setHours(temp.getHours() + 2);
    date = new Date(date).toString().slice(16, 21);
    return date;
}

function time(time) {
    return ~~(time / 60) + " minuuttia " + ((time % 60 < 10 && time % 60) > 0 ? "0" : "") + time % 60 + " sekuntia";
}

var options = {
    url: '',
    headers: headers
};
/* GET home page. */ 
router.get('/', function (req, res) {

    try {
        options.url = 'https://api.finavia.fi/queues/v0/queues';
        console.log(options.url);
        request(options, security_callback);

        var addTime = 0;

        var temp = new Date();
        var today = temp.setHours(temp.getHours() + 2);

        var temp1 = new Date();
        var temp2 = new Date();
        var temp3 = new Date();
        var temp4 = new Date();
        var temp5 = new Date();
        var temp6 = new Date();
        var temp7 = new Date();
        var temp8 = new Date();
        var temp9 = new Date();
        var tempOrangeOpen = new Date();
        var tempOrangeClose = new Date();

        var open1 = temp1.setHours(5);
        var close1 = temp2.setHours(9);
        var open2 = temp3.setHours(12, 30);
        var close2 = temp4.setHours(17, 30);

        var weekendopen1 = temp5.setHours(5);
        var weekendclose1 = temp6.setHours(9);
        var weekendopen2 = temp7.setHours(14);
        var weekendclose2 = temp8.setHours(18);

        var orangeOpen = tempOrangeOpen.setHours(0);
        var orangeClose = tempOrangeClose.setHours(4);

        var dateTemp = new Date(today);
        var day = dateTemp.getDay();

        if (day === 6 || day === 0) { //weekend
            var todayf = dateTemp.getTime();
            var weekendopen1temp = new Date(weekendopen1);
            var weekendopen1f = weekendopen1temp.getTime();
            var weekendopen2temp = new Date(weekendopen2);
            var weekendopen2f = weekendopen2temp.getTime();
            var weekendclose1temp = new Date(weekendclose1);
            var weekendclose1f = weekendclose1temp.getTime();
            var weekendclose2temp = new Date(weekendclose2);
            var weekendclose2f = weekendclose2temp.getTime();
            console.log("opening time " + orangeOpen + " closing time " + orangeClose);
            if (todayf >= orangeOpen && todayf <= orangeClose) {
                orangeCheck = "True";
            } else {
                orangeCheck = "False";
            }

            if (todayf >= weekendopen1f && todayf <= weekendclose1f || todayf >= weekendopen2f && todayf <= weekendclose2f) {
                open = "Avoinna";
            } else {
                open = "Suljettu";
            }
        } else {

            var todayg = dateTemp.getTime();
            var open1temp = new Date(open1);
            var open1f = open1temp.getTime();
            var open2temp = new Date(open2);
            var open2f = open2temp.getTime();
            var close1temp = new Date(close1);
            var close1f = close1temp.getTime();
            var close2temp = new Date(close2);
            var close2f = close2temp.getTime();

            if (todayg >= orangeOpen && today <= orangeClose) {
                orangeCheck = "True";
            } else {
                orangeCheck = "False";
            }

            if (todayg >= open1f && todayg <= close1f || todayg >= open2f && todayg <= close2f) {
                open = "Avoinna";
            } else {
                open = "Suljettu";
            }
        }

        //console.log("rendering page open is " + open);
        //console.log("orangeCheck is " + orangeCheck);
        //console.log("d2 is " + d2)
        if (a1 === "" || d2 === "" || open === "") {
            setTimeout(function () {
                res.render('security', { title: 'Express', a: a1, b: b1, c: c1, d: d1, at: a2, bt: b2, ct: c2, dt: d2, opent: open, as: a3, bs: b3, cs: c3, ds: d3, opencheck: orangeCheck });
            }, 800);
        } else {
            res.render('security', { title: 'Express', a: a1, b: b1, c: c1, d: d1, at: a2, bt: b2, ct: c2, dt: d2, opent: open, as: a3, bs: b3, cs: c3, ds: d3, opencheck: orangeCheck });
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;