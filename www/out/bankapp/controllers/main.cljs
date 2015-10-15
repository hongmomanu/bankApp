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


(def.module starter.controllers [])


;;加载初始化控制器
(def.controller starter.controllers.AppCtrl [$scope $ionicModal $timeout]

  (! $scope.loginData  {})

  (-> (.fromTemplateUrl  $ionicModal "templates/login.html" (clj->js {
                                                                       :scope $scope
                                                                       })) (.then  (fn [modal] (
                                                                                                 ! $scope.modal modal
                                                                                                 ))))





  (! $scope.closeLogin (fn [] ( .hide $scope.modal
                                )))

  (! $scope.login (fn [] (.show $scope.modal )

                    ))

  (! $scope.doLogin (fn []

                      ($timeout (fn [] (.closeLogin $scope)) 1000)

                      )))

(def.controller starter.controllers.PlaylistsCtrl [$scope]
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
(def.controller starter.controllers.PlaylistCtrl [$scope $stateParams]

  )
(def.controller starter.controllers.mapCtrl [$scope $stateParams]

  (println "map")
  (let [
         map (.setView (js/L.map "map" (obj :zoomControl false ))  (array 30.00641 120.580176 ) 13)
         ]
    (.addTo
      ( js/L.tileLayer "http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"
        (obj :subdomains "012345")
        )
      map
    )
    (.addTo
      ( js/L.tileLayer (str "http://t{s}.tianditu.com/cva_w/wmts?"
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}") (obj :subdomains "012345")
        )
      map
    )

    )

  )



(println "Hello world initssssssss  sssssss!")



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
