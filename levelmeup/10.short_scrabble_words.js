/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 12:34 AM
 * To change this template use File | Settings | File Templates.
 */

module.exports.init = function (db, words, callback) {
    var batch = words.map(function (word) {
        // length-prefixed keys, separated by a '!' so we
        // can query by length
        var key = word.length + '!' + word
        return { type: 'put', key: key, value: word }
    })
    db.batch(batch, callback)
}

module.exports.query = function (db, word, callback) {
    var words = []
    var key = word.length + '!' + word.replace(/\*/g, '')
    db.createReadStream({ start: key, end: key + '\xff' })
        .on('data', function (data) {
            words.push(data.value)
        })
        .on('error', function (err) {
            if (callback)
                callback(err)
            callback = null
        })
        .on('end', function () {
            if (callback)
                callback(null, words)
            callback = null
        })
}
// mys solution is below
/*
module.exports.init = function (db, words, callback) {
    // insert each word in the words array here
    // then call `callback()` when you are done inserting words
    var ops = [];

    words.forEach(function (word) {
        var key = word.length + '!' + word;

        ops.push({ type: 'put', key: key, value: word });
    });

    db.batch(ops, callback);
}
module.exports.query = function (db, word, callback) {
    // `word` may have '*' chars to denote single-letter wildcards
    // call callback(err, results) with an array of matching words
    var length = word.length,
        word = word.replace(/\*//*
g, ''),
        key = length + '!' + word,
        words = [];

    db.createReadStream({ start: key, end: key + '\xff' })
        .on('data', function (data) {
            words.push(data.value);
        })
        .on('error', function (err) {
            if (callback) {
                callback(err)
                callback = null
            }
        })
        .on('end', function () {
            if (callback) {
                callback(null, words)
                callback = null
            }
        })
}
*/
