"use strict"

var blogApp = angular.module("blogApp");

blogApp.controller("BlogController",["$scope","$state", function($scope, $state) {

	$scope.search = function(searchText) {
		$state.go("blog.posts", {
			searchText : searchText,
			category : null,
			tag : null,
			startDate : null,
			endDate : null
		});
	};

	$scope.categories = [{
		name : "Category1",
		count : 10
	}, {
		name : "Category2",
		count : 10
	}, {
		name : "Category3",
		count : 10
	}, {
		name : "Category4",
		count : 10
	}, {
		name : "Category5",
		count : 10
	}, {
		name : "Category6",
		count : 10
	}, {
		name : "Category7",
		count : 10
	}];

	var midCategory = Math.ceil($scope.categories.length / 2);

	$scope.categoryListOne = $scope.categories.slice(0, midCategory);

	$scope.categoryListTwo =  $scope.categories.slice(midCategory, $scope.categories.length);

	$scope.tags = [{
		name : "tag1",
		count : 10
	}, {
		name : "tag1",
		count : 10
	}, {
		name : "tag1",
		count : 10
	}, {
		name : "tag1",
		count : 10
	}, {
		name : "tag1",
		count : 10
	}, {
		name : "tag1",
		count : 10
	}];

	var midTag = Math.ceil($scope.tags.length / 2);

	$scope.tagListOne = $scope.tags.slice(0, midTag);

	$scope.tagListTwo =  $scope.tags.slice(midTag, $scope.tags.length);


	$scope.archivetree = {
		label : "Archive",
		children : [{
			label : "2014 (100)",
			children : [{
				label : "Jan (10)",
				posts : []
			}, {
				label : "Feb (10)",
				posts : []
			}, {
				label : "Mar (8)",
				posts : []
			}, {
				label : "Apr (8)",
				posts : []
			}, {
				label : "June (8)",
				posts : []
			}, {
				label : "July (8)",
				posts : []
			}, {
				label : "Aug (8)",
				posts : []
			}, {
				label : "Sep (8)",
				posts : []
			}, {
				label : "Nov (8)",
				posts : []
			}, {
				label : "Dec (8)",
				posts : []
			}]
		}, {
			label : "2015 (100)",
			children : [{
				label : "Jan (10)",
				posts : []
			}, {
				label : "Feb (10)",
				posts : []
			}, {
				label : "Mar (8)",
				posts : []
			}, {
				label : "Apr (8)",
				posts : []
			}, {
				label : "June (8)",
				posts : []
			}, {
				label : "July (8)",
				posts : []
			}, {
				label : "Aug (8)",
				posts : []
			}, {
				label : "Sep (8)",
				posts : []
			}, {
				label : "Nov (8)",
				posts : []
			}, {
				label : "Dec (8)",
				posts : []
			}]
		}]
	};

	$scope.popularPosts = [{

	}];
}]);

blogApp.controller("PostListController",["$scope", function($scope) {
	$scope.posts = [{
		title : "Blog Post Title",
		slug : "slug1",
		postedAt : new Date(),
		excerpt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
	}, {
		title : "Blog Post Title",
		slug : "slug1",
		postedAt : new Date(),
		excerpt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
	}, {
		title : "Blog Post Title",
		slug : "slug1",
		postedAt : new Date(),
		excerpt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
	}, {
		title : "Blog Post Title",
		slug : "slug1",
		postedAt : new Date(),
		excerpt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
	}, {
		title : "Blog Post Title",
		slug : "slug1",
		postedAt : new Date(),
		excerpt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
	}, {
		title : "Blog Post Title",
		slug : "slug1",
		postedAt : new Date(),
		excerpt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
	}];
}]);


blogApp.controller("PostController",["$scope", function($scope) {

}]);



blogApp.controller("AboutController",["$scope", function($scope) {

}]);



blogApp.controller("ContactController",["$scope", function($scope) {

}]);