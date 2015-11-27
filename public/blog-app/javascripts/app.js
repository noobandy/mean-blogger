"use strict";

var blogApp = angular.module("blogApp", ["ngResource","ui.router","LocalStorageModule",
	"pascalprecht.translate", "angular-loading-bar"]);

blogApp.config(["localStorageServiceProvider",
	function(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix("blogApp");
	}]);

blogApp.config(["cfpLoadingBarProvider", function(cfpLoadingBarProvider) {
	cfpLoadingBarProvider.spinnerTemplate = '<div id="pluswrap">\
	<div class="plus">\
	<img src="/public/blog-app/images/loader.gif">\
	</div>\
	</div>';

}]);


blogApp.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		files: [{
			prefix: '/public/blog-app/languages/',
			suffix: '.json'
		}]
	});
	$translateProvider.preferredLanguage('en');
	$translateProvider.fallbackLanguage('en');
}]);