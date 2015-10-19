// Compiled by ClojureScript 1.7.48 {}
goog.provide('bankapp.controllers.main');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
bankapp.controllers.main.serverurl = "http://192.168.2.100:3000/";
bankapp.controllers.main.global_hub = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
bankapp.controllers.main.starter_controllers = angular.module("starter.controllers",[]);
bankapp.controllers.main.starter_MapService = ["$http",(function ($http){
var G__9909 = {};
(G__9909["getbanksbytype"] = ((function (G__9909){
return (function (type){
return $http.post([cljs.core.str(bankapp.controllers.main.serverurl),cljs.core.str("getbanksbytype")].join(''),(((type == null))?null:(function (){var G__9913 = {};
(G__9913["type"] = type);

return G__9913;
})())).then(((function (G__9909){
return (function (response){
return response;
});})(G__9909))
);
});})(G__9909))
);

return G__9909;
})];

angular.module("starter").service("MapService",bankapp.controllers.main.starter_MapService);
bankapp.controllers.main.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout","MapService",(function ($scope,$ionicModal,$timeout,MapService){
var o_SHARP__9925 = $scope;
(o_SHARP__9925["loginData"] = cljs.core.PersistentArrayMap.EMPTY);


$ionicModal.fromTemplateUrl("templates/login.html",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),$scope], null))).then((function (modal){
var o_SHARP_ = $scope;
(o_SHARP_["modal"] = modal);

return o_SHARP_;
}));

var o_SHARP__9926 = $scope;
(o_SHARP__9926["getbanks"] = ((function (o_SHARP__9926){
return (function (type){
(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["marker"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(120)], null)),(function (){var G__9917 = {};
(G__9917["icon"] = (function (){var obj_SHARP___$1 = (L["AwesomeMarkers"]);
var fn_SHARP___$1 = (obj_SHARP___$1["icon"]);
return fn_SHARP___$1.call(obj_SHARP___$1,(function (){var G__9921 = {};
(G__9921["icon"] = "location");

(G__9921["prefix"] = "ion");

return G__9921;
})());
})());

return G__9917;
})());
})().addTo(cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map")).bindPopup("hello jack");

return MapService.getbanksbytype(type).then(((function (o_SHARP__9926){
return (function (response){
return bankapp.controllers.main.makemark.call(null,cljs.core.first.call(null,(response["data"])));
});})(o_SHARP__9926))
);
});})(o_SHARP__9926))
);


var o_SHARP__9927 = $scope;
(o_SHARP__9927["closeLogin"] = ((function (o_SHARP__9927){
return (function (){
return ($scope["modal"]).hide();
});})(o_SHARP__9927))
);


var o_SHARP__9928 = $scope;
(o_SHARP__9928["login"] = ((function (o_SHARP__9928){
return (function (){
return ($scope["modal"]).show();
});})(o_SHARP__9928))
);


var o_SHARP_ = $scope;
(o_SHARP_["doLogin"] = ((function (o_SHARP_){
return (function (){
return $timeout.call(null,((function (o_SHARP_){
return (function (){
return $scope.closeLogin();
});})(o_SHARP_))
,(1000));
});})(o_SHARP_))
);

return o_SHARP_;
})];

angular.module("starter.controllers").controller("AppCtrl",bankapp.controllers.main.starter_controllers_AppCtrl);
bankapp.controllers.main.starter_controllers_PlaylistsCtrl = ["$scope",(function ($scope){
var o_SHARP_ = $scope;
(o_SHARP_["playlists"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reggae",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chill",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Dubstep",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Indie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Rap",new cljs.core.Keyword(null,"id","id",-1388402092),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Cowbell",new cljs.core.Keyword(null,"id","id",-1388402092),(6)], null)], null)));

return o_SHARP_;
})];

angular.module("starter.controllers").controller("PlaylistsCtrl",bankapp.controllers.main.starter_controllers_PlaylistsCtrl);
bankapp.controllers.main.starter_controllers_PlaylistCtrl = ["$scope","$stateParams",(function ($scope,$stateParams){
return null;
})];

angular.module("starter.controllers").controller("PlaylistCtrl",bankapp.controllers.main.starter_controllers_PlaylistCtrl);
bankapp.controllers.main.starter_controllers_mapCtrl = ["$scope","$stateParams",(function ($scope,$stateParams){
cljs.core.println.call(null,"map");

cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"map",(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["map"]);
return fn_SHARP_.call(obj_SHARP_,"map",(function (){var G__9929 = {};
(G__9929["zoomControl"] = false);

return G__9929;
})());
})().setView([30.00641,120.580176],(13)));

var bankmap = cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map");
(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,"http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",(function (){var G__9933 = {};
(G__9933["subdomains"] = "012345");

return G__9933;
})());
})().addTo(bankmap);

return (function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str("http://t{s}.tianditu.com/cva_w/wmts?"),cljs.core.str("SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"),cljs.core.str("&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}")].join(''),(function (){var G__9937 = {};
(G__9937["subdomains"] = "012345");

return G__9937;
})());
})().addTo(bankmap);
})];

angular.module("starter.controllers").controller("mapCtrl",bankapp.controllers.main.starter_controllers_mapCtrl);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");
bankapp.controllers.main.makemark = (function bankapp$controllers$main$makemark(item){
item.loc.coordinates.reverse();

var redMarker = L.AwesomeMarkers.icon((function (){var G__9953 = {};
(G__9953["iconColor"] = "black");

(G__9953["icon"] = "location");

(G__9953["prefix"] = "ion");

return G__9953;
})());
return L.marker(item.loc.coordinates,(function (){var G__9957 = {};
(G__9957["icon"] = (function (){var obj_SHARP_ = (L["AwesomeMarkers"]);
var fn_SHARP_ = (obj_SHARP_["icon"]);
return fn_SHARP_.call(obj_SHARP_,(function (){var G__9961 = {};
(G__9961["icon"] = "location");

(G__9961["prefix"] = "ion");

return G__9961;
})());
})());

return G__9957;
})()).addTo(cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map")).bindPopup("A pretty CSS3 popup.<br> Easily customizable").openPopup();
});
bankapp.controllers.main.foo = (function bankapp$controllers$main$foo(a,b){
return (a * b);
});
bankapp.controllers.main.arr = (function bankapp$controllers$main$arr(){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reggae",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chill",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Dubstep",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Indie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Rap",new cljs.core.Keyword(null,"id","id",-1388402092),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Cowbell",new cljs.core.Keyword(null,"id","id",-1388402092),(6)], null)], null));
});

//# sourceMappingURL=main.js.map