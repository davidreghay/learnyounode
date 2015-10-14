// Returns YYYY-MM-DD hh:mm

var net = require('net')
var server = net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();

    socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n');
});

server.listen(+process.argv[2]);

