/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */

const max = process.argv[2];
let FizzBuzz = function* (){
    let num = 1;
    while (num <= max) {
        let value = num;
        num++;
        if (value % 15 === 0) {
            value = 'FizzBuzz';
        } else if (value % 3 === 0) {
            value = 'Fizz';
        } else if (value % 5 === 0) {
            value = 'Buzz';
        }
        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
//my solution is below
/*
const max = process.argv[2];
let FizzBuzz = function*(){
    let  num = 1;
    while (num <= max) {
        // Here we destruct the former state
        let value = num;
        [value] = [value % 15 == 0? "FizzBuzz" : value % 5 == 0 ? "Buzz" : value % 3 == 0 ? "Fizz" : value ];
        num++;
        // and yield (return) each step
        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
*/
