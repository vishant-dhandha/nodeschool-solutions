/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 6/10/15
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */

var level = require('level')
var db = level(process.argv[2], { valueEncoding: 'json' })
var data = require(process.argv[3])
var operations = data.map(function (row) {
    var key
    if (row.type == 'user')
        key = row.name
    else if (row.type == 'repo')
        key = row.user + '!' + row.name
    return { type: 'put', key: key, value: row }
})

db.batch(operations)
//my solution is below
/*
var level = require('level')
var jsonFile = require(process.argv[3])
var db = level(process.argv[2], { valueEncoding: 'json' })
var operations = [];
jsonFile.forEach(function(entry){
    var key;
    if (entry.type === 'user') {
        key = entry.name;
    }
    else {
        key = entry.user + "!" + entry.name;
    }
    operations.push({
        type: 'put',
        key: key,
        value: entry
    });
})
db.batch(operations);
*/
