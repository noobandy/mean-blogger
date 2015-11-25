var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;
var path = require("path");
var User = require(path.join(__dirname, "./User"));

var BlogSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	owner : {
		type : ObjectId,
		ref : "User",
		required : true
	}
});

BlogSchema.statics.findByUsername = function(username, cb) {
	User.find({"username" : username}, function(err, docs) {
		if(err) cb(err);

		if(docs.length > 0) {
			Blog.find({"owner" : docs[0].username}, function(err, docs) {
				if(err) cb(err);

				cb(null, docs[0]);
			});
		} else {
			cb(null, []);
		}
	});
};

var Blog = mongoose.model("Blog", BlogSchema);


module.exports = Blog;