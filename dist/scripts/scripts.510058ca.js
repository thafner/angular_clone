var fillerData={home:"<span>Home Title</span>",content:"Home Content",next:0,sections:[{title:"Content 1 Title",content:"Content 1 Content",next:1,prev:"home",sub:[]},{title:"Content 2 Title",content:"Content 2 Content",next:2,prev:0}]};angular.module("powderApp.templates",[]).run(["$templateCache",function(a){"use strict";a.put("views/content.html",'<div ng-controller=ContentCtrl><div class=section ng-swipe-left="goToPage(\'#/sect/0\')"><h2 ng-bind-html=sectionTitle>{{ sectionTitle }} test</h2><p ng-bind-html=sectionContent>{{ sectionContent }}</p><img src=images/yeoman.8cb970fb.png alt=""></div></div>'),a.put("views/footer.html",'<nav ng-controller=FooterCtrl><ul><li><a ng-click="menuShow = !menuShow">Menu</a><ul ng-show=menuShow id=nav-menu><li class=round-1><a ng-click="goTo(\'/sect/0\')" class="round green"><span class=menu-icon></span><span class=link>PKU</span></a></li><li class=round-2><a ng-click="goTo(\'/sect/1\')" class="round green"><span class=menu-icon></span><span class=link>Guidelines</span></a></li><li class=round-3><a ng-click="goTo(\'/sect/2\')" class="round green"><span class=menu-icon></span><span class=link>Kuvan</span></a></li><li class=round-4><a ng-click="goTo(\'/sect/3\')" class="round green"><span class=menu-icon></span><span class=link>Powder 500 mg</span></a></li><li class=round-5><a ng-click="goTo(\'/sect/4\')" class="round green"><span class=menu-icon></span><span class=link>Efficacy</span></a></li><li class=round-6><a ng-click="goTo(\'/sect/5\')" class="round green"><span class=menu-icon></span><span class=link>Safety</span></a></li><li class=round-7><a ng-click="goTo(\'/sect/6\')" class="round green"><span class=menu-icon></span><span class=link>Pediatric Data</span></a></li><li class=round-8><a ng-click="goTo(\'/sect/7\')" class="round green"><span class=menu-icon></span><span class=link>Dosing</span></a></li><li class=round-9><a ng-click="goTo(\'/sect/8\')" class="round green"><span class=menu-icon></span><span class=link>PCCs</span></a></li><li class=round-10><a ng-click="goTo(\'/sect/9\')" class="round green"><span class=menu-icon></span><span class=link>BPPS</span></a></li></ul></li><li><a ng-click="goTo(\'/sect/1\')">Important Safety Information</a></li><li><a ng-click="goTo(\'/sect/2\')">Prescribing Information</a></li><li><a ng-click="goTo(\'/sect/3\')">Instructions For Use</a></li><li><a ng-click="goTo(\'/sect/4\')">References</a></li></ul></nav>'),a.put("views/home.html","<div ng-controller=HomeCtrl><div id=home ng-show=!showActions ng-swipe-left=goNext()><h2 ng-bind-html=homeTitle>{{ homeTitle }}</h2><div ng-bind-html=homeContent>{{ homeContent }}</div></div><a ng-click=\"goTo('/sect/1')\">test</a><p><a href=# target=_blank>blank test</a></p></div>")}]),angular.module("powderApp",["ngAnimate","ngResource","ngRoute","ngTouch","ngSanitize","powderApp.templates"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/sect/:section",{templateUrl:"views/content.html"})}]),angular.module("powderApp").controller("ContentCtrl",["$scope","$location","dataFactory","$route","$routeParams","$sanitize",function(a,b,c,d,e,f){var g=e.section,h=c.getSectionByIndex(g);a.sectionTitle=h.title,a.sectionContent=h.content}]),angular.module("powderApp").controller("HomeCtrl",["$scope","dataFactory","$location",function(a,b,c){a.homeTitle=b.getHomeTitle(),a.homeContent=b.getHomeContent();var d=b.getHomeNext();a.goTo=function(a){c.path(a)},a.goNext=function(){c.path("/sect/"+d)}}]),angular.module("powderApp").controller("FooterCtrl",["$scope","$location",function(a,b){a.goTo=function(a){b.path(a)},a.menuShow=!1}]),angular.module("powderApp").factory("dataFactory",function(){var a={data:fillerData,getAllData:function(){return this.data},getHomeTitle:function(){return this.data.home},getHomeContent:function(){return this.data.content},getHomeNext:function(){return this.data.next},getSectionByIndex:function(a){return this.data.sections[a]},getNext:function(){return this.data.sections[key].next},getPrev:function(){return this.data.sections[key].prev},getSubNext:function(){}};return a}),angular.module("powderApp").run(["$templateCache",function(a){"use strict";a.put("views/content.html",'<div ng-controller="ContentCtrl"> <div class="section" ng-swipe-left="goToPage(\'#/sect/0\')"> <h2 ng-bind-html="sectionTitle">{{ sectionTitle }} test</h2> <p ng-bind-html="sectionContent">{{ sectionContent }}</p> <img src="images/yeoman.8cb970fb.png" alt=""> </div> </div>'),a.put("views/footer.html",'<nav ng-controller="FooterCtrl"> <ul> <li> <a ng-click="menuShow = !menuShow">Menu</a> <ul ng-show="menuShow" id="nav-menu"> <li class="round-1"><a ng-click="goTo(\'/sect/0\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-2"><a ng-click="goTo(\'/sect/1\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-3"><a ng-click="goTo(\'/sect/2\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-4"><a ng-click="goTo(\'/sect/3\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-5"><a ng-click="goTo(\'/sect/4\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-6"><a ng-click="goTo(\'/sect/5\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-7"><a ng-click="goTo(\'/sect/6\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-8"><a ng-click="goTo(\'/sect/7\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-9"><a ng-click="goTo(\'/sect/8\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> <li class="round-10"><a ng-click="goTo(\'/sect/9\')" class="round green"><span class="menu-icon"></span><span class="link">test</span></a></li> </ul> </li> <li><a ng-click="goTo(\'/sect/1\')">Important Safety Information</a></li> <li><a ng-click="goTo(\'/sect/2\')">Prescribing Information</a></li> <li><a ng-click="goTo(\'/sect/3\')">Instructions For Use</a></li> <li><a ng-click="goTo(\'/sect/4\')">References</a></li> </ul> </nav>'),a.put("views/home.html",'<div ng-controller="HomeCtrl"> <div id="home" ng-show="!showActions" ng-swipe-left="goNext()"> <h2 ng-bind-html="homeTitle">{{ homeTitle }}</h2> <div ng-bind-html="homeContent">{{ homeContent }}</div> </div> <a ng-click="goTo(\'/sect/1\')">test</a> <p><a href="#" target="_blank">blank test</a></p> </div>')}]);