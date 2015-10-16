/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 23/8/15
 * Time: 6:36 PM
 * To change this template use File | Settings | File Templates.
 */

var level = require('level')
var db = level(process.argv[2])

function fetchNext (i) {
    var key = 'key' + i
    db.get(key, function (err, data) {
        if (err) {
            if (!err.notFound)
                throw err
        } else
            console.log(key + '=' + data)

        if (i < 100)
            fetchNext(i + 1)
    })
}

fetchNext(0)


// my solution is as below

/*
var level = require('level')
var db = level(process.argv[2])
var arr = [];
db.createReadStream({ keys: true, values: false })
    .on('data', function (data) {
        arr.push(data);
    })
    .on('error', function (err) {
        console.log('Oh my!', err)
    })
    .on('end', function () {

        var tempArr = [];
        arr.forEach(function(i){
            tempArr.push(i.replace('key',''))
        })
        tempArr.sort(function(a, b){return a-b})

        var finalArr=[];
        var str = "key";
        tempArr.forEach(function(i){
            finalArr.push(str.concat(i))
        })
        finalArr.forEach(function(itm){
            db.get(itm, function (err, value) {
                if (err) return console.log('Ooops!', err) // likely the key was not found
                console.log(itm + '=' + value)
            })
        })

    })
*/


