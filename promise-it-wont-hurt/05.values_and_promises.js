/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */


var q = require('q')
    , def = q.defer();



var attachTitle = function(name){
    return "DR. "+name;
}
def.resolve("MANHATTAN");

def.promise.then(attachTitle)
    .then(console.log)

