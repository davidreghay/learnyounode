var http = require('http');
var count = 0;
var results = [null, null, null];
http.get(process.argv[3], function(response) {
	var result = "";
	response.setEncoding('utf8');
	//console.log(response);
	response.on("data", function (data) {
		result += data;
	});
	response.on("end", function() {
		console.log(result);
		results[0] = result;
		++count;
		if(count === 3) {
			for(var j = 0; j < results.length; j++) {
				console.log(results[j]);
			}
		}
	});
});
/*
http.get(process.argv[4], function(response) {
	var result = "";
	response.setEncoding('utf8');
	//console.log(response);
	response.on("data", function (data) {
		result += data;
	});
	response.on("end", function() {
		console.log(result);
		results[1] = result;
		++count;
		if(count === 3) {
			for(var j = 0; j < results.length; j++) {
				console.log(results[j]);
			}
		}
	});
});
http.get(process.argv[5], function(response) {
	var result = "";
	response.setEncoding('utf8');
	//console.log(response);
	response.on("data", function (data) {
		result += data;
	});
	response.on("end", function() {
		console.log(result);
		results[2] = result;
		++count;
		if(count === 3) {
			for(var j = 0; j < results.length; j++) {
				console.log(results[j]);
			}
		}
	});
});
*/