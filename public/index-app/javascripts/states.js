"use strict";

angular.module("indexApp").config(["$stateProvider", function($stateProvider) {
	$stateProvider.state({
		name : "home",
		url : "/",
		templateUrl : "/public/index-app/templates/home.html",
		controller : "HomeController"
	}).state({
		name : "about",
		url : "/about",
		templateUrl : "/public/index-app/templates/about.html",
		controller : "AboutController"
	}).state({
		name : "contact",
		url : "/contact",
		templateUrl : "/public/index-app/templates/contact.html",
		controller : "ContactController"
	});
}]);