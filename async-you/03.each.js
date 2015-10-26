/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 2:27 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
    , async = require('async');

async.each(process.argv.slice(2), function(item, done){
        http.get(item, function(res){
            res.on('data', function(chunk){
            });

            res.on('end', function(){
                done(null);
            });
        }).on('error', function(err){
                done(err);
            });
    },
    function(err){
        if(err) console.log(err);
    });

// My solution is below:
/*
var http = require('http')
    , async = require('async');
async.each([ process.argv[2],process.argv[3]], function(item, done){

        http.get(item, function(res){
            var body;
            res.on('data', function(chunk){
                body += chunk.toString();
            });
            res.on('end', function(chunk){
                done(null, body);
            });
        }).on('error', function(e){
                done(e);
            });

    },
    function(err){
        if (err) console.log(err);
    });
*/
