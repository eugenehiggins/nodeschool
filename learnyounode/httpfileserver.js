/**
 * Created by ehigginsiii on 3/11/16.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    file = fs.createReadStream(process.argv[3])
    file.pipe(res);
});

server.listen(process.argv[2]);