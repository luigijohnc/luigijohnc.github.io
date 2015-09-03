'use strict';

/**
 * @ngdoc function
 * @name fileApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the fileApp
 */
angular.module('fileApp')
    .controller('IndexCtrl', function($scope) {
        $scope.changeColor = function(page) {
            $scope.backgroundColor = (page!=='base') ? (page + '-bg') : '';
        };
    });
