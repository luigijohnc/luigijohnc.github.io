'use strict';

/**
 * @ngdoc function
 * @name fileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fileApp
 */
angular.module('fileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
