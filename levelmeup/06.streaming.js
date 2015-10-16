/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 6/10/15
 * Time: 3:34 PM
 * To change this template use File | Settings | File Templates.
 */

var level = require('level')
var db = level(process.argv[2])
db.createReadStream().on('data', function (data) {
    console.log(data.key + "=" + data.value)
})
