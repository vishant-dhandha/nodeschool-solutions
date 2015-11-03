/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 12:08 PM
 * To change this template use File | Settings | File Templates.
 */


var q = require('q');
var def = q.defer();

def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED!");

//My solution is below:
/*
var q = require('q');
var defer = q.defer();
//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here
defer.resolve("RESOLVED!")
setTimeout(defer.promise.then(function (result) {
    console.log(result);
}),300)
*/
