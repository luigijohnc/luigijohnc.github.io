'use strict';

/**
 * @ngdoc overview
 * @name fileApp
 * @description
 * # fileApp
 *
 * Main module of the application.
 */
angular
  .module('fileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
