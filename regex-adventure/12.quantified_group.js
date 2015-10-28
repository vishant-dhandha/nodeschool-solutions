/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 28/10/15
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */


module.exports = function (str) {
    return /^(0x[0-9a-fA-f]{2}\s+){8}$/.test(str)
}
