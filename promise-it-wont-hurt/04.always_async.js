/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 12:49 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q')
    , def = q.defer();

def.promise.then(console.log);
def.resolve("SECOND");
console.log("FIRST")