/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 6/10/15
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (db, date, callback) {
    var tweets = 0
    db.createReadStream({ start: date })
        .on('data', function (data) {
            tweets++
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
//my solution is below
/*
module.exports = function (db, date, callback) {
    var count = 0
    db.createReadStream({ start: date }).on('data',function(data){
       var lines = data.toString().split('\n')
       lines.map(function(){
            count++
       });
    }).on('end',function(){

        callback(null,count)
    })
}
*/

