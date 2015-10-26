/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 3:50 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
    , async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback){
    var body = '';

    http.get(process.argv[2] + "?number=" + item, function(res){
        res.on('data', function(chunk){
            body += chunk.toString();
        });

        res.on('end', function(){
            callback(null, memo + Number(body));
        });
    }).on('error', callback);

}, function(err, result){
    if (err) return console.log(err);
    console.log(result);
});

//My solution is below:
/*
var http = require('http')
    , async = require('async')
    , url = process.argv[2]

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback){
    // pointless async:
        var body = '';
        http.get(url + "?number="+item, function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });
            res.on('end', function(chunk){
                callback(null, memo+parseInt(body));
            });
        }).on('error', function(e){
                callback(e);
            });

}, function(err, result){
    console.log(result)
});
*/
