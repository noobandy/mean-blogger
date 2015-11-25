var express = require("express");
var router = express.Router();

var path = require("path");

var User = require(path.join(__dirname, "../models/User"));

router.post("/login/authenticate", function(req, res, next) {
	User.findByUsername(req.body.username, function(err, user) {
		if(err) next(err);

		var result = {
			hasError : false,
			authenticatedUser : null,
			errors : []
		};

		if(user !== null) {
			user.checkPassword(req.body.password, function(err, matched) {
				if(err) next(err);

				if(matched) {
					result.authenticatedUser = user;
				} else {
					result.hasError = true;
			 		result.errors.push({password : "wrong password"});
				}

				res.json(result);
			});
		} else {
			result.hasError = true;
		 	result.errors.push({username : "user not found"});
		 	res.json(result);
		}

		
	});
});

module.exports = router;


