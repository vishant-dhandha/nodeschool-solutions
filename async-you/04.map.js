/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 2:36 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
    , async = require('async');
async.map(process.argv.slice(2), function(url, done){
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

    },
    function(err,results){
        if (err) return console.log(err);
        // results is an array of the response bodies in the same order
        console.log(results)
    });
// My solution is same as above