/**
 * Created by ehigginsiii on 3/4/16.
 */
var fs = require('fs');

module.exports = function (dirname,ext,callback) {


    fs.readdir(dirname, function(err,files){
        if (err) return callback(err);

        //var filelist = [];
        function matchExt(val) {

            return val.split('.')[1] === ext;
        }
        filelist = files.filter(matchExt);

        //files.forEach(function(file){
        //    fileArr = file.split('.');
        //    if (fileArr[1] === ext) {
        //        filelist.push(file);
        //    }
        //
        //});
        return callback(null, filelist);

    });
}