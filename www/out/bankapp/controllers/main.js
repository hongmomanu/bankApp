// Compiled by ClojureScript 1.7.48 {}
goog.provide('bankapp.controllers.main');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
bankapp.controllers.main.starter_controllers = angular.module("starter.controllers",[]);
bankapp.controllers.main.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout",(function ($scope,$ionicModal,$timeout){
var o_SHARP__6459 = $scope;
(o_SHARP__6459["loginData"] = cljs.core.PersistentArrayMap.EMPTY);


$ionicModal.fromTemplateUrl("templates/login.html",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),$scope], null))).then((function (modal){
var o_SHARP_ = $scope;
(o_SHARP_["modal"] = modal);

return o_SHARP_;
}));

var o_SHARP__6460 = $scope;
(o_SHARP__6460["closeLogin"] = ((function (o_SHARP__6460){
return (function (){
return ($scope["modal"]).hide();
});})(o_SHARP__6460))
);


var o_SHARP__6461 = $scope;
(o_SHARP__6461["login"] = ((function (o_SHARP__6461){
return (function (){
return ($scope["modal"]).show();
});})(o_SHARP__6461))
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

var map = (function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["map"]);
return fn_SHARP_.call(obj_SHARP_,"map",(function (){var G__6462 = {};
(G__6462["zoomControl"] = false);

return G__6462;
})());
})().setView([30.274089,120.15506900000003],(13));
(function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,"http://t0.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}");
})().addTo(map);

return (function (){var obj_SHARP_ = L;
var fn_SHARP_ = (obj_SHARP_["tileLayer"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str("http://t0.tianditu.com/cva_w/wmts?"),cljs.core.str("SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"),cljs.core.str("&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}")].join(''));
})().addTo(map);
})];

angular.module("starter.controllers").controller("mapCtrl",bankapp.controllers.main.starter_controllers_mapCtrl);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");
bankapp.controllers.main.foo = (function bankapp$controllers$main$foo(a,b){
return (a * b);
});
bankapp.controllers.main.arr = (function bankapp$controllers$main$arr(){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reggae",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chill",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Dubstep",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Indie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Rap",new cljs.core.Keyword(null,"id","id",-1388402092),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Cowbell",new cljs.core.Keyword(null,"id","id",-1388402092),(6)], null)], null));
});

//# sourceMappingURL=main.js.map