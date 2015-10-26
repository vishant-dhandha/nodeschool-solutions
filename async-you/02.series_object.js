/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
    , async = require('async');

async.series({
        requestOne: function(done){
            fetchURL(process.argv[2], done);
        },
        requestTwo: function(done){
            fetchURL(process.argv[3], done);
        }
    },
    function(err, result){
        if (err) return console.error(err);
        console.log(result);
    });


function fetchURL(url, done) {
    var body = '';
    http.get(url, function(res){
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

// My solution is below:
/*

var  http = require('http')
    , async = require('async');

async.series({
    requestOne : function(callback){
        http.get(process.argv[2], function(res){
            var body = "";
            res.on('data', function(chunk){
                body += chunk.toString();
            });

            res.on('end', function(){
                callback(null, body);
            });
        }).on('error', function(e){
                callback(e);
            });
    },
    requestTwo :function(callback){
        http.get(process.argv[3], function(res){
            var body = "";
            res.on('data', function(chunk){
                body += chunk.toString();
            });
            res.on('end', function(){
                callback(null, body);
            });
        }).on('error', function(e){
                callback(e);
            });
    }
},
    // optional callback
    function(err, results){
        if(err)
            console.log(err)
        console.log(results)
    });
*/
