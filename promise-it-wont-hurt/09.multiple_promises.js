/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 12:00 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');
var def1 = q.defer();
var def2 = q.defer();

function all(promise1,promise2){
    var groupDef = q.defer()
        , counter = 0
        , val1
        , val2;

    promise1.then(function(result){
        val1 = result;
        ++counter;
        if (counter >=2) groupDef.resolve([val1, val2]);
    })
        .then(null, groupDef.reject)
        .done();

    promise2.then(function (result) {
            val2 = result;
            ++counter;
            if (counter >=2) groupDef.resolve([val1, val2]);
        })
        .then(null, groupDef.reject)
        .done();

    return groupDef.promise;
}

all(def1.promise, def2.promise)
    .then(console.log)
    .done();

setTimeout(function () {
    def1.resolve("PROMISES");
    def2.resolve("FTW");
},200)
