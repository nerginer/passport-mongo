
// grab the things we need
var mongoose = require('mongoose');


// the schema is useless so far
// we need to create a model using it
module.exports  = mongoose.model('myObj', {
	id: String,
	name: String,
	filePath: String,
	size: String,
	imagePath: String
});

