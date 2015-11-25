var express = require("express");
var router = express.Router();
var path = require("path");
var Blog = require(path.join(__dirname, "../models/Blog"));
var User = require(path.join(__dirname, "../models/User"));

router.post("/blog", function(req, res, next) {

});

router.put("/blog", function(req, res, next) {

});

router.get("/blog", function(req, res, next) {
	Blog.findByUsername(req.params.username, function(err, blog) {
		if(err) next(err);

		if(blog === null) {
			next("route");
		} else {
			res.json(blog);
		}
	});
});

module.exports = router;