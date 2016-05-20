var fillerData = {
  'home' : '<span>Home Title</span>',
  'content' : 'Home Content',
  'next' : 0,
  'sections' : [
    {
      'title' : "Content 1 Title",
      'content' : 'Content 1 Content',
      'next' : 1,
      'prev' : 'home',
      'sub' : [
        
      ]
    },
    {
      'title' : "Content 2 Title",
      'content' : 'Content 2 Content',
      'next' : 2,
      'prev' : 0
    }
  ]
}
angular.module('powderApp.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/content.html",
    "<div ng-controller=ContentCtrl><div class=section ng-swipe-left=\"goToPage('#/sect/0')\"><h2 ng-bind-html=sectionTitle>{{ sectionTitle }} test</h2><p ng-bind-html=sectionContent>{{ sectionContent }}</p><img src=images/yeoman.png alt=\"\"></div></div>");
  $templateCache.put("views/footer.html",
    "<nav ng-controller=FooterCtrl><ul><li><a ng-click=\"menuShow = !menuShow\">Menu</a><ul ng-show=menuShow id=nav-menu><li class=round-1><a ng-click=\"goTo('/sect/0')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-2><a ng-click=\"goTo('/sect/1')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-3><a ng-click=\"goTo('/sect/2')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-4><a ng-click=\"goTo('/sect/3')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-5><a ng-click=\"goTo('/sect/4')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-6><a ng-click=\"goTo('/sect/5')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-7><a ng-click=\"goTo('/sect/6')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-8><a ng-click=\"goTo('/sect/7')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-9><a ng-click=\"goTo('/sect/8')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-10><a ng-click=\"goTo('/sect/9')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li></ul></li><li><a ng-click=\"goTo('/sect/1')\">Important Safety Information</a></li><li><a ng-click=\"goTo('/sect/2')\">Prescribing Information</a></li><li><a ng-click=\"goTo('/sect/3')\">Instructions For Use</a></li><li><a ng-click=\"goTo('/sect/4')\">References</a></li></ul></nav>");
  $templateCache.put("views/home.html",
    "<div ng-controller=HomeCtrl><div id=home ng-show=!showActions ng-swipe-left=goNext()><h2 ng-bind-html=homeTitle>{{ homeTitle }}</h2><div ng-bind-html=homeContent>{{ homeContent }}</div></div><a ng-click=\"goTo('/sect/1')\">test</a><p><a href=# target=_blank>blank test</a></p></div>");
}]);

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

angular.module('powderApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/content.html',
    "<div ng-controller=\"ContentCtrl\"> <div class=\"section\" ng-swipe-left=\"goToPage('#/sect/0')\"> <h2 ng-bind-html=\"sectionTitle\">{{ sectionTitle }} test</h2> <p ng-bind-html=\"sectionContent\">{{ sectionContent }}</p> <img src=\"images/yeoman.png\" alt=\"\"> </div> </div>"
  );


  $templateCache.put('views/footer.html',
    "<nav ng-controller=\"FooterCtrl\"> <ul> <li> <a ng-click=\"menuShow = !menuShow\">Menu</a> <ul ng-show=\"menuShow\" id=\"nav-menu\"> <li class=\"round-1\"><a ng-click=\"goTo('/sect/0')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-2\"><a ng-click=\"goTo('/sect/1')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-3\"><a ng-click=\"goTo('/sect/2')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-4\"><a ng-click=\"goTo('/sect/3')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-5\"><a ng-click=\"goTo('/sect/4')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-6\"><a ng-click=\"goTo('/sect/5')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-7\"><a ng-click=\"goTo('/sect/6')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-8\"><a ng-click=\"goTo('/sect/7')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-9\"><a ng-click=\"goTo('/sect/8')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> <li class=\"round-10\"><a ng-click=\"goTo('/sect/9')\" class=\"round green\"><span class=\"menu-icon\"></span><span class=\"link\">test</span></a></li> </ul> </li> <li><a ng-click=\"goTo('/sect/1')\">Important Safety Information</a></li> <li><a ng-click=\"goTo('/sect/2')\">Prescribing Information</a></li> <li><a ng-click=\"goTo('/sect/3')\">Instructions For Use</a></li> <li><a ng-click=\"goTo('/sect/4')\">References</a></li> </ul> </nav>"
  );


  $templateCache.put('views/home.html',
    "<div ng-controller=\"HomeCtrl\"> <div id=\"home\" ng-show=\"!showActions\" ng-swipe-left=\"goNext()\"> <h2 ng-bind-html=\"homeTitle\">{{ homeTitle }}</h2> <div ng-bind-html=\"homeContent\">{{ homeContent }}</div> </div> <a ng-click=\"goTo('/sect/1')\">test</a> <p><a href=\"#\" target=\"_blank\">blank test</a></p> </div>"
  );

}]);
