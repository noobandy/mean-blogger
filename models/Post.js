var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;
var path = require("path");
var slugify = require(path.join(__dirname, "../utils/slugify"));

var PostSchema = mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	slug : {
		type : String
	},
	content : {
		type : String,
		required : true
	},
	blog : {
		type : ObjectId,
		ref : "Blog",
		required : true
	}

});

var Post = mongoose.model("Post", PostSchema);

PostSchema.pre("save", function(next){

	var slug = slugify(this.title);
	
	var that = this;
	
	Post.count({ $and : [{"blog" : this.blog }, {"slug" : { $regex : "^"+slug } }]},
		function(err, count) {

		if(err) next(err);

		if(count > 0){
			slug = slug + "-" + count;
		} 

		that.slug = slug;
		
		next();
	});

});


PostSchema.statics.findByBlog = function(blog, criteria, cb) {
	Post.find({"blog" : blog._id}, function(err, docs) {
		if(err) cb(err);

		cb(null, docs);
	});
};


module.exports = Post;