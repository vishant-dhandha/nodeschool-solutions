/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 29/9/15
 * Time: 3:54 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
var app = express()

app.set('view engine', 'jade')
app.set('views', process.argv[3])

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])