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
    }).toArray(function(err, docs) {
            if (err) throw err
            console.log(docs)
            db.close()
        })
})

//My solution is below:
/*
var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo";
var year = parseInt(process.argv[2])
mongo.connect(url, function(err, db) {
    // db gives access to the database
    db.collection('parrots').find({ age: { $gt: year} } ).toArray(function(err, documents) {
        if(err){

        }
      console.log(documents)
        db.close();

    })

})
*/
