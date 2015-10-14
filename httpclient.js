var http = require('http');
//console.log(process.argv[2]);
http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	//console.log(response);
	response.on("data", function (data) {
		console.log(data);
	});
});