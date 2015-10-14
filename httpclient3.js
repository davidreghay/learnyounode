var http = require('http');
var getUrl = function(arg, callback, times) {
    http.get(process.argv[arg], function(response) {
        var result = "";
        response.setEncoding('utf8');
        response.on('data', function(data) {
            result += data;
        });
        response.on('end', function() {
            console.log(result);
            if(--times > 0) callback(++arg, callback, times);
        });
    });
}
getUrl(2, getUrl, 3);
