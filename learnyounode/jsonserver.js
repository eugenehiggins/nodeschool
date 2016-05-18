/**
 * Created by ehigginsiii on 3/11/16.
 */
var http = require('http');
var url = require('url');
var qs = require('querystring');

var server = http.createServer(function(req,res){
    var theURL = url.parse(req.url);
    var date = new Date(qs.parse(theURL.query).iso);
    //var time = new Date(qs.parse(theURL.query).iso.split("T")[1]);
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    res.writeHead(200, { 'Content-type': 'application/json'});

    switch ( theURL.pathname ) {

        case "/api/parsetime":


            //var jsonStr = JSON.stringify("hour:" + hour +", minute:" + minute + ", second:" + second);
            var jsonStr = JSON.stringify({hour: hour, minute: minute, second:second});
            res.end(jsonStr);
            //console.log(jsonStr);
            break;
        case "/api/unixtime":
            //console.log(date.getTime());
            var x = '{"unixtime" :' + Date.parse(date.toISOString()) + '}';
            res.end(x);
            break;
    }

    req.on('end',function(){
        //console.log('done');

    });
}).listen(process.argv[2]);