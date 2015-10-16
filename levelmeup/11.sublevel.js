/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 2:16 PM
 * To change this template use File | Settings | File Templates.
 */

var level = require('level')
var sublevel = require('level-sublevel')

var db = sublevel(level(process.argv[2]))

var robots = db.sublevel('robots')
robots.put( "slogan", 'beep boop', function (err,res) {
    if(err)
        throw err;
    console.log(res)
})

var dinosaurs = db.sublevel('dinosaurs')
dinosaurs.put( "slogan", 'rawr', function (err,res) {
    if(err)
        throw err;
    console.log(res)
})


