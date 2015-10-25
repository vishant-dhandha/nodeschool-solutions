/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 30/9/15
 * Time: 5:27 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
    var filename = process.argv[3]
    fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
            books = JSON.parse(data)
        } catch (e) {
            res.sendStatus(500)
        }
        res.json(books)
    })
})

app.listen(process.argv[2])


// my solution is below
/*
var express = require('express')
var app = express()
var fs = require('fs')
var object
app.get('/books', function(req, response){
    fs.readFile(process.argv[3], function(err,res){
        if(err){
            throw new Error('some error occured')
        }
        object = JSON.parse(res.toString())
        response.json(object)
    })
})
app.listen(process.argv[2])
*/
