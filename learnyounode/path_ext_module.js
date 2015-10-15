var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
 
//my code  is following:

/*
var fs = require('fs')
var path = require('path')
var result = [];
module.exports = function (dir,fileext,callback) {

	fs.readdir(dir, function (err, list) {
		if (err){
			return callback(err)
		}
		list.forEach(function (file) {
			if (path.extname(file) === '.' + fileext)
            result.push(file)
		})
		callback(null,result)
	})
}*/
