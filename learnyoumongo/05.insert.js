/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 6:49 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'
var docToInsert = {
    firstName:process.argv[2],
    lastName:process.argv[3]
}
mongo.connect(url, function(err, db) {
    if (err) throw err
    var docs = db.collection('docs')

    docs.insert(docToInsert, function(err, data) {
        if (err) throw err;  // handle error
        // other operations
        console.log(JSON.stringify(docToInsert))
        db.close()
    })
})

