var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
	username : {
		type : String
	},
	password : {
		type : String
	},
	emailId : {
		type : String
	},
	profile : {
		avatar : {
			type : String
		}
	}
});

var User = mongoose.model("User", UserSchema);

module.exports = User;