/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 28/10/15
 * Time: 12:22 PM
 * To change this template use File | Settings | File Templates.
 */


module.exports = function (str) {
    return   /^(cat|dog|robot)\d+$/.test(str)
}
