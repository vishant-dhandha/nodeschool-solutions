/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 12:20 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');
var def = q.defer();

function printError (err) {
    console.log(err.message);
}

def.promise.then(null, printError);
setTimeout(def.reject, 300, new Error("REJECTED!"));

//My solution is below
/*
var q = require('q');
var def = q.defer();

def.promise.then(null,function(res){console.log(res)});

setTimeout(def.reject("REJECTED!"), 300);
*/
