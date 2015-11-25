var path = require("path");
var mongoose = require("mongoose");
var config = require(path.join(__dirname, "../config/test"));

var db = null;


beforeAll(function() {
	console.log("root before all");
	db = mongoose.connect(config.db.url, config.db.options).connection;
});

afterAll(function(){
	console.log("root after all");
});