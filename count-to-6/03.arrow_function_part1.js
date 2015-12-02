/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/12/15
 * Time: 2:07 PM
 * To change this template use File | Settings | File Templates.
 */

var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0]).reduce((soFar, s) => soFar + s);
console.log(`[${inputs}] becomes "${result}"`);

// My solution is below:
/*
var inputs = process.argv.slice(2);
var result = inputs.map(str => str[0]).reduce((prev,curr) => prev+curr );
console.log("["+inputs+"] becomes \""+result+"\"")
*/