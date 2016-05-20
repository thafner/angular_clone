'use strict';

/**
 * @ngdoc function
 * @name powderApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the powderApp
 */
angular.module('powderApp')
  .controller('HomeCtrl',['$scope', 'dataFactory', '$location', function ($scope, dataFactory, $location) {
      $scope.homeTitle = dataFactory.getHomeTitle();
      $scope.homeContent = dataFactory.getHomeContent();
      var next = dataFactory.getHomeNext();
      
      $scope.goTo = function(url) {
           $location.path(url);
      };       
      $scope.goNext = function() {
        $location.path('/sect/' + next);
      };
     
  }]); 

