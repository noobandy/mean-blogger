"use strict";

var indexApp = angular.module("indexApp", ["ngResource","ui.router","LocalStorageModule",
	"pascalprecht.translate", "angular-loading-bar"]);

indexApp.config(["localStorageServiceProvider",
	function(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix("indexApp");
	}]);


indexApp.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		files: [{
			prefix: '/public/index-app/languages/',
			suffix: '.json'
		}]
	});
	$translateProvider.preferredLanguage('en');
	$translateProvider.fallbackLanguage('en');
}]);