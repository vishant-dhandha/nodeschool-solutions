/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 5:32 PM
 * To change this template use File | Settings | File Templates.
 */

console.log({
    [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
    [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
});

//my solution is below
/*
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {
    [evenOrOddKey] : evenOrOdd,
    [sum] : sum
};
console.log(obj);
*/
