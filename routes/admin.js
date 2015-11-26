var express = require('express');
var router = express.Router();
var path = require("path");
var User = require(path.join(__dirname, "../models/User"));
var Blog = require(path.join(__dirname, "../models/Blog"));
var Post = require(path.join(__dirname, "../models/Post"));



module.exports = router;