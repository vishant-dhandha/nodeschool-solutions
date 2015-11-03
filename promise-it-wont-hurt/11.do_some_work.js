/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */

var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
    .then(function (id) {
        return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();

//My solution is below:
/*
var qhttp = require('q-io/http');
qhttp.read("http://localhost:7000/")
    .then(function (id) {
        qhttp.read("http://localhost:7001/"+id)
            .then(function (json) {
                console.log(JSON.parse(json));
            })
    })
    .then(null, console.error)
    .done()
*/
