/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 6:49 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url, function(err, db) {
    if (err) throw err
    var users = db.collection('users')

    users.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    },  function(err, data) {
        if (err) throw err;  // handle error
        // other operations
        console.log(JSON.stringify(data))
        db.close()
    })
})

