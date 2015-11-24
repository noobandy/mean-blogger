var path = require("path");
var Post = require(path.join(__dirname,"../models/Post"));
var expect = require("chai").expect;
var mongoose = require("mongoose");
var blog = mongoose.Types.ObjectId();
var config = require(path.join(__dirname, "../config/test"));

var db = mongoose.connect(config.db.url, config.db.options).connection;


describe("Post", function() {
	describe(".save", function(){
		it("Should generate slug pre validate", function(done) {
			var post = new Post({
				title : "My First Post",
				content : "Some Content",
				blog : blog
			});

			post.save(function(err, post) {
				if(err) {
					done(err);
				}

				expect(post).to.have.a.property("slug", "my-first-post");

				done();

			});
		});
	});
});