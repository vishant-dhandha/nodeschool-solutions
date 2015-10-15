//var fs = require('fs')
//var contents = fs.readFileSync(process.argv[2])
//var lines = contents.toString().split('\n').length - 1
//console.log(lines)
// My Code is following:
var fs = require('fs')
var buffer = fs.fs(process.argv[2]);
var str = buffer.toString()
var lines = str.split('\n');
console.log(lines.length-1);
