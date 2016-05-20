'use strict';

/**
 * @ngdoc service
 * @name powderApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the powderApp.
 */
angular.module('powderApp')
  .factory('dataFactory', function () {
    var dataService = {
      data : fillerData,
      
      getAllData : function() {
        return this.data;
      },      
      getHomeTitle : function(){
        return this.data.home;
      },      
      getHomeContent : function(){
        return this.data.content;
      },
      getHomeNext : function(){
        return this.data.next;
      },
      getSectionByIndex : function(key){
        return this.data.sections[key];
      },
      getNext : function(){
        return this.data.sections[key].next;
      },
      getPrev : function(){
        return this.data.sections[key].prev;
      },
      getSubNext : function(){
        
      }
    };
    return dataService;
  });
