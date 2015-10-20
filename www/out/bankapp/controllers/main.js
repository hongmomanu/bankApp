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
var G__17544 = {};
(G__17544["getbanksbytype"] = ((function (G__17544){
return (function (type){
return $http.post([cljs.core.str(bankapp.controllers.main.serverurl),cljs.core.str("getbanksbytype")].join(''),(((type == null))?null:(function (){var G__17548 = {};
(G__17548["type"] = type);

return G__17548;
})())).then(((function (G__17544){
return (function (response){
return response;
});})(G__17544))
);
});})(G__17544))
);

return G__17544;
})];

angular.module("starter").service("MapService",bankapp.controllers.main.starter_MapService);
bankapp.controllers.main.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout","$ionicLoading","$compile","MapService",(function ($scope,$ionicModal,$timeout,$ionicLoading,$compile,MapService){
var o_SHARP__17558 = $scope;
(o_SHARP__17558["loginData"] = cljs.core.PersistentArrayMap.EMPTY);


$ionicModal.fromTemplateUrl("templates/login.html",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),$scope], null))).then((function (modal){
var o_SHARP_ = $scope;
(o_SHARP_["modal"] = modal);

return o_SHARP_;
}));

var o_SHARP__17559 = $scope;
(o_SHARP__17559["getbanks"] = ((function (o_SHARP__17559){
return (function (type){
cljs.core.println.call(null,"1212122");

cljs.core.dorun.call(null,cljs.core.map.call(null,((function (o_SHARP__17559){
return (function (p1__17552_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"map").removeLayer(p1__17552_SHARP_);
});})(o_SHARP__17559))
,cljs.core.get.call(null,cljs.core.deref.call(null,bankapp.controllers.main.global_hub),"markers")));

cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"markers",cljs.core.PersistentVector.EMPTY);

$ionicLoading.show((function (){var G__17554 = {};
(G__17554["template"] = "\u52A0\u8F7D\u4E2D..");

(G__17554["duration"] = (30000));

return G__17554;
})());

var type__$1 = ((cljs.core._EQ_.call(null,type,"all"))?null:type);
return MapService.getbanksbytype(type__$1).then(((function (type__$1,o_SHARP__17559){
return (function (response){
$ionicLoading.hide();

return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (type__$1,o_SHARP__17559){
return (function (p1__17553_SHARP_){
return bankapp.controllers.main.makemark.call(null,p1__17553_SHARP_,$compile,$scope);
});})(type__$1,o_SHARP__17559))
,(response["data"])));
});})(type__$1,o_SHARP__17559))
);
});})(o_SHARP__17559))
);


var o_SHARP__17560 = $scope;
(o_SHARP__17560["closeLogin"] = ((function (o_SHARP__17560){
return (function (){
return ($scope["modal"]).hide();
});})(o_SHARP__17560))
);


var o_SHARP__17561 = $scope;
(o_SHARP__17561["login"] = ((function (o_SHARP__17561){
return (function (){
return ($scope["modal"]).show();
});})(o_SHARP__17561))
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
bankapp.controllers.main.starter_controllers_mapCtrl = ["$scope","$stateParams","$compile","$ionicModal",(function ($scope,$stateParams,$compile,$ionicModal){
var o_SHARP__17578 = $scope;
(o_SHARP__17578["tipdetail"] = ((function (o_SHARP__17578){
return (function (bankid){
cljs.core.println.call(null,bankid);

return $ionicModal.fromTemplateUrl("templates/bankinfo.html",(function (){var G__17562 = {};
(G__17562["scope"] = $scope);

return G__17562;
})()).then(((function (o_SHARP__17578){
return (function (modal){
return modal.show();
});})(o_SHARP__17578))
);
});})(o_SHARP__17578))
);


cljs.core.swap_BANG_.call(null,bankapp.controllers.main.global_hub,cljs.core.assoc,"map",(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["map"]);
return fn_SHARP_.call(obj_SHARP_,"map",(function (){var G__17566 = {};
(G__17566["zoomControl"] = false);

return G__17566;
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
return fn_SHARP_.call(obj_SHARP_,"http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",(function (){var G__17570 = {};
(G__17570["subdomains"] = "012345");

return G__17570;
})());
})().addTo(bankmap);

return (function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str("http://t{s}.tianditu.com/cva_w/wmts?"),cljs.core.str("SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"),cljs.core.str("&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}")].join(''),(function (){var G__17574 = {};
(G__17574["subdomains"] = "012345");

return G__17574;
})());
})().addTo(bankmap);
})];

angular.module("starter.controllers").controller("mapCtrl",bankapp.controllers.main.starter_controllers_mapCtrl);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");
bankapp.controllers.main.makemark = (function bankapp$controllers$main$makemark(item,$compile,$scope){
item.loc.coordinates.reverse();

var redMarker = L.AwesomeMarkers.icon((function (){var G__17591 = {};
(G__17591["iconColor"] = "black");

(G__17591["icon"] = "location");

(G__17591["prefix"] = "ion");

return G__17591;
})());
var markerlayer = L.marker(item.loc.coordinates,(function (){var G__17595 = {};
(G__17595["icon"] = (function (){var obj_SHARP_ = (L["AwesomeMarkers"]);
var fn_SHARP_ = (obj_SHARP_["icon"]);
return fn_SHARP_.call(obj_SHARP_,(function (){var G__17599 = {};
(G__17599["icon"] = "location");

(G__17599["prefix"] = "ion");

return G__17599;
})());
})());

return G__17595;
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