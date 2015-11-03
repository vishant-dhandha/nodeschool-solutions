/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 12:40 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q')
    , def = q.defer();

def.promise.then(console.log, console.log);
def.resolve("I FIRED");
def.reject("I DID NOT FIRE");


// My solution is below:
/*
var q = require('q');
var def = q.defer();

function printError (err) {
    console.log(err.message);
}

def.promise.then(console.log,printError);

def.resolve("I FIRED");
def.reject(new Error("REJECTED!"));
*/


