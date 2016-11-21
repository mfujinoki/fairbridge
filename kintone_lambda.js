var aws = require('aws-sdk');
var https = require('https');

// Set kintone
var DOMAIN = '2t48w.kintone.com';
var APP_ID = 39;
//var LOGIN_NAME = 'Your Login name';
//var PASSWORD = 'Your Password';


/////////////////////////////////////////
//var AUTH_VALUE = new Buffer(LOGIN_NAME + ':' + PASSWORD).toString('base64');
var AUTH_VALUE = '88zn5qdDubvvvghHrwmNm50BAYBsQVdiY9LSlJDw';
var headers = { 'X-Cybozu-API-Token': AUTH_VALUE };

exports.handler = function (event, context) {
    var options = {
        hostname: DOMAIN,
        port: 443,
        path: '/k/v1/records.json?app=' + APP_ID,
        method: 'GET',
        headers: headers
    };

    var req = https.request(options, function (res) {
        var data = "";
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            context.done(null, JSON.parse(data));
        })
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    req.end();

};
