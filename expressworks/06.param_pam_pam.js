/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 30/9/15
 * Time: 1:00 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
    var id = req.params.id
    var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.send(str)
})

app.listen(process.argv[2])

//my solution is below
/*
var express = require('express')
var app = express()
app.put('/message/:id', function(req, res){
    res.end(require('crypto').createHash('sha1').update(new Date().toDateString() +  req.params.id).digest('hex'))
});
app.listen(process.argv[2])
*/
