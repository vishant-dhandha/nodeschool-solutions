/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 6:29 PM
 * To change this template use File | Settings | File Templates.
 */

var inputs = process.argv.slice(2);
var result = inputs.map((x) => x[0]).reduce((result, x) => result += x);

console.log(result);
// my solution is below
var inputs = process.argv.slice(2);
var Arr = []
var result = inputs.map((x)=>{
    Arr.push(x)
return Arr
})
.reduce((elem)=>{
    var output = ""
    elem.forEach((str)=>{
    output =output + str.slice(0,1);
})
console.log(output)
});
