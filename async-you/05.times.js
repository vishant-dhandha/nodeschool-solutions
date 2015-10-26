/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
    , qs = require('querystring')
    , async = require('async')
    , hostname = process.argv[2]
    , port = process.argv[3]
    , url = 'http://' +  hostname + ':' + port;

async.series({
    post: function(done){
        async.times(5, function(n, next){
            _addUser(++n, function(err){
                next(err);
            });
        }, function(err){
            if (err) return done(err);
            done(null, 'saved');
        });
    },

    get: function(done){
        http.get(url + '/users', function(res){
            var body = "";
            res.on('data', function(chunk){
                body += chunk.toString();
            });

            res.on('end', function(){
                done(null, body);
            });
        }).on('error', done);
    }

}, function(err, result){
    if (err) return console.log(err);
    console.log(result.get);
});


function _addUser(user_id, cb){
    var postdata = JSON.stringify({'user_id': user_id}),
        opts = {
            hostname: hostname,
            port: port,
            path: '/users/create',
            method: 'POST',
            headers: {
                'Content-Length': postdata.length
            }
        };

    var req = http.request(opts, function(res){
        res.on('data', function(chunk){})

        res.on('end', function(){
            cb();
        });
    });

    req.on('error', cb);

    req.write(postdata);
    req.end();
}


// My solution is below:

/*
var  http = require('http'),
    async = require('async'),
    hostname = process.argv[2],
    port = process.argv[3],
    url = 'http://' +  hostname + ':' + port;

var postRequest = function(id, callback) {

    var body = '';
    var postData = JSON.stringify({"user_id": id});

    var opts = {
        hostname: hostname,
        port: port,
        path: '/users/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    var req = http.request(opts, function(res){
        res.setEncoding('utf8');
        res.on('data', function (chunk) { body += chunk.toString(); });
        res.on('end', function(chunk){ callback(null, body); });
    });
    req.on("error", callback);
    req.write(postData);
    req.end();
}

async.series({

        post: function(cb){
            async.times(5, function(n, callback){
                postRequest(n+1, function(err, user) {
                    callback(err, user)
                })
            }, function(err, users) {
                if(err) return cb(err);
                cb(null,users)
            })
        },
        get : function(cb){
            http.get(url+'/users' , function(res){
                var body = "";
                res.on('data', function(chunk){
                    body += chunk.toString();
                });
                res.on('end', function(){
                    cb(null, body);
                });
            }).on('error', function(e){
                    cb(e);
                });
        }
},
    // optional callback
    function(err, results){
        if(err)
            console.log(err)
        console.log(results.get)
    });
 */
