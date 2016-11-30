const angular = require('angular');
require('./main.css');

const app = angular.module('editor', []);

app.controller('main', function($scope) {
	$scope.fonts = ['domo-arigato', 'master-chief', 'not-the-droids'];
	$scope.font = 'boring';
	$scope.message = '';
});