/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 6:49 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2]

mongo.connect(url, function(err, db) {
    if (err) throw err
    var parrots = db.collection('parrots')

    parrots.count({
        age: {
            $gt: +age
        }
    }, function(err, count) {
        if (err) throw err;  // handle error
        // other operations
        console.log(count)
        db.close()
    })
})

