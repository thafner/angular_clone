'use strict';

/**
 * @ngdoc function
 * @name powderApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the powderApp
 */
angular.module('powderApp')
  .controller('ContentCtrl',['$scope', '$location', 'dataFactory', '$route', '$routeParams', '$sanitize', function ($scope, $location, dataFactory, $route, $routeParams, $sanitize) {
      //Get the parameter from the URL to use as our key
      var sectionParam = $routeParams.section
      var section = dataFactory.getSectionByIndex(sectionParam);
      
      $scope.sectionTitle = section.title;
      $scope.sectionContent = section.content;
      
  }]);
