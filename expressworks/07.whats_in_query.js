/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 30/9/15
 * Time: 5:15 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
var app = express()

app.get('/search', function(req, res){
    var query = req.query
    res.send(query)
})

app.listen(process.argv[2])

 // My solution is below:
/*
var express = require('express')
var app = express()
app.get('/search', function(req, res){
    var param = req.query;
    var obj = {};
    for(var i in param){
      obj[i] = param[i];
    }
    res.send(obj)
});
app.listen(process.argv[2])
*/
