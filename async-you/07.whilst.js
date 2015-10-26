/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 4:27 PM
 * To change this template use File | Settings | File Templates.
 */


var http = require('http')
    , async = require('async');

var requestBody = '';

var count = 0;

async.whilst(
    function() {
        return !/meerkat/.test(requestBody.trim());
    },

    function(done){
        var body = '';
        http.get(process.argv[2], function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });

            res.on('end', function(){
                ++count;
                requestBody = body;
                done();
            });
        }).on('error', done);
    },

    function(err){
        if (err) return console.log(err);
        console.log(count);
    }
)


// My solution is below:
/*
var http = require('http')
    , async = require('async')
    , url = process.argv[2]
    , count = 0
    , string = '';
async.whilst(
    function () {
       return string !== "meerkat";
    },
    function (callback) {
        count++;
        var body = '';
        http.get(url, function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });
            res.on('end', function(chunk){
                string = body.trim();
                callback();
            });
        }).on('error', function(e){
                callback(e);
            });
    },
    function (err) {
        console.log(count)
    }
);
*/
