/**
 * Created by ehigginsiii on 3/11/16.
 */
var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req,res){

    var message = "";
    var myUpperCase = function(str) {
        return str.toUpperCase();
    }

    req.on('data',function(chunk){
        message += chunk.toString();
    });
    req.on('end', function(){
        res.end(myUpperCase(message));
    });
    //res.end(something);
});

server.listen(process.argv[2]);