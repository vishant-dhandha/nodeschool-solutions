/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/12/15
 * Time: 4:15 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports =
    (string, bangs = string.length) => string + "!".repeat(bangs);

//My solution is below:
/*
module.exports = function (input, output = input.length) {
    return `${input}${'!'.repeat(output)}`;
}
*/
