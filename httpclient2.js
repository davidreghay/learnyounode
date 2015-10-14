var http = require('http');
//console.log(process.argv[2]);
http.get(process.argv[2], function(response) {
	var result = "";
	response.setEncoding('utf8');
	//console.log(response);
	response.on("data", function (data) {
		result += data;
	});
	response.on("end", function() {
		console.log(result.length);
		console.log(result);
	});
});