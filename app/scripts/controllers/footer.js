'use strict';

/**
 * @ngdoc function
 * @name powderApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the powderApp
 */
angular.module('powderApp')
  .controller('FooterCtrl', ['$scope', '$location', function ($scope, $location) {
      $scope.goTo = function(url) {
           $location.path(url);
      };
      $scope.menuShow = false;
  }]); 
