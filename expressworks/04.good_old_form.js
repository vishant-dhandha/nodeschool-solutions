/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 29/9/15
 * Time: 3:59 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res){
    res.end(req.body.str.split('').reverse().join(''))

})
app.listen(process.argv[2])