
var mongoose = require('mongoose');

module.exports = mongoose.model('3Dobject',{
	id: String,
	name: String,
	filePath: String,
	size: String,
	imagePath: String
	
});