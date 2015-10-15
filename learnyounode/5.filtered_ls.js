
var fs = require('fs')
var path = require('path');
var dir = process.argv[2]
var extension = process.argv[3]
fs.readdir(dir, function (err, list) {
    var filtered = list.filter(function(file){
        if(path.extname(file) == '.'+extension)
            console.log(file)
    })
})
//My code is following:
/*var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    })
})*/


