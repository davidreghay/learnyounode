var fs = require ('fs');
module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if(err) {
			callback(err);
		} else {
			var result = [];
			for(var i = 0; i < list.length; i++) {
				if (list[i].split('.')[1] === ext) {
					result.push(list[i]);
				}
			}
			callback(null, result);
		}
	})
}