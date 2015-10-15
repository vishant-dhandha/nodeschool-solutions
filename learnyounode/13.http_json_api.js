/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 18/6/15
 * Time: 7:18 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))

// My solution is below
/*

var http = require('http')
var url = require('url')
var routes  = {
    "/api/parsetime": function(query) {
        if (typeof query.iso !== undefined) {
            var date = new Date(query.iso)
            var hour = date.getHours();
            var minute = date.getMinutes()
            var sec =  date.getSeconds()
            return  { "hour": hour, "minute": minute,"second": sec }
        }
    },
    "/api/unixtime": function(query) {
        if (typeof query.iso !== undefined) {
            var date = new Date(query.iso)
            var unixtime = date.getTime()
            return  {"unixtime":unixtime}
        }
    }
}
var server = http.createServer(function (req, res) {
    if (req.method != 'GET'){
        return res.end('send me a GET\n')
    }
    var url_data = url.parse(req.url, true)

    var routeHandler = routes[url_data.pathname]
    var response = routeHandler(url_data.query)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(response),'utf8')
    res.end()
})

server.listen(Number(process.argv[2]))
*/
