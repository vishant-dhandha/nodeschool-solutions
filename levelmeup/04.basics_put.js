/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 23/8/15
 * Time: 9:27 PM
 * To change this template use File | Settings | File Templates.
 */

var level = require('level')
var db = level(process.argv[2])
var obj = JSON.parse(process.argv[3])

for (var key in obj) {
    db.put(key, obj[key])
}

// my solution is below
/*

var level = require('level');
var db = level(process.argv[2]);
var obj = JSON.parse(process.argv[3]);
for(var key in obj){
    db.put(key, obj[key], function (err) {
        if (err)
            return console.error('Error in put():', err)
        console.error('put foo = bar')
    })
}

*/
