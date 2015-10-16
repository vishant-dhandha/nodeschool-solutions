/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 2:37 PM
 * To change this template use File | Settings | File Templates.
 */
var multilevel = require('multilevel')
var net = require('net')
var db = multilevel.client()
var con = net.connect(4545)
con.pipe(db.createRpcStream()).pipe(con)

db.get('multilevelmeup', function (err, value) {
    if (err)
        throw err
    console.log(value)
    con.end()
})
//my solution is below

/*
var multilevel = require('multilevel');
var net = require('net');

var db = multilevel.client()
var connection = net.connect(4545)

connection.pipe(db.createRpcStream()).pipe(connection)
db.createReadStream().on('data',  function (data) {
    console.log(data.value)
    connection.end()
});
*/
