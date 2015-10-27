/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 27/10/15
 * Time: 5:09 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (str) {
    return /^\d+\.jpe?g$/.test(str)
}

//My solution is below:
/*
module.exports = function (str) {
    return /[0-9]+\.jpe?g$/.test(str)
}
*/
