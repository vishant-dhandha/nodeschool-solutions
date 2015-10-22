/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 8/10/15
 * Time: 3:29 PM
 * To change this template use File | Settings | File Templates.
 */

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if(val !== '')
        args.push(+val);
    });
});

var avg = function (...args){
    return  (args.reduce( (a, b) => a + b )/args.length);
};
// write a function called `avg` here that calculates the average.
console.log(avg(...args));
