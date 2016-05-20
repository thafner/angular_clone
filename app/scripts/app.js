'use strict';

/**
 * @ngdoc overview
 * @name powderApp
 * @description
 * # powderApp
 *
 * Main module of the application.
 */
angular
  .module('powderApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngSanitize',
    'powderApp.templates'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
//        controller: 'HomeCtrl',
//        controllerAs: 'home'
      })
      .when('/sect/:section', {
        templateUrl: 'views/content.html',
//        controller: 'ContentCtrl',
//        controllerAs: 'about'
      });
//      .otherwise({
//        redirectTo: '/'
//      });
  });

