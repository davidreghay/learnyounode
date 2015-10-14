var filter = require ('./filter.js')
filter(process.argv[2], process.argv[3], function(err, data) {
	if(err) {
		console.log("Error: " + err.message);
	} else {
		for(item in data) {
			console.log(data[item]);
		}
	}
})