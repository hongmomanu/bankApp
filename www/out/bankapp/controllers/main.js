// Compiled by ClojureScript 1.7.48 {}
goog.provide('bankapp.controllers.main');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
bankapp.controllers.main.serverurl = "http://localhost:3000/";
bankapp.controllers.main.global_hub = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentVector.EMPTY], null));
bankapp.controllers.main.starter_controllers = angular.module("starter.controllers",[]);
bankapp.controllers.main.starter_MapService = ["$http",(function ($http){
var G__11374 = {};
(G__11374["getbanksbytype"] = ((function (G__11374){
return (function (type){
return $http.post([cljs.core.str(bankapp.controllers.main.serverurl),cljs.core.str("getbanksbytype")].join(''),(((type == null))?null:(function (){var G__11378 = {};
(G__11378["type"] = type);

return G__11378;
})())).then(((function (G__11374){
return (function (response){
return response;
});})(G__11374))
);
});})(G__11374))
);

return G__11374;
})];

angular.module("starter").service("MapService",bankapp.controllers.main.starter_MapService);
bankapp.controllers.main.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout","$ionicLoading","MapService",(function ($scope,$ionicModal,$timeout,$ionicLoading,MapService){
var o_SHARP__11388 = $scope;
(o_SHARP__11388["loginData"] = cljs.core.PersistentArrayMap.EMPTY);


$ionicModal.fromTemplateUrl("templates/login.html",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),$scope], null))).then((function (modal){
var o_SHARP_ = $scope;
(o_SHARP_["modal"] = modal);

return o_SHARP_;
}));

var o_SHARP__11389 = $scope;
(o_SHARP__11389["getbanks"] = ((function (o_SHARP__11389){
return (function (type){
cljs.core.println.call(null,"1212122");

cljs.core.dorun.call(null,cljs.core.map.call(null,((function (o_SHARP__11389){
return (function (p1__11382_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map").removeLayer(p1__11382_SHARP_);
});})(o_SHARP__11389))
,cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"markers")));

cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"markers",cljs.core.PersistentVector.EMPTY);

$ionicLoading.show((function (){var G__11384 = {};
(G__11384["template"] = "\u52A0\u8F7D\u4E2D..");

(G__11384["duration"] = (30000));

return G__11384;
})());

return MapService.getbanksbytype(type).then(((function (o_SHARP__11389){
return (function (response){
$ionicLoading.hide();

return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (o_SHARP__11389){
return (function (p1__11383_SHARP_){
return bankapp.controllers.main.makemark.call(null,p1__11383_SHARP_);
});})(o_SHARP__11389))
,(response["data"])));
});})(o_SHARP__11389))
);
});})(o_SHARP__11389))
);


var o_SHARP__11390 = $scope;
(o_SHARP__11390["closeLogin"] = ((function (o_SHARP__11390){
return (function (){
return ($scope["modal"]).hide();
});})(o_SHARP__11390))
);


var o_SHARP__11391 = $scope;
(o_SHARP__11391["login"] = ((function (o_SHARP__11391){
return (function (){
return ($scope["modal"]).show();
});})(o_SHARP__11391))
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
return fn_SHARP_.call(obj_SHARP_,"map",(function (){var G__11392 = {};
(G__11392["zoomControl"] = false);

return G__11392;
})());
})().setView([30.00641,120.580176],(13)));

var bankmap = cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map");
(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,"http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",(function (){var G__11396 = {};
(G__11396["subdomains"] = "012345");

return G__11396;
})());
})().addTo(bankmap);

return (function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str("http://t{s}.tianditu.com/cva_w/wmts?"),cljs.core.str("SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"),cljs.core.str("&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}")].join(''),(function (){var G__11400 = {};
(G__11400["subdomains"] = "012345");

return G__11400;
})());
})().addTo(bankmap);
})];

angular.module("starter.controllers").controller("mapCtrl",bankapp.controllers.main.starter_controllers_mapCtrl);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");
bankapp.controllers.main.makemark = (function bankapp$controllers$main$makemark(item){
item.loc.coordinates.reverse();

var redMarker = L.AwesomeMarkers.icon((function (){var G__11416 = {};
(G__11416["iconColor"] = "black");

(G__11416["icon"] = "location");

(G__11416["prefix"] = "ion");

return G__11416;
})());
var markerlayer = L.marker(item.loc.coordinates,(function (){var G__11420 = {};
(G__11420["icon"] = (function (){var obj_SHARP_ = (L["AwesomeMarkers"]);
var fn_SHARP_ = (obj_SHARP_["icon"]);
return fn_SHARP_.call(obj_SHARP_,(function (){var G__11424 = {};
(G__11424["icon"] = "location");

(G__11424["prefix"] = "ion");

return G__11424;
})());
})());

return G__11420;
})()).addTo(cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map")).bindPopup([cljs.core.str("\u540D\u79F0:"),cljs.core.str(item.bankname),cljs.core.str("<br>"),cljs.core.str("\u5730\u5740:"),cljs.core.str(item.address)].join('')).openPopup();
return cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"markers",cljs.core.conj.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"markers"),markerlayer));
});
bankapp.controllers.main.foo = (function bankapp$controllers$main$foo(a,b){
return (a * b);
});
bankapp.controllers.main.arr = (function bankapp$controllers$main$arr(){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reggae",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chill",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Dubstep",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Indie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Rap",new cljs.core.Keyword(null,"id","id",-1388402092),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Cowbell",new cljs.core.Keyword(null,"id","id",-1388402092),(6)], null)], null));
});

//# sourceMappingURL=main.js.map