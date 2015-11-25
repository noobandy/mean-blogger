var express = require('express');
var router = express.Router();
var path = require("path");
var User = require(path.join(__dirname, "../models/User"));

router.post("/users", function(req, res, next) {
	var user = new User(req.body);

	user.save(function(err, user) {
		if(err) next(err);

		res.json(user);
	});
});

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

module.exports = router;
