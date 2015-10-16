/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 24/8/15
 * Time: 11:06 AM
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs')
var level = require('level')

// read file and split into an array of lines
var data = fs.readFileSync(process.argv[3], 'utf8').split('\n')

level(process.argv[2], function (err, db) {
    if (err)
        throw err

    // chained batch object
    var batch = db.batch()
    data.forEach(function (line) {
        var d = line.split(',')
        if (d[0] == 'del')
            return batch.del(d[1])
        batch.put(d[1], d[2])
    })
    // commit the batch
    batch.write()
})

/* Alternative method:

 var operations = data.map(function (line) {
 var d = line.split(',')
 // 'value' is ignored for del
 return { type: d[0], key: d[1], value: d[2] }
 })

 db.batch(operations, function (err) {
 if (err)
 throw err
 db.close()
 })

 */

// my solution is below
/*
var level = require('level')
var fs = require('fs')
var db = level(process.argv[2])

var operations = [];

fs.readFile(process.argv[3], function (err, contents) {
    // fs.readFile(file, 'utf8', callback) can also be used
    if (err)
        throw err;
    var lines = contents.toString().split('\n')
    operations = lines.map(function (line) {
        var params = line.split(','),
            op = {
                type: params[0],
                key: params[1]
            };

        if (params[2]) {
            op.value = params[2];
        }
        return op;
    });
    db.batch(operations, function (err) {
        if (err)
            console.error(err);
    });
});
*/

