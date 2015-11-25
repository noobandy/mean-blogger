var path = require("path");
var Post = require(path.join(__dirname,"../models/Post"));

describe("Post", function() {
	describe("#save", function(){
		it("Should generate slug pre save", function(done) {
			var post = new Post({
				title : "My First Post",
				content : "Some Content",
				blog : "56555263e14960f815608148"
			});

			post.save(function(err, post) {
				if(err) {
					done(err);
				}

				expect(post.slug).toBe("my-first-post");

				done();

			});
		});
	});
});