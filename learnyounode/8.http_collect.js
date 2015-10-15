var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})

//my code is following
/*var bl = require('bl')
var http = require('http')
var result = "";

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')

    response.pipe(bl(function (err, data) {
        result =  result+data;
    }))
    response.on('end', function(){
        console.log(result.length)
        console.log(result)
    })
})*/
