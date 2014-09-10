"use strict";angular.module("benchmarkAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","google-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"homeCtrl"}).when("/about",{templateUrl:"views/benchmark_map.html",controller:"BenchmarkMapCtrl"}).when("/login",{templateUrl:"admin/login.html",controller:"LoginCtrl"}).when("/search/:district",{templateUrl:"views/search.html",controller:"SearchCtrl"}).when("/contact",{templateUrl:"views/contact.html"}).when("/details",{templateUrl:"views/details.html"}).when("/sell",{templateUrl:"views/sell.html"}).otherwise({redirectTo:"/"})}]),angular.module("benchmarkAngularApp").controller("homeCtrl",["$scope",function(){}]),angular.module("benchmarkAngularApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("benchmarkAngularApp").controller("BenchmarkMapCtrl",["$scope",function(a){a.changeRoute=function(){console.log("Fetching URL")},a.mapOption={attr:{fill:"#e9e5dc",stroke:"none","stroke-opacity":"1","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-width":"0.75","stroke-dasharray":"none"},font:{"font-size":12,fill:"#666",stroke:"none","font-family":"Arial,Helvetica,sans-serif",opacity:"0.9"},svgArray:Egypt,svgWidth:"2560",svgHeight:"1440",type:"map"},a.mapLinks={attr:{fill:"#b28960",stroke:"#fff ",opacity:.1,"stroke-opacity":"1","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-width":"2","stroke-dasharray":"none"},font:{"font-size":50,fill:"#666",stroke:"none","font-family":"Arial,Helvetica,sans-serif",opacity:"0.9"},svgArray:LocationsLinks,svgWidth:"2560",svgHeight:"1440",type:"links"}}]),angular.module("benchmarkAngularApp").directive("raphael",["$location","$rootScope",function(a,b){return{restrict:"E",scope:{options:"="},link:function(c,d){var e=new Raphael(d.attr("id"),"100%",$(window).outerHeight()),f=c.options.attr,g=c.options.font,h=c.options.svgArray,i=c.options.type,j=c.options.svgWidth,k=c.options.svgHeight,l={};e.setViewBox(0,0,j,k,!0);var m=function(a,b,c,d,e,f){var g=a.paper.text(c,d,b).attr(f);return g.node.id=e,g.toFront(),g};for(var n in h){var o=h[n],p=o.split(":"),q=p[3];l[n]=e.path(q).attr(f).toBack(),m(l[n],p[0],p[1],p[2],n,g),"links"===i&&(l[n].linkTarget=p[0].replace(/\s+/g,"-").toLowerCase(),function(c){var d=c[0];d.style.cursor="pointer",d.onmouseover=function(){c.toFront(),c.animate({opacity:.5},200),e.safari()},d.onmousedown=function(){b.$apply(function(){a.path("search/"+c.linkTarget)})},d.onmouseout=function(){c.toBack(),c.animate({opacity:.1},200),e.safari()}}(l[n],l))}}}}]),angular.module("benchmarkAngularApp").controller("SearchCtrl",["$scope",function(a){a.searchResult={url:"templates/search-results.html"},a.sideNav={url:"templates/side-nav.html"},a.googleMap={url:"templates/google-map.html"}}]),angular.module("benchmarkAngularApp").controller("SideNavCtrl",["$scope","$rootScope",function(a,b){a.districts=[{name:"New Cairo",maplocation:["30.038075","31.4954073"],projects:[{name:"Hamada",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"North Cost",maplocation:["31.068815","28.22319"],projects:[{name:"Mivida",location:"Heliopolis",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"Red Sea",maplocation:["27.642173","33.86673"],projects:[{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"Zamalek",maplocation:["30.060942","31.219709"],projects:[{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"Zayed",maplocation:["29.994489","31.213531"],projects:[{name:"Hamada",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"Heliopolis",maplocation:["30.090984","31.322709"],projects:[{name:"Hamada",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"Maadi",maplocation:["29.957942","31.260231"],projects:[{name:"Hamada",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]},{name:"Uptown Cairo",maplocation:["30.0248969","31.299603,16"],projects:[{name:"Hamada",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Palm Hills",location:"5th district",properties:"5",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Hecienda",location:"5th district",properties:"15",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Movanpick",location:"5th district",properties:"20",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Sharmofers",location:"5th district",properties:"1",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20},{name:"Mivida",location:"5th district",properties:"25",longlat:["30.048494665174147","31.490614414215088"],zoom:20}]}],a.locationAtMap=function(a,c){b.$broadcast("handleMap",a,c)}}]),angular.module("benchmarkAngularApp").controller("SearchResultCtrl",["$scope",function(){var a=$(".search-results-box");a.css("bottom",-a.height())}]),angular.module("benchmarkAngularApp").controller("GoogleMapProjectsCtrl",["$scope","$rootElement","$location","$timeout",function(a,b,c){google.maps.visualRefresh=!0,a.$on("handleMap",function(b,c,d){d||(d=14),a.map={center:{latitude:c[0],longitude:c[1]},zoom:d}});var d=["north-cost","new-cairo","red-sea","zamalek","zayed","heliopolis","maadi","uptowncairo"],e=["31.068815,28.22319","30.038075,31.4954073","27.642173,33.86673","30.060942,31.219709","29.994489,31.213531","30.090984,31.322709","29.957942,31.260231","30.0248969,31.299603,16"],f=c.path();f=f.substr(1).split("/");var g=e[d.indexOf(f[1])].split(",");a.map={center:{latitude:g[0],longitude:g[1]},zoom:14,bounds:{}},a.options={disableDefaultUI:!1,zoomControlOptions:{style:google.maps.ZoomControlStyle.DEFAULT,position:google.maps.ControlPosition.LEFT_CENTER},mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},zoomControl:!0,mapTypeId:google.maps.MapTypeId.SATELLITE},a.polygons=[{id:1,path:[{latitude:30.048494665174147,longitude:31.490614414215088},{latitude:30.048606107921714,longitude:31.490120887756348},{latitude:30.04850550008017,longitude:31.487964391708374},{latitude:30.04609087669028,longitude:31.487867832183838},{latitude:30.046063015307645,longitude:31.49059295654297},{latitude:30.046118738065047,longitude:31.490743160247803},{latitude:30.046239470598586,longitude:31.490871906280518},{latitude:30.04637877718517,longitude:31.490893363952637},{latitude:30.0480504409427,longitude:31.490871906280518}],stroke:{color:"#6060FB",weight:3},editable:!1,draggable:!1,geodesic:!1,visible:!0,zindex:10,clickable:!0,fill:{color:"#ff0000",opacity:.8}}]}]),angular.module("benchmarkAngularApp").controller("ContactCtrl",["$scope",function(a){a.map={center:{latitude:"31.068815",longitude:"28.22319"},zoom:14,bounds:{}},a.options={disableDefaultUI:!1,zoomControlOptions:{style:google.maps.ZoomControlStyle.DEFAULT,position:google.maps.ControlPosition.LEFT_CENTER},mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},zoomControl:!0,mapTypeId:google.maps.MapTypeId.SATELLITE}}]),angular.module("benchmarkAngularApp").controller("DetailsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("benchmarkAngularApp").controller("SellCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);