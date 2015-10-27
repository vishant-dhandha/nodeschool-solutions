/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 26/10/15
 * Time: 7:01 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (str) {
    return /^[^0-9][^A-Z]/.test(str)
}

//My solution is below
/*
module.exports = function (str) {
    return /\D[^A-Z]/.test(str);
}
*/
