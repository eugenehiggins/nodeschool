/**
 * Created by ehigginsiii on 3/10/16.
 */
var net = require('net');

var padNumber = function (num) {
    var padded = ("0" + num).slice(-2);
    return padded;
}

var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = padNumber(date.getMonth() + 1);
    var day = padNumber(date.getDate());
    var hours = padNumber(date.getHours());
    var minutes = padNumber(date.getMinutes());

    var dateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";

    socket.write(dateString);
    socket.end();

    //console.log (dateString);
});

server.listen(process.argv[2], function () {
    console.log('server started');
});