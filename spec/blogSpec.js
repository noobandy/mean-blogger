var path = require("path");
var Blog = require(path.join(__dirname,"../models/Blog"));

describe("Blog", function() {
	describe("#findByUsername", function(){
		it("Should return empty list", function(done) {
			Blog.findByUsername("anandm", function(err, docs) {
				if(err) done(err);

				expect(docs.length).toBe(0);
				done();
			});
		});
	});
});