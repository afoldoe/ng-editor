const angular = require('angular');
require('./main.css');

const app = angular.module('editor', []);

app.controller('main', function($scope) {
	$scope.fonts = ['Domo Arigato', 'Master Chief', 'Not the Droids'];
	$scope.message = '';
});