/**
 * Created by ehigginsiii on 3/4/16.
 */

var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var count = 0;
var output = [];

urls.forEach(function(url, index){

    http.get(url, function(res){

        count++;
        var str = "";

        res.pipe(bl(function(err,data){

            str = data.toString();
        }));

        res.on('end', function(){
            output[index] = str;
            //console.log(count);
            if (count === urls.length ) {
                output.forEach(function(val){
                    console.log(val);
                    //console.log('########');
                });
            }
        });
    });


});




//http.get(process.argv, function(res){
//
//});