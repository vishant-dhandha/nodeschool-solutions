/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 28/10/15
 * Time: 1:16 PM
 * To change this template use File | Settings | File Templates.
 */

var marked = require('marked')


module.exports = function (str) {
    var md = marked(str)
    return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}

// My solution is below:
/*
module.exports = function (str) {
    var md = marked(str)
    var i = 0;
    return md.replace(/@@/g, function(match) {
        if(i%2 == 0){
            i++
            return '<blink>'
        }else{
            i++
            return '</blink>'
        }
    })
}
*/
