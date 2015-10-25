/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 29/9/15
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */

/*
var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


app.listen(process.argv[2])
*/

//my solution is below

var express = require('express')
var app = express()
app.use(express.static(process.argv[3]));

app.use(require('stylus').middleware('/stylish'));


app.listen(process.argv[2])

