/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 18/6/15
 * Time: 4:29 PM
 * To change this template use File | Settings | File Templates.
 */


var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

//my code is following
/*var http = require('http')
var fs  = require('fs')
var bl = require('bl')
var server = http.createServer(function (req,res) {

    var k = fs.createReadStream(process.argv[3]);

    k.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        res.end(data)
    }))
})

server.listen(Number(process.argv[2]))*/
