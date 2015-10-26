var fs = require('fs')
    , http = require('http')
    , async = require('async');

async.waterfall([
    function(done){
        fs.readFile(process.argv[2], function(err, data){
            if (err) return done(err);
            done(null, data)
        });
    },

    function(data, done){
        var body = '';
        http.get(data.toString().trimRight(), function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });

            res.on('end', function(chunk){
                done(null, body);
            });
        }).on('error', function(e){
                done(e);
            });
    }
], function(err, result){
    if (err) return console.error(err);
    console.log(result);
});
// My solution is below:

/*
var http = require('http')
    , async = require('async')
    ,fs = require('fs');

async.waterfall([
    function(cb){
        fs.readFile(process.argv[2], function (err, contents) {
            cb(null,contents.toString())
        })
    },
    function(body, cb){
        var url = body;
        var body = '';
        http.get(url, function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });
            res.on('end', function(){
                cb(null, body);
            });
        }).on('error', function(err) {
                cb(err);
            });
    }
], function(err, result){
    if (err) return console.error(err);
    console.log(result);
});
*/
