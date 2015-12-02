/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/12/15
 * Time: 2:15 PM
 * To change this template use File | Settings | File Templates.
 */

var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);
