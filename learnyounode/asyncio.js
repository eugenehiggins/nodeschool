/**
 * Created by ehigginsiii on 3/4/16.
 */

var fs = require('fs');

var thefile = process.argv[2].toString();

var buf = fs.readFile(process.argv[2], 'utf8', function(err,data){
    //var str = data.toString();
    if (err) throw err;
    var arr = data.split("\n");
    console.log(arr.length - 1);
});
