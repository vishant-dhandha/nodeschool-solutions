/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 5:04 PM
 * To change this template use File | Settings | File Templates.
 */

const PI = 3.141592;

var _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
function sqrt(s){
    return _sqrt(s, s/2.0, 0.0);
};
function square(x) {
    return x * x;
};

export default {
    PI: PI,
        square: square,
        sqrt: sqrt
};
//my solution is below

/*
const PI = 3.141592;
var _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
const sqrt = function(s){
    return _sqrt(s, s/2.0, 0.0);
};
const square = function(x){
    return x * x;
};
export default {
    PI: PI,
    sqrt: sqrt,
    square: square
}*/
