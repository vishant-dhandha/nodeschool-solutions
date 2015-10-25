/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 29/9/15
 * Time: 3:49 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
var app = express()


app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));


app.listen(process.argv[2])