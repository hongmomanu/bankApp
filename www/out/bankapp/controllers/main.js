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
var G__7650 = {};
(G__7650["getbanksbytype"] = ((function (G__7650){
return (function (type){
return $http.post([cljs.core.str(bankapp.controllers.main.serverurl),cljs.core.str("getbanksbytype")].join(''),(((type == null))?null:(function (){var G__7654 = {};
(G__7654["type"] = type);

return G__7654;
})())).then(((function (G__7650){
return (function (response){
return response;
});})(G__7650))
);
});})(G__7650))
);

return G__7650;
})];

angular.module("starter").service("MapService",bankapp.controllers.main.starter_MapService);
bankapp.controllers.main.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout","$ionicLoading","$compile","MapService",(function ($scope,$ionicModal,$timeout,$ionicLoading,$compile,MapService){
var o_SHARP__7664 = $scope;
(o_SHARP__7664["loginData"] = cljs.core.PersistentArrayMap.EMPTY);


$ionicModal.fromTemplateUrl("templates/login.html",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),$scope], null))).then((function (modal){
var o_SHARP_ = $scope;
(o_SHARP_["modal"] = modal);

return o_SHARP_;
}));

var o_SHARP__7665 = $scope;
(o_SHARP__7665["getbanks"] = ((function (o_SHARP__7665){
return (function (type){
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (o_SHARP__7665){
return (function (p1__7658_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map").removeLayer(p1__7658_SHARP_);
});})(o_SHARP__7665))
,cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"markers")));

cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"markers",cljs.core.PersistentVector.EMPTY);

$ionicLoading.show((function (){var G__7660 = {};
(G__7660["template"] = "\u52A0\u8F7D\u4E2D..");

(G__7660["duration"] = (5000));

return G__7660;
})());

var type__$1 = ((cljs.core._EQ_.call(null,type,"all"))?null:type);
return MapService.getbanksbytype(type__$1).then(((function (type__$1,o_SHARP__7665){
return (function (response){
$ionicLoading.hide();

return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (type__$1,o_SHARP__7665){
return (function (p1__7659_SHARP_){
return bankapp.controllers.main.makemark.call(null,p1__7659_SHARP_,$compile,$scope);
});})(type__$1,o_SHARP__7665))
,(response["data"])));
});})(type__$1,o_SHARP__7665))
);
});})(o_SHARP__7665))
);


var o_SHARP__7666 = $scope;
(o_SHARP__7666["closeLogin"] = ((function (o_SHARP__7666){
return (function (){
return ($scope["modal"]).hide();
});})(o_SHARP__7666))
);


var o_SHARP__7667 = $scope;
(o_SHARP__7667["login"] = ((function (o_SHARP__7667){
return (function (){
return ($scope["modal"]).show();
});})(o_SHARP__7667))
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
bankapp.controllers.main.starter_controllers_PlaylistCtrl = ["$scope","$stateParams","$compile",(function ($scope,$stateParams,$compile){
return null;
})];

angular.module("starter.controllers").controller("PlaylistCtrl",bankapp.controllers.main.starter_controllers_PlaylistCtrl);
bankapp.controllers.main.starter_controllers_mapCtrl = ["$scope","$stateParams","$compile","$ionicModal","$ionicLoading",(function ($scope,$stateParams,$compile,$ionicModal,$ionicLoading){
var o_SHARP__7688 = $scope;
(o_SHARP__7688["bankinfowion"] = cljs.core.PersistentArrayMap.EMPTY);


var o_SHARP__7689 = $scope;
(o_SHARP__7689["waitingnumber"] = "20");


var o_SHARP__7690 = $scope;
(o_SHARP__7690["nownumber"] = "121");


var o_SHARP__7691 = $scope;
(o_SHARP__7691["nowBoot"] = ((function (o_SHARP__7691){
return (function (){
cljs.core.println.call(null,"boot");

return $ionicLoading.show((function (){var G__7668 = {};
(G__7668["template"] = "\u63A5\u53E3\u6682\u65F6\u672A\u5F00\u653E..");

(G__7668["duration"] = (3000));

return G__7668;
})());
});})(o_SHARP__7691))
);


var o_SHARP__7692 = $scope;
(o_SHARP__7692["closebankinfoWin"] = ((function (o_SHARP__7692){
return (function (){
return ($scope["bankinfowion"]).hide();
});})(o_SHARP__7692))
);


var o_SHARP__7693 = $scope;
(o_SHARP__7693["tipdetail"] = ((function (o_SHARP__7693){
return (function (bankid){
cljs.core.println.call(null,bankid);

return $ionicModal.fromTemplateUrl("templates/bankinfo.html",(function (){var G__7672 = {};
(G__7672["scope"] = $scope);

return G__7672;
})()).then(((function (o_SHARP__7693){
return (function (modal){
var o_SHARP__7694__$1 = $scope;
(o_SHARP__7694__$1["bankinfowion"] = modal);


return ($scope["bankinfowion"]).show();
});})(o_SHARP__7693))
);
});})(o_SHARP__7693))
);


cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"map",(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["map"]);
return fn_SHARP_.call(obj_SHARP_,"map",(function (){var G__7676 = {};
(G__7676["zoomControl"] = false);

return G__7676;
})());
})().setView([30.00641,120.580176],(13)));

var bankmap = cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map");
bankmap.on("popupopen",((function (bankmap){
return (function (e){
return $compile.call(null,$(".markdiv")).call(null,$scope);
});})(bankmap))
);

(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,"http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",(function (){var G__7680 = {};
(G__7680["subdomains"] = "012345");

return G__7680;
})());
})().addTo(bankmap);

return (function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str("http://t{s}.tianditu.com/cva_w/wmts?"),cljs.core.str("SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"),cljs.core.str("&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}")].join(''),(function (){var G__7684 = {};
(G__7684["subdomains"] = "012345");

return G__7684;
})());
})().addTo(bankmap);
})];

angular.module("starter.controllers").controller("mapCtrl",bankapp.controllers.main.starter_controllers_mapCtrl);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");
bankapp.controllers.main.makemark = (function bankapp$controllers$main$makemark(item,$compile,$scope){
item.loc.coordinates.reverse();

var redMarker = L.AwesomeMarkers.icon((function (){var G__7707 = {};
(G__7707["iconColor"] = "black");

(G__7707["icon"] = "location");

(G__7707["prefix"] = "ion");

return G__7707;
})());
var markerlayer = L.marker(item.loc.coordinates,(function (){var G__7711 = {};
(G__7711["icon"] = (function (){var obj_SHARP_ = (L["AwesomeMarkers"]);
var fn_SHARP_ = (obj_SHARP_["icon"]);
return fn_SHARP_.call(obj_SHARP_,(function (){var G__7715 = {};
(G__7715["icon"] = "location");

(G__7715["prefix"] = "ion");

return G__7715;
})());
})());

return G__7711;
})()).addTo(cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map")).bindPopup([cljs.core.str("<div class=\"markdiv\"><div class=\"tipdiv\">\u540D\u79F0 : "),cljs.core.str(item.bankname),cljs.core.str("<br>"),cljs.core.str("\u5730\u5740 : "),cljs.core.str(item.address),cljs.core.str("<br></div>"),cljs.core.str("<div class=\"tipbutton\"><button class=\"button button-clear icon button-calm ion-android-compass\">\u5BFC\u822A</button>"),cljs.core.str("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  ng-click=\"tipdetail('"),cljs.core.str(item.bankid),cljs.core.str("')\"  class=\"button   button-clear  icon  button-calm     ion-android-apps\">\u8BE6\u7EC6</button></div></div>")].join('')).openPopup();
return cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"markers",cljs.core.conj.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"markers"),markerlayer));
});
bankapp.controllers.main.foo = (function bankapp$controllers$main$foo(a,b){
return (a * b);
});
bankapp.controllers.main.arr = (function bankapp$controllers$main$arr(){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reggae",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chill",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Dubstep",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Indie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Rap",new cljs.core.Keyword(null,"id","id",-1388402092),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Cowbell",new cljs.core.Keyword(null,"id","id",-1388402092),(6)], null)], null));
});

//# sourceMappingURL=main.js.map