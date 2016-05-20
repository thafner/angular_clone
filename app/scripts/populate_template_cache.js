angular.module('powderApp.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/content.html",
    "<div ng-controller=ContentCtrl><div class=section ng-swipe-left=\"goToPage('#/sect/0')\"><h2 ng-bind-html=sectionTitle>{{ sectionTitle }} test</h2><p ng-bind-html=sectionContent>{{ sectionContent }}</p><img src=images/yeoman.png alt=\"\"></div></div>");
  $templateCache.put("views/footer.html",
    "<nav ng-controller=FooterCtrl><ul><li><a ng-click=\"menuShow = !menuShow\">Menu</a><ul ng-show=menuShow id=nav-menu><li class=round-1><a ng-click=\"goTo('/sect/0')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-2><a ng-click=\"goTo('/sect/1')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-3><a ng-click=\"goTo('/sect/2')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-4><a ng-click=\"goTo('/sect/3')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-5><a ng-click=\"goTo('/sect/4')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-6><a ng-click=\"goTo('/sect/5')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-7><a ng-click=\"goTo('/sect/6')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-8><a ng-click=\"goTo('/sect/7')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-9><a ng-click=\"goTo('/sect/8')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li><li class=round-10><a ng-click=\"goTo('/sect/9')\" class=\"round green\"><span class=menu-icon></span><span class=link>test</span></a></li></ul></li><li><a ng-click=\"goTo('/sect/1')\">Important Safety Information</a></li><li><a ng-click=\"goTo('/sect/2')\">Prescribing Information</a></li><li><a ng-click=\"goTo('/sect/3')\">Instructions For Use</a></li><li><a ng-click=\"goTo('/sect/4')\">References</a></li></ul></nav>");
  $templateCache.put("views/home.html",
    "<div ng-controller=HomeCtrl><div id=home ng-show=!showActions ng-swipe-left=goNext()><h2 ng-bind-html=homeTitle>{{ homeTitle }}</h2><div ng-bind-html=homeContent>{{ homeContent }}</div></div><a ng-click=\"goTo('/sect/1')\">test</a><p><a href=# target=_blank>blank test</a></p></div>");
}]);
