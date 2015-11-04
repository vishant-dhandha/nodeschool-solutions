/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 6:49 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    var parrots = db.collection('parrots')
    parrots.find({
        age: {
            $gt: +age
        }
    },{name:1,age:1,_id:0}).toArray(function(err, docs) {
            if (err) throw err
            console.log(docs)
            db.close()
        })
})

