var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var BlogSchema = mongoose.Schema({
	name : {
		type : String
	},
	owner : {
		type : ObjectId,
		ref : "User"
	}
});

var Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;