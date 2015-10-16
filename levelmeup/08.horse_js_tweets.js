/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 6/10/15
 * Time: 5:30 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (db, date, callback) {
    var tweets = []
    db.createReadStream({ start: date ,end: date + '\xff'})
        .on('data', function (data) {
            tweets.push(data.value)
        })
        .on('error', function (err) {
            if (callback) {
                callback(err)
                callback = null
            }
        })
        .on('end', function () {
            if (callback) {
                callback(null, tweets)
                callback = null
            }
        })
}