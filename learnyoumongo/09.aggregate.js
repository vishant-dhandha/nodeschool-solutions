/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 6:49 PM
 * To change this template use File | Settings | File Templates.
 */
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    var prices = db.collection('prices')

    prices.aggregate([
            { $match: { size: process.argv[2] }}
            , { $group: {
                _id: 'total' // This can be an arbitrary string in this case
                ,total: {
                    // $avg is the operator used here
                    $avg: '$price'
                }
            }}
        ]).toArray(function(err, results) {
            if (err) throw err
            if (!results.length) {
                throw new Error('No results found')
            }
            var o = results[0]
            console.log(Number(o.total).toFixed(2))
            db.close()
        })
})


