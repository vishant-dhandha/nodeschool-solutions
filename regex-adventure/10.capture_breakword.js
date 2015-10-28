/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 27/10/15
 * Time: 6:03 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (str) {
    var m = /\bx=(\d+)\b/.exec(str)
    return m ? m[1] : null
}
