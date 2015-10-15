/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 18/6/15
 * Time: 7:11 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('send me a POST\n')

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2]))

//my code is following
/*
var map = require('through2-map')
var http = require('http')
var server = http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)

    res.writeHead(200, { 'content-type': 'text/plain' })

})

server.listen(Number(process.argv[2]))
*/





