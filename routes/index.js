var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
	res.render("index.jade");
});

router.get("/:username", function(req, res) {
	res.render("blog.jade");
});

router.get("/:username/dashboard", function(req, res) {
	res.render("blog-dashboard.jade");
});

module.exports = router;