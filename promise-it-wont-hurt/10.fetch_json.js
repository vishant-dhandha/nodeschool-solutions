/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */

var qhttp = require('q-io/http');
qhttp.read("http://localhost:1337")
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()

//My solution is below:

/*
var HTTP = require("q-io/http");
HTTP.read("http://localhost:1337").then(function(res){
    console.log(JSON.parse(res.toString()))
})
*/
