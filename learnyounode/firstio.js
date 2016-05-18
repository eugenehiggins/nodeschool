/**
 * Created by ehigginsiii on 3/4/16.
 */

var fs = require('fs');

var thefile = process.argv[2].toString();

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arr = str.split("\n");
console.log(arr.length - 1);