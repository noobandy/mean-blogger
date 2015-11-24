var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;
var slug = require("slug");

slug.defaults.mode ='rfc3986';
slug.defaults.modes['rfc3986'] = {
    replacement: '-',      // replace spaces with replacement
    symbols: true,         // replace unicode symbols or not
    remove: null,          // (optional) regex to remove characters
    lower: true,           // result in lower case
    charmap: slug.charmap, // replace special characters
    multicharmap: slug.multicharmap // replace multi-characters
};

var PostSchema = mongoose.Schema({
	title : {
		type : String,
		required : "{PATH} is required."
	},
	slug : {
		type : String,
		required : "{PATH} is required."
	},
	content : {
		type : String,
		required : "{PATH} is required."
	},
	blog : {
		type : ObjectId,
		ref : "Blog",
		required : "{PATH} is required."
	}

});

PostSchema.pre("validate", function(next){
	this.slug = slug(this.title);
	next();
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;