/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 23/8/15
 * Time: 6:24 PM
 * To change this template use File | Settings | File Templates.
 */

var level = require('level')
var db = level(process.argv[2])
var key = process.argv[3]

db.get(key, function (err, value) {
    if (err)
        throw err

    console.log(value)
})

// my solutionn is below
/*
var level = require('level')

var db = level(process.argv[2])

db.get(process.argv[3], function (err, value) {
    console.log(value)
})
*/
