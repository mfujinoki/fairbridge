var aws = require('aws-sdk');
var https = require('https');

// Set kintone
var DOMAIN = '2t48w.kintone.com';
var APP_ID = 41;



/////////////////////////////////////////
var AUTH_VALUE = 'uAj7QNQfWeOb424BawjF0TF07ONsuNwt3MmoTdAA';
var headers = { 'X-Cybozu-API-Token': AUTH_VALUE };

exports.handler = function (event, context) {
    var options = {
        hostname: DOMAIN,
        port: 443,
        path: '/k/v1/records.json?app=' + APP_ID + '&query=order%20by%20AS_OF_DATE%20desc%20CUSIP%20asc%20limit%20100',
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
