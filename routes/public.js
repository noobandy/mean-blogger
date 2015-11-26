var express = require('express');
var router = express.Router();
var path = require("path");
var User = require(path.join(__dirname, "../models/User"));
var Blog = require(path.join(__dirname, "../models/Blog"));
var Post = require(path.join(__dirname, "../models/Post"));


router.get("/users/:username", function(req, res, next) {
	User.findByUsername(req.params.username, function(err, user) {
		if(err) next(err);

		if(user === null) {
			next("route");
		} else {
			res.json(user);
		}
	});
});


router.get("/users/:username/blog", function(req, res, next) {
	Blog.findByUsername(req.params.username, function(err, blog) {
		if(err) next(err);

		if(blog === null) {
			next("route");
		} else {
			res.json(blog);
		}
	});
});

router.get("/user/:username/blog/posts", function(req, res, next) {
	Blog.findByUsername(req.params.username, function(err, blog) {
		if(err) next(err);

		Post.findByBlog(blog,null, function(err, posts) {
			if(err) next(err);

			res.json(posts);
		});
	});
});


module.exports = router;