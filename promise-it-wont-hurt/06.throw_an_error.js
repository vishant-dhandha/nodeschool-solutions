/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 1:23 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q')
    , def = q.defer()
    ,result;

function parsePromised(json){
    try {
        result = JSON.parse(json);
    } catch (e) {
        def.reject(e);
    }
    def.resolve(result);
    return def.promise;
}

parsePromised(process.argv[2]).then(console.log).then(null, console.log);
