(ns bankapp.controllers.main
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )





#_(defonce conn
    (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def serverurl "http://localhost:3000/")

;(def bankmap nil)
(def global-hub (atom {:markers []}))





(def.module starter.controllers [])


(def.service starter.MapService [$http]
  (obj
    :getbanksbytype (fn [type]
                (-> $http
                  (.post (str serverurl "getbanksbytype") (when-not (nil? type) (obj  :type  type  )))
                  (.then (fn [response] response))))


    ))


;;加载初始化控制器
(def.controller starter.controllers.AppCtrl [$scope $ionicModal $timeout  $ionicLoading $compile MapService]

  (! $scope.loginData  {})


  (-> (.fromTemplateUrl  $ionicModal "templates/login.html" (clj->js {
                                                                       :scope $scope
                                                                       })) (.then  (fn [modal] (
                                                                                                 ! $scope.modal modal
                                                                                                 ))))




  (! $scope.getbanks (fn [type]

                       (dorun (map #(.removeLayer (get @global-hub "map")  % ) (get @global-hub "markers")) )
                       (swap! global-hub assoc "markers" [])
                       (.show $ionicLoading (obj :template "加载中.."  :duration 5000))
                       (let [
                              type (if (= type "all") nil type)
                              ]
                         (-> MapService
                           (.getbanksbytype type)
                           (.then (fn [response]
                                    (.hide $ionicLoading)
                                    (dorun (map #(makemark % $compile $scope) response.data) )

                                    )))
                         )


                       ))




  (! $scope.closeLogin (fn [] ( .hide $scope.modal
                                )))

  (! $scope.login (fn [] (.show $scope.modal )

                    ))

  (! $scope.doLogin (fn []

                      ($timeout (fn [] (.closeLogin $scope)) 1000)

                      )))

(def.controller starter.controllers.PlaylistsCtrl [$scope]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  (! $scope.playlists (clj->js [
                                 { :title "Reggae"  :id 1 }
                                 { :title  "Chill"  :id 2 }
                                 { :title  "Dubstep" :id 3 }
                                 { :title  "Indie"  :id 4 }
                                 { :title  "Rap" :id 5 }
                                 { :title  "Cowbell" :id 6 }
                                 ]))

  ;;(println $scope.playlists)

  )
(def.controller starter.controllers.PlaylistCtrl [$scope $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  )
(def.controller starter.controllers.mapCtrl [$scope $stateParams $compile $ionicModal $ionicLoading]

  (! $scope.bankinfowion {})

  (! $scope.waitingnumber "20")
  (! $scope.nownumber "121")

  (! $scope.nowBoot (fn []

                      (println "boot")
                      (.show $ionicLoading (obj :template "接口暂时未开放.."  :duration 3000))

                      ))

  (! $scope.closebankinfoWin (fn []

                               (.hide $scope.bankinfowion)
                               ;(println "hahaha")
                               ))

  (! $scope.tipdetail (fn [bankid]

                        (println bankid)

                        (-> (.fromTemplateUrl $ionicModal "templates/bankinfo.html" (obj :scope $scope))
                          (.then (fn [modal]
                                   (! $scope.bankinfowion modal)
                                   (.show $scope.bankinfowion)
                                   ))
                          )))






  (swap! global-hub assoc "map" (.setView (js/L.map "map" (obj :zoomControl false  ))  (array 30.00641 120.580176 ) 13))
  ;(! bankmap  (.setView (js/L.map "map" (obj :zoomControl false ))  (array 30.00641 120.580176 ) 13))
  (let [
         bankmap (get @global-hub "map")
         ]
    (.on bankmap "popupopen" (fn [e]
                                       (($compile   (js/$ ".markdiv")) $scope )

                                       ) )
    (.addTo
      ( js/L.tileLayer "http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"
        (obj :subdomains "012345")
        )
      bankmap
    )
    (.addTo
      ( js/L.tileLayer (str "http://t{s}.tianditu.com/cva_w/wmts?"
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}") (obj :subdomains "012345")
        )
      bankmap
    )

    )






  )



(println "Hello world initssssssss  sssssss!")



(defn makemark [item $compile $scope]
  (.reverse item.loc.coordinates )
  (let [
          redMarker ( js/L.AwesomeMarkers.icon (obj :icon "location" :prefix "ion"
                                                  :iconColor "black"
                                                 ))

          markerlayer (.openPopup (.bindPopup

                                    (.addTo (js/L.marker item.loc.coordinates
                                              (obj :icon ( js/L.AwesomeMarkers.icon (obj :icon "location" :prefix "ion"

                                                                                      ))) )
                                      (get @global-hub "map"))


                                              (str "<div class=\"markdiv\"><div class=\"tipdiv\">名称 : " item.bankname "<br>" "地址 : " item.address "<br></div>"
                                                "<div class=\"tipbutton\"><button class=\"button button-clear icon button-calm ion-android-compass\">导航</button>"
                                                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  ng-click=\"tipdetail('" item.bankid "')\"  class=\"button   button-clear  icon  button-calm     ion-android-apps\">详细</button></div></div>"
                                                )

                                    ))

         ]

    ;(.on markerlayer "click" (fn [] (println "ds")))




    (swap! global-hub assoc "markers" (conj (get @global-hub "markers") markerlayer ))


    )

  )

(defn foo [a b]
  (* a b)) ;; CHANGED

(defn arr []

  (clj->js [
             { :title "Reggae"  :id 1 }
             { :title  "Chill"  :id 2 }
             { :title  "Dubstep" :id 3 }
             { :title  "Indie"  :id 4 }
             { :title  "Rap" :id 5 }
             { :title  "Cowbell" :id 6 }
             ]) )
