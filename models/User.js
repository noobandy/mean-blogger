var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
	username : {
		type : String,
		required : true,
		match : /[a-zA-Z0-9_]{6,}/
	},
	password : {
		type : String,
		required : true,
		match : /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
		select : false
	},
	emailId : {
		type : String,
		required : true
	},
	profile : {
		avatar : {
			type : String
		}
	}
});

UserSchema.statics.findByUsername = function(username, cb) {
	this.find({"username" : username}, function(err, docs) {
		if(err) cb(err);
		if(docs.length > 0) {
			cb(null, docs[0]);
		} else {
			cb(null, null);
		}
	});
};

UserSchema.methods.checkPassword = function(password, cb) {
	User.find({"username" : this.username}).select("+password").exec(function(err, user) {
		if(err) cb(err);

		//console.log(user);

		cb(null, user.password === password);
	});
};

var User = mongoose.model("User", UserSchema);

module.exports = User;