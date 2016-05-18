var total = 0;
process.argv.forEach(function(val, index, array){

    if (index > 1) {
        //console.log("index: " + index);
        //console.log("val: " + val);
        total += Number(val);
        //console.log("total: " + total);
        //console.log("============= ");
    }

});


console.log (total);

