"use strict";

var indexApp = angular.module("indexApp", ["ngResource","ui.router","LocalStorageModule",
	"pascalprecht.translate", "angular-loading-bar"]);

indexApp.config(["localStorageServiceProvider",
	function(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix("indexApp");
	}]);

indexApp.config(["cfpLoadingBarProvider", function(cfpLoadingBarProvider) {
	cfpLoadingBarProvider.spinnerTemplate = '<div id="pluswrap">\
	<div class="plus">\
	<img src="/public/index-app/images/loader.gif">\
	</div>\
	</div>';

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