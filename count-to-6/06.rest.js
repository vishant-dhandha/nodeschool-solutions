/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/12/15
 * Time: 3:05 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = (...args) => {
    var sum = args.reduce((soFar, value) => soFar + value, 0);
    return sum / args.length;
};

//My solution is below:

/*
module.exports = function average(...args) {

    var sum = 0;
    args.forEach(function (value) {
        sum += value;
    });
    return sum/args.length;

};
*/
