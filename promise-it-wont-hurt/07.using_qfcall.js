/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 3:25 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');

q.fcall(JSON.parse, process.argv[2])
    .then(null, console.log)

//My solution is below:
/*
var q = require('q')
    , def = q.defer()
    ,result
    ,rejection;

function parsePromised(json){
    try {
        result = JSON.parse(json);
    } catch (e) {
        rejection = q.fcall(function () {
            throw e;
        });
    }
    def.resolve(rejection);
    return def.promise;
}
parsePromised(process.argv[2]).then(console.log).then(null, console.log);
*/
