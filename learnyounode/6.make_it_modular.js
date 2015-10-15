var filterFn = require('./path_ext_module.js');
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err){
        return console.error('There was an error:', err)
    }
    list.forEach(function (file) {
        console.log(file)
    })
})


//My code is following:
/*
var mymodule = require('./path_ext_module.js');

mymodule(process.argv[2],process.argv[3],function(err,data){
	if(err) {
		console.log(err)	
	}
		data.filter(function(itm){
		console.log(itm)
	})	
})
*/
