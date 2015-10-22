/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 5:41 PM
 * To change this template use File | Settings | File Templates.
 */

const max = +process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
    let num = 1;
    return {
        next() {
        if (num > max) {
            return { done: true };
        }
        let value = num;
        if (value % 15 === 0) {
            value = 'FizzBuzz';
        } else if (value % 3 === 0) {
            value = 'Fizz';
        } else if (value % 5 === 0) {
            value = 'Buzz';
        }
        num++;
        return { done: false, value: value };
    }
}
}
}

for (var n of FizzBuzz) {
    console.log(n);
}
//my solution is below

/*const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
    let num = 1;
    // The resulting iterator object has to have a next method:
    return {
        next() {
            if (num > max) {
                return { done: true };
            }
            // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
            let value = num;
            [value] = [value % 15 == 0? "FizzBuzz" : value % 5 == 0 ? "Buzz" : value % 3 == 0 ? "Fizz" : value ];
            num++
            return { done: false, value: value };
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}*/
