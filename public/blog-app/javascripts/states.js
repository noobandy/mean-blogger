"use strict";

angular.module("blogApp").config(["$stateProvider", "$urlRouterProvider", 
	function($stateProvider, $urlRouterProvider) {
	
	// For any unmatched url, redirect to /
  	$urlRouterProvider.otherwise("/");
/*
  	$urlRouterProvider.when("/category/{category}", ["$stateParams", function($stateParams) {
  		return "/?category="+$stateParams.category;
  	}]);

  	$urlRouterProvider.when("/search/{searchText}", ["$stateParams", function($stateParams) {
  		return "/?searchText="+$stateParams.searchText;
  	}]);

  	$urlRouterProvider.when("/tag/{tag}", ["$stateParams", function($stateParams) {
  		return "/?tag="+$stateParams.tag;
  	}]);
	
	$urlRouterProvider.when("/archive/{startDate}/{endDate}", ["$stateParams", function($stateParams) {
  		return "/?startDate="+$stateParams.startDate+"&endDate="+$stateParams.endDate;
  	}]);*/


	$stateProvider.state({
		name : "blog",
		abstract : true,
		templateUrl : "/public/blog-app/templates/blog.html",
		controller : "BlogController",
	}).state({
		name : "blog.posts",
		url : "/?searchText&category&tag&startDate&endDate",
		templateUrl : "/public/blog-app/templates/post-list.html",
		controller : "PostListController"
	}).state({
		name : "blog.post",
		url : "/{post-slug}",
		templateUrl : "/public/blog-app/templates/post.html",
		controller : "PostController"
	}).state({
		name : "about",
		url : "/about",
		templateUrl : "/public/blog-app/templates/about.html",
		controller : "AboutController"
	}).state({
		name : "contact",
		url : "/contact",
		templateUrl : "/public/blog-app/templates/contact.html",
		controller : "ContactController"
	});
}]);