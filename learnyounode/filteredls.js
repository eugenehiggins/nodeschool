/**
 * Created by ehigginsiii on 3/4/16.
 */
var fs = require('fs');

fs.readdir(process.argv[2], function(err,files){
    if (err) throw err;

    files.forEach(function(val,index){
        fileArr = val.split('.');
        if (fileArr[1] === process.argv[3]) {
            console.log(val);
        }

    });
});