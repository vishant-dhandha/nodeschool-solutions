/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 18/6/15
 * Time: 3:16 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            results[index] = data.toString()
            count++

            if (count == 3)
                printResults()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)

//My Code is following
/*
var http = require('http')
var res1=""
var res2=""
var res3=""


http.get(process.argv[2],function callback(response){
    response.setEncoding('utf8')
    response.on("data", function (data) {
        res1 = res1+data;
    })
    response.on("end",function(){
        console.log(res1)
        http.get(process.argv[3],function callback(response){
            response.setEncoding('utf8')
            response.on("data", function (data) {
                res2 = res2+data;
            })
            response.on("end",function(){
                console.log(res2)
                http.get(process.argv[4],function callback(response){
                    response.setEncoding('utf8')
                    response.on("data", function (data) {
                        res3 = res3+data;
                    })
                    response.on("end",function(){
                        console.log(res3)
                    })
                })
            })
        })
    })
})
*/
